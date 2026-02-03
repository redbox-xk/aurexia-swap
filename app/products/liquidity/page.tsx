"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/lib/wallet-context"
import { Wallet, TrendingUp, Shield, Coins, ArrowRight, Info } from "lucide-react"
import Link from "next/link"

const pools = [
  { pair: "ETH/USDT", tvl: 45678901, apy: 12.5, volume24h: 12345678, myLiquidity: 0 },
  { pair: "BTC/USDT", tvl: 78901234, apy: 8.2, volume24h: 23456789, myLiquidity: 0 },
  { pair: "ARB/USDT", tvl: 5678901, apy: 24.8, volume24h: 3456789, myLiquidity: 0 },
  { pair: "MATIC/USDT", tvl: 4567890, apy: 18.3, volume24h: 2345678, myLiquidity: 0 },
  { pair: "LINK/USDT", tvl: 3456789, apy: 15.6, volume24h: 1234567, myLiquidity: 0 },
]

const benefits = [
  {
    icon: Coins,
    title: "Earn Trading Fees",
    description: "Earn a share of all trading fees from swaps in the pools you provide liquidity to.",
  },
  {
    icon: TrendingUp,
    title: "Liquidity Mining",
    description: "Earn additional AURX tokens as rewards for providing liquidity to incentivized pools.",
  },
  {
    icon: Shield,
    title: "Impermanent Loss Protection",
    description: "Our smart contracts include IL protection for liquidity held longer than 30 days.",
  },
]

function formatCurrency(value: number): string {
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`
  return `$${value.toFixed(2)}`
}

export default function LiquidityPage() {
  const { isConnected, connect } = useWallet()

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Liquidity Pools</p>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              Earn Yield on Your Crypto
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">
              Provide liquidity to Aurexia pools and earn trading fees plus liquidity mining rewards. 
              Non-custodial, transparent, and built on battle-tested smart contracts.
            </p>
            {!isConnected && (
              <Button onClick={connect} size="lg" className="h-12 gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Wallet className="h-4 w-4" />
                Connect Wallet to Start
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pools Table */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              Active Pools
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4" />
              APY includes trading fees + rewards
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Pool</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">TVL</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">APY</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">24h Volume</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">My Liquidity</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {pools.map((pool) => (
                  <tr key={pool.pair} className="border-b border-border/50 transition-colors hover:bg-muted/30">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full bg-blue-500/20 ring-2 ring-card" />
                          <div className="h-8 w-8 rounded-full bg-green-500/20 ring-2 ring-card" />
                        </div>
                        <span className="font-semibold text-foreground">{pool.pair}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-foreground">{formatCurrency(pool.tvl)}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="font-semibold text-green-500">{pool.apy}%</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-muted-foreground">{formatCurrency(pool.volume24h)}</td>
                    <td className="px-6 py-4 text-right font-mono text-muted-foreground">
                      {isConnected ? formatCurrency(pool.myLiquidity) : "--"}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {isConnected ? (
                        <Button size="sm" className="bg-primary text-primary-foreground">
                          Add Liquidity
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" onClick={connect} className="bg-transparent">
                          Connect
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Start Earning?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Learn more about how liquidity provision works and the risks involved.
          </p>
          <Link href="/docs/liquidity">
            <Button variant="outline" className="gap-2 bg-transparent">
              Read the Docs
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
