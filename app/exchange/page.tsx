"use client"

import { useState } from "react"
import { ExchangeHeader } from "@/components/exchange/exchange-header"
import { MarketSelector } from "@/components/exchange/market-selector"
import { PriceChart } from "@/components/exchange/price-chart"
import { OrderBook } from "@/components/exchange/order-book"
import { TradeHistory } from "@/components/exchange/trade-history"
import { OrderForm } from "@/components/exchange/order-form"
import { OpenOrders } from "@/components/exchange/open-orders"
import { tradingPairs, type TradingPair } from "@/lib/trading-store"

export default function ExchangePage() {
  const [selectedPair, setSelectedPair] = useState<TradingPair>(tradingPairs[0])

  return (
    <div className="flex h-screen flex-col bg-background">
      <ExchangeHeader />

      <div className="flex flex-1 overflow-hidden">
        {/* Main Trading Area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Market Info Bar */}
          <div className="flex items-center gap-4 border-b border-border bg-card px-4 py-2">
            <MarketSelector selectedPair={selectedPair} onSelectPair={setSelectedPair} />
            
            <div className="hidden items-center gap-6 text-xs sm:flex">
              <div>
                <span className="text-muted-foreground">24h High: </span>
                <span className="font-mono text-foreground">{selectedPair.high24h.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-muted-foreground">24h Low: </span>
                <span className="font-mono text-foreground">{selectedPair.low24h.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-muted-foreground">24h Vol: </span>
                <span className="font-mono text-foreground">
                  {(selectedPair.volume24h / 1e6).toFixed(2)}M
                </span>
              </div>
            </div>
          </div>

          {/* Chart + Order Book Row */}
          <div className="flex flex-1 overflow-hidden">
            {/* Chart */}
            <div className="flex-1 border-r border-border">
              <PriceChart pair={selectedPair} />
            </div>

            {/* Order Book & Trade History */}
            <div className="hidden w-64 flex-col border-r border-border lg:flex">
              <div className="flex-1 border-b border-border">
                <OrderBook pair={selectedPair} />
              </div>
              <div className="h-52">
                <TradeHistory pair={selectedPair} />
              </div>
            </div>

            {/* Order Form */}
            <div className="hidden w-72 xl:block">
              <OrderForm pair={selectedPair} />
            </div>
          </div>

          {/* Bottom: Orders Panel */}
          <div className="h-52 border-t border-border">
            <OpenOrders />
          </div>
        </div>

        {/* Mobile Order Form - shown on smaller screens */}
        <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card p-4 xl:hidden">
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded-lg bg-green-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
            >
              Buy {selectedPair.baseAsset}
            </button>
            <button
              type="button"
              className="flex-1 rounded-lg bg-red-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
            >
              Sell {selectedPair.baseAsset}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
