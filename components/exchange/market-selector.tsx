"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Search, Star } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { tradingPairs, type TradingPair, formatPrice, formatVolume } from "@/lib/trading-store"

interface MarketSelectorProps {
  selectedPair: TradingPair
  onSelectPair: (pair: TradingPair) => void
}

export function MarketSelector({ selectedPair, onSelectPair }: MarketSelectorProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [favorites, setFavorites] = useState<string[]>(["BTC_USDT", "ETH_USDT"])

  const filteredPairs = tradingPairs.filter(
    (pair) =>
      pair.symbol.toLowerCase().includes(search.toLowerCase()) ||
      pair.baseAsset.toLowerCase().includes(search.toLowerCase())
  )

  const toggleFavorite = (symbol: string) => {
    setFavorites((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    )
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto gap-2 px-3 py-2 text-left hover:bg-muted"
        >
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              {selectedPair.baseAsset}/{selectedPair.quoteAsset}
            </span>
            <span className={`text-xs ${selectedPair.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {selectedPair.change24h >= 0 ? "+" : ""}{selectedPair.change24h.toFixed(2)}%
            </span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search markets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {/* Header */}
          <div className="grid grid-cols-4 gap-2 px-3 py-2 text-xs text-muted-foreground border-b border-border">
            <span>Pair</span>
            <span className="text-right">Price</span>
            <span className="text-right">24h</span>
            <span className="text-right">Volume</span>
          </div>
          {/* Pairs */}
          {filteredPairs.map((pair) => (
            <button
              key={pair.symbol}
              type="button"
              className={`grid w-full grid-cols-4 gap-2 px-3 py-2.5 text-sm transition-colors duration-150 hover:bg-muted ${
                selectedPair.symbol === pair.symbol ? "bg-primary/5" : ""
              }`}
              onClick={() => {
                onSelectPair(pair)
                setOpen(false)
              }}
            >
              <span className="flex items-center gap-2 text-left">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFavorite(pair.symbol)
                  }}
                  className="text-muted-foreground hover:text-yellow-500 transition-colors"
                >
                  <Star
                    className={`h-3 w-3 ${favorites.includes(pair.symbol) ? "fill-yellow-500 text-yellow-500" : ""}`}
                  />
                </button>
                <span className="font-medium text-foreground">{pair.baseAsset}</span>
                <span className="text-muted-foreground">/{pair.quoteAsset}</span>
              </span>
              <span className="text-right text-foreground">{formatPrice(pair.price)}</span>
              <span className={`text-right ${pair.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                {pair.change24h >= 0 ? "+" : ""}{pair.change24h.toFixed(2)}%
              </span>
              <span className="text-right text-muted-foreground">{formatVolume(pair.volume24h)}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
