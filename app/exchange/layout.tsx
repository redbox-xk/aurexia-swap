import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trade | Aurexia DEX",
  description: "Trade cryptocurrencies with deep liquidity across Ethereum, Arbitrum, and Polygon. Non-custodial trading with institutional-grade speed.",
}

export default function ExchangeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
