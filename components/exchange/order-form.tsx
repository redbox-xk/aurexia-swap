"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWallet } from "@/lib/wallet-context"
import { type TradingPair, formatPrice } from "@/lib/trading-store"
import { Wallet } from "lucide-react"

interface OrderFormProps {
  pair: TradingPair
}

export function OrderForm({ pair }: OrderFormProps) {
  const { isConnected, connect, balance } = useWallet()
  const [side, setSide] = useState<"buy" | "sell">("buy")
  const [orderType, setOrderType] = useState<"limit" | "market">("limit")
  const [price, setPrice] = useState(formatPrice(pair.price))
  const [amount, setAmount] = useState("")
  const [sliderValue, setSliderValue] = useState([0])

  const total = Number(amount) * Number(price) || 0
  const availableBalance = side === "buy" ? Number(balance) * pair.price : Number(balance)

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value)
    if (availableBalance > 0) {
      const newAmount = ((value[0] / 100) * availableBalance / (side === "buy" ? Number(price) : 1)).toFixed(4)
      setAmount(newAmount)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isConnected) {
      connect()
      return
    }
    // In production, this would submit the order via API
    console.log("Order submitted:", { side, orderType, price, amount, total })
  }

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="border-b border-border px-3 py-2">
        <h3 className="text-sm font-semibold text-foreground">Place Order</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-1 flex-col p-3">
        {/* Buy/Sell Tabs */}
        <Tabs value={side} onValueChange={(v) => setSide(v as "buy" | "sell")} className="mb-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger 
              value="buy" 
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              Buy
            </TabsTrigger>
            <TabsTrigger 
              value="sell"
              className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
            >
              Sell
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Order Type */}
        <div className="mb-4 flex gap-2">
          <Button
            type="button"
            variant={orderType === "limit" ? "default" : "outline"}
            size="sm"
            className={orderType === "limit" ? "bg-primary text-primary-foreground" : "bg-transparent"}
            onClick={() => setOrderType("limit")}
          >
            Limit
          </Button>
          <Button
            type="button"
            variant={orderType === "market" ? "default" : "outline"}
            size="sm"
            className={orderType === "market" ? "bg-primary text-primary-foreground" : "bg-transparent"}
            onClick={() => setOrderType("market")}
          >
            Market
          </Button>
        </div>

        {/* Price Input (for limit orders) */}
        {orderType === "limit" && (
          <div className="mb-3">
            <Label className="mb-1.5 text-xs text-muted-foreground">Price ({pair.quoteAsset})</Label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              step="0.01"
              className="font-mono"
            />
          </div>
        )}

        {/* Amount Input */}
        <div className="mb-3">
          <div className="mb-1.5 flex items-center justify-between">
            <Label className="text-xs text-muted-foreground">Amount ({pair.baseAsset})</Label>
            <span className="text-xs text-muted-foreground">
              Avail: {isConnected ? `${Number(balance).toFixed(4)} ${side === "buy" ? pair.quoteAsset : pair.baseAsset}` : "--"}
            </span>
          </div>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0000"
            step="0.0001"
            className="font-mono"
          />
        </div>

        {/* Slider */}
        <div className="mb-4">
          <Slider
            value={sliderValue}
            onValueChange={handleSliderChange}
            max={100}
            step={25}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            {[0, 25, 50, 75, 100].map((v) => (
              <button
                key={v}
                type="button"
                className="hover:text-foreground transition-colors"
                onClick={() => handleSliderChange([v])}
              >
                {v}%
              </button>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="mb-4 flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
          <span className="text-xs text-muted-foreground">Total</span>
          <span className="font-mono text-sm text-foreground">
            {total.toFixed(2)} {pair.quoteAsset}
          </span>
        </div>

        {/* Submit Button */}
        {isConnected ? (
          <Button
            type="submit"
            className={`w-full ${
              side === "buy"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
            disabled={!amount || Number(amount) <= 0}
          >
            {side === "buy" ? "Buy" : "Sell"} {pair.baseAsset}
          </Button>
        ) : (
          <Button type="button" onClick={connect} className="w-full gap-2 bg-primary text-primary-foreground">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </Button>
        )}
      </form>
    </div>
  )
}
