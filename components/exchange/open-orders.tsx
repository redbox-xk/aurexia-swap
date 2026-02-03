"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useWallet } from "@/lib/wallet-context"
import { type Order, formatPrice, formatSize } from "@/lib/trading-store"
import { X, Wallet } from "lucide-react"

// Mock orders for demo
const mockOrders: Order[] = [
  { id: "1", symbol: "BTC_USDT", side: "buy", type: "limit", price: 65000, size: 0.5, filled: 0, status: "open", timestamp: Date.now() - 3600000 },
  { id: "2", symbol: "ETH_USDT", side: "sell", type: "limit", price: 3600, size: 2, filled: 0.5, status: "partial", timestamp: Date.now() - 7200000 },
]

const mockHistory: Order[] = [
  { id: "3", symbol: "BTC_USDT", side: "buy", type: "market", price: 64500, size: 0.25, filled: 0.25, status: "filled", timestamp: Date.now() - 86400000 },
  { id: "4", symbol: "ARB_USDT", side: "sell", type: "limit", price: 1.30, size: 1000, filled: 1000, status: "filled", timestamp: Date.now() - 172800000 },
]

export function OpenOrders() {
  const { isConnected, connect } = useWallet()
  const [orders, setOrders] = useState<Order[]>(mockOrders)

  const cancelOrder = (orderId: string) => {
    setOrders((prev) => prev.filter((o) => o.id !== orderId))
  }

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!isConnected) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-card p-6 text-center">
        <Wallet className="mb-3 h-10 w-10 text-muted-foreground" />
        <p className="mb-4 text-sm text-muted-foreground">
          Connect your wallet to view orders
        </p>
        <Button onClick={connect} className="gap-2 bg-primary text-primary-foreground">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col bg-card">
      <Tabs defaultValue="open" className="flex h-full flex-col">
        <div className="border-b border-border px-3">
          <TabsList className="h-auto bg-transparent p-0">
            <TabsTrigger 
              value="open" 
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Open Orders ({orders.length})
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Order History
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="open" className="mt-0 flex-1 overflow-auto">
          {orders.length === 0 ? (
            <div className="flex h-full items-center justify-center p-6">
              <p className="text-sm text-muted-foreground">No open orders</p>
            </div>
          ) : (
            <table className="w-full text-xs">
              <thead className="sticky top-0 bg-card">
                <tr className="text-muted-foreground">
                  <th className="px-3 py-2 text-left font-medium">Pair</th>
                  <th className="px-3 py-2 text-left font-medium">Side</th>
                  <th className="px-3 py-2 text-right font-medium">Price</th>
                  <th className="px-3 py-2 text-right font-medium">Amount</th>
                  <th className="px-3 py-2 text-right font-medium">Filled</th>
                  <th className="px-3 py-2 text-right font-medium">Time</th>
                  <th className="px-3 py-2 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-border/50 hover:bg-muted/50">
                    <td className="px-3 py-2 font-medium text-foreground">{order.symbol.replace("_", "/")}</td>
                    <td className={`px-3 py-2 ${order.side === "buy" ? "text-green-500" : "text-red-500"}`}>
                      {order.side.toUpperCase()}
                    </td>
                    <td className="px-3 py-2 text-right font-mono text-foreground">{formatPrice(order.price)}</td>
                    <td className="px-3 py-2 text-right font-mono text-foreground">{formatSize(order.size)}</td>
                    <td className="px-3 py-2 text-right font-mono text-muted-foreground">
                      {((order.filled / order.size) * 100).toFixed(0)}%
                    </td>
                    <td className="px-3 py-2 text-right text-muted-foreground">{formatTime(order.timestamp)}</td>
                    <td className="px-3 py-2 text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-muted-foreground hover:text-red-500"
                        onClick={() => cancelOrder(order.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </TabsContent>

        <TabsContent value="history" className="mt-0 flex-1 overflow-auto">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-card">
              <tr className="text-muted-foreground">
                <th className="px-3 py-2 text-left font-medium">Pair</th>
                <th className="px-3 py-2 text-left font-medium">Side</th>
                <th className="px-3 py-2 text-right font-medium">Price</th>
                <th className="px-3 py-2 text-right font-medium">Amount</th>
                <th className="px-3 py-2 text-right font-medium">Status</th>
                <th className="px-3 py-2 text-right font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockHistory.map((order) => (
                <tr key={order.id} className="border-t border-border/50 hover:bg-muted/50">
                  <td className="px-3 py-2 font-medium text-foreground">{order.symbol.replace("_", "/")}</td>
                  <td className={`px-3 py-2 ${order.side === "buy" ? "text-green-500" : "text-red-500"}`}>
                    {order.side.toUpperCase()}
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-foreground">{formatPrice(order.price)}</td>
                  <td className="px-3 py-2 text-right font-mono text-foreground">{formatSize(order.size)}</td>
                  <td className="px-3 py-2 text-right">
                    <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-green-500">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right text-muted-foreground">{formatTime(order.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  )
}
