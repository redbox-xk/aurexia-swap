"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

interface WalletState {
  address: string | null
  chainId: number | null
  balance: string
  isConnecting: boolean
  isConnected: boolean
}

interface WalletContextType extends WalletState {
  connect: () => Promise<void>
  disconnect: () => void
  switchChain: (chainId: number) => Promise<void>
}

const WalletContext = createContext<WalletContextType | null>(null)

const SUPPORTED_CHAINS = {
  1: { name: "Ethereum", symbol: "ETH" },
  42161: { name: "Arbitrum", symbol: "ETH" },
  137: { name: "Polygon", symbol: "MATIC" },
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WalletState>({
    address: null,
    chainId: null,
    balance: "0",
    isConnecting: false,
    isConnected: false,
  })

  const updateBalance = useCallback(async (address: string) => {
    if (typeof window.ethereum === "undefined") return
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      const ethBalance = Number.parseInt(balance, 16) / 1e18
      setState(prev => ({ ...prev, balance: ethBalance.toFixed(4) }))
    } catch (error) {
      console.error("Failed to get balance:", error)
    }
  }, [])

  const connect = useCallback(async () => {
    if (typeof window.ethereum === "undefined") {
      window.open("https://metamask.io/download/", "_blank")
      return
    }

    setState(prev => ({ ...prev, isConnecting: true }))

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      })

      const address = accounts[0]
      setState(prev => ({
        ...prev,
        address,
        chainId: Number.parseInt(chainId, 16),
        isConnected: true,
        isConnecting: false,
      }))
      
      await updateBalance(address)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      setState(prev => ({ ...prev, isConnecting: false }))
    }
  }, [updateBalance])

  const disconnect = useCallback(() => {
    setState({
      address: null,
      chainId: null,
      balance: "0",
      isConnecting: false,
      isConnected: false,
    })
  }, [])

  const switchChain = useCallback(async (chainId: number) => {
    if (typeof window.ethereum === "undefined") return

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      })
    } catch (error: unknown) {
      const switchError = error as { code?: number }
      if (switchError.code === 4902) {
        console.error("Chain not added to wallet")
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window.ethereum === "undefined") return

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnect()
      } else {
        setState(prev => ({ ...prev, address: accounts[0] }))
        updateBalance(accounts[0])
      }
    }

    const handleChainChanged = (chainId: string) => {
      setState(prev => ({ ...prev, chainId: Number.parseInt(chainId, 16) }))
    }

    window.ethereum.on("accountsChanged", handleAccountsChanged)
    window.ethereum.on("chainChanged", handleChainChanged)

    // Check if already connected
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts: string[]) => {
        if (accounts.length > 0) {
          connect()
        }
      })
      .catch(console.error)

    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountsChanged)
      window.ethereum?.removeListener("chainChanged", handleChainChanged)
    }
  }, [connect, disconnect, updateBalance])

  return (
    <WalletContext.Provider value={{ ...state, connect, disconnect, switchChain }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

// Type declarations for ethereum
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
      on: (event: string, callback: (...args: unknown[]) => void) => void
      removeListener: (event: string, callback: (...args: unknown[]) => void) => void
    }
  }
}
