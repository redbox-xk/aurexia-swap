"use client"

import { useMemo } from "react"
import { generateTrades, formatPrice, formatSize, type TradingPair } from "@/lib/trading-store"

interface TradeHistoryProps {
  pair: TradingPair
}

export function TradeHistory({ pair }: TradeHistoryProps) {
  const trades = useMemo(() => generateTrades(pair.price, 25), [pair.price])

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString("en-US", { hour12: false })
  }

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="border-b border-border px-3 py-2">
        <h3 className="text-sm font-semibold text-foreground">Recent Trades</h3>
      </div>

      {/* Header */}
      <div className="grid grid-cols-3 gap-1 px-3 py-1.5 text-xs text-muted-foreground">
        <span>Price ({pair.quoteAsset})</span>
        <span className="text-right">Size ({pair.baseAsset})</span>
        <span className="text-right">Time</span>
      </div>

      {/* Trades */}
      <div className="flex-1 overflow-y-auto">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="grid grid-cols-3 gap-1 px-3 py-0.5 text-xs transition-colors duration-150 hover:bg-muted/50"
          >
            <span className={trade.side === "buy" ? "text-green-500" : "text-red-500"}>
              {formatPrice(trade.price)}
            </span>
            <span className="text-right text-foreground">{formatSize(trade.size)}</span>
            <span className="text-right text-muted-foreground">{formatTime(trade.timestamp)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
