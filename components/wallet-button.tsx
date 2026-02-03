"use client"

import { useWallet } from "@/lib/wallet-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Wallet, ChevronDown, Copy, ExternalLink, LogOut, Check } from "lucide-react"
import { useState } from "react"

const CHAINS: Record<number, { name: string; icon: string }> = {
  1: { name: "Ethereum", icon: "ETH" },
  42161: { name: "Arbitrum", icon: "ARB" },
  137: { name: "Polygon", icon: "MATIC" },
}

export function WalletButton() {
  const { address, chainId, balance, isConnecting, isConnected, connect, disconnect, switchChain } = useWallet()
  const [copied, setCopied] = useState(false)

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!isConnected) {
    return (
      <Button
        onClick={connect}
        disabled={isConnecting}
        className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
      >
        <Wallet className="h-4 w-4" />
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </Button>
    )
  }

  const currentChain = chainId ? CHAINS[chainId] : null

  return (
    <div className="flex items-center gap-2">
      {/* Chain Selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2 border-border bg-card text-foreground">
            <span className="font-medium">{currentChain?.icon || "?"}</span>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {Object.entries(CHAINS).map(([id, chain]) => (
            <DropdownMenuItem
              key={id}
              onClick={() => switchChain(Number(id))}
              className="cursor-pointer"
            >
              <span className="mr-2 font-medium">{chain.icon}</span>
              {chain.name}
              {chainId === Number(id) && <Check className="ml-auto h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Wallet Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 border-border bg-card text-foreground">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
              <Wallet className="h-3 w-3 text-primary" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium">{truncateAddress(address!)}</span>
              <span className="text-[10px] text-muted-foreground">{balance} {currentChain?.icon || "ETH"}</span>
            </div>
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-2">
            <p className="text-xs text-muted-foreground">Connected Wallet</p>
            <p className="font-mono text-sm">{truncateAddress(address!)}</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={copyAddress} className="cursor-pointer">
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copied ? "Copied!" : "Copy Address"}
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <a
              href={`https://etherscan.io/address/${address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View on Explorer
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={disconnect} className="cursor-pointer text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
