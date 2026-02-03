"use client"

import { useMemo } from "react"
import { generateOrderBook, formatPrice, formatSize, type TradingPair } from "@/lib/trading-store"

interface OrderBookProps {
  pair: TradingPair
}

export function OrderBook({ pair }: OrderBookProps) {
  const { bids, asks } = useMemo(() => generateOrderBook(pair.price), [pair.price])
  const maxTotal = Math.max(bids[bids.length - 1]?.total || 0, asks[asks.length - 1]?.total || 0)

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <h3 className="text-sm font-semibold text-foreground">Order Book</h3>
        <span className="text-xs text-muted-foreground">Spread: 0.01%</span>
      </div>

      {/* Header */}
      <div className="grid grid-cols-3 gap-1 px-3 py-1.5 text-xs text-muted-foreground">
        <span>Price ({pair.quoteAsset})</span>
        <span className="text-right">Size ({pair.baseAsset})</span>
        <span className="text-right">Total</span>
      </div>

      {/* Asks (sells) - reversed to show lowest at bottom */}
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full flex-col-reverse">
          {asks.slice(0, 12).map((ask, i) => (
            <div
              key={`ask-${i}`}
              className="relative grid grid-cols-3 gap-1 px-3 py-0.5 text-xs"
            >
              <div
                className="absolute inset-y-0 right-0 bg-red-500/10"
                style={{ width: `${(ask.total / maxTotal) * 100}%` }}
              />
              <span className="relative text-red-500">{formatPrice(ask.price)}</span>
              <span className="relative text-right text-foreground">{formatSize(ask.size)}</span>
              <span className="relative text-right text-muted-foreground">{formatSize(ask.total)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Spread / Current Price */}
      <div className="border-y border-border bg-muted/50 px-3 py-2">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            {formatPrice(pair.price)}
          </span>
          <span className={`text-sm ${pair.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
            {pair.change24h >= 0 ? "+" : ""}{pair.change24h.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Bids (buys) */}
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full flex-col">
          {bids.slice(0, 12).map((bid, i) => (
            <div
              key={`bid-${i}`}
              className="relative grid grid-cols-3 gap-1 px-3 py-0.5 text-xs"
            >
              <div
                className="absolute inset-y-0 right-0 bg-green-500/10"
                style={{ width: `${(bid.total / maxTotal) * 100}%` }}
              />
              <span className="relative text-green-500">{formatPrice(bid.price)}</span>
              <span className="relative text-right text-foreground">{formatSize(bid.size)}</span>
              <span className="relative text-right text-muted-foreground">{formatSize(bid.total)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
