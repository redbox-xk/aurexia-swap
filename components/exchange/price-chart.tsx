"use client"

import { useMemo } from "react"
import { type TradingPair, formatPrice, formatVolume } from "@/lib/trading-store"

interface PriceChartProps {
  pair: TradingPair
}

interface Candle {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export function PriceChart({ pair }: PriceChartProps) {
  // Generate mock candlestick data
  const candles: Candle[] = useMemo(() => {
    const data: Candle[] = []
    let lastClose = pair.price * 0.95

    for (let i = 0; i < 50; i++) {
      const change = (Math.random() - 0.48) * 0.02
      const open = lastClose
      const close = open * (1 + change)
      const high = Math.max(open, close) * (1 + Math.random() * 0.005)
      const low = Math.min(open, close) * (1 - Math.random() * 0.005)
      const volume = Math.random() * 1000000 + 100000

      data.push({
        time: Date.now() - (50 - i) * 3600000,
        open,
        high,
        low,
        close,
        volume,
      })

      lastClose = close
    }

    return data
  }, [pair.price])

  const minPrice = Math.min(...candles.map((c) => c.low))
  const maxPrice = Math.max(...candles.map((c) => c.high))
  const priceRange = maxPrice - minPrice
  const maxVolume = Math.max(...candles.map((c) => c.volume))

  const chartHeight = 280
  const volumeHeight = 60
  const candleWidth = 8
  const gap = 4

  const scaleY = (price: number) => {
    return chartHeight - ((price - minPrice) / priceRange) * chartHeight
  }

  const scaleVolume = (volume: number) => {
    return (volume / maxVolume) * volumeHeight
  }

  return (
    <div className="flex h-full flex-col bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            {formatPrice(pair.price)}
          </span>
          <span className={`text-sm font-medium ${pair.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
            {pair.change24h >= 0 ? "+" : ""}{pair.change24h.toFixed(2)}%
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <div>
            <span className="mr-1">H:</span>
            <span className="text-foreground">{formatPrice(pair.high24h)}</span>
          </div>
          <div>
            <span className="mr-1">L:</span>
            <span className="text-foreground">{formatPrice(pair.low24h)}</span>
          </div>
          <div>
            <span className="mr-1">Vol:</span>
            <span className="text-foreground">{formatVolume(pair.volume24h)}</span>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 overflow-hidden p-2">
        <svg
          width="100%"
          height={chartHeight + volumeHeight + 20}
          viewBox={`0 0 ${candles.length * (candleWidth + gap)} ${chartHeight + volumeHeight + 20}`}
          preserveAspectRatio="none"
          className="w-full"
        >
          {/* Grid Lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line
              key={ratio}
              x1="0"
              y1={ratio * chartHeight}
              x2={candles.length * (candleWidth + gap)}
              y2={ratio * chartHeight}
              stroke="currentColor"
              strokeOpacity={0.1}
              className="text-muted-foreground"
            />
          ))}

          {/* Candlesticks */}
          {candles.map((candle, i) => {
            const x = i * (candleWidth + gap)
            const isGreen = candle.close >= candle.open
            const color = isGreen ? "#22c55e" : "#ef4444"

            return (
              <g key={candle.time}>
                {/* Wick */}
                <line
                  x1={x + candleWidth / 2}
                  y1={scaleY(candle.high)}
                  x2={x + candleWidth / 2}
                  y2={scaleY(candle.low)}
                  stroke={color}
                  strokeWidth={1}
                />
                {/* Body */}
                <rect
                  x={x}
                  y={scaleY(Math.max(candle.open, candle.close))}
                  width={candleWidth}
                  height={Math.max(1, Math.abs(scaleY(candle.open) - scaleY(candle.close)))}
                  fill={color}
                  rx={1}
                />
                {/* Volume */}
                <rect
                  x={x}
                  y={chartHeight + 20 + (volumeHeight - scaleVolume(candle.volume))}
                  width={candleWidth}
                  height={scaleVolume(candle.volume)}
                  fill={color}
                  fillOpacity={0.3}
                  rx={1}
                />
              </g>
            )
          })}
        </svg>
      </div>

      {/* Timeframe Selector */}
      <div className="flex items-center gap-1 border-t border-border px-3 py-2">
        {["1m", "5m", "15m", "1H", "4H", "1D", "1W"].map((tf) => (
          <button
            key={tf}
            type="button"
            className={`rounded px-2 py-1 text-xs transition-colors ${
              tf === "1H" 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {tf}
          </button>
        ))}
      </div>
    </div>
  )
}
