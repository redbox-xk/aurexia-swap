"use client"

import { Shield, Zap, Globe, Layers, Lock, Activity } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Non-Custodial",
    description: "Your keys, your crypto. Trade directly from your wallet without ever giving up control of your assets.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Off-chain order matching with sub-10ms latency. Experience CEX-level speed with DEX-level security.",
  },
  {
    icon: Globe,
    title: "Multi-Chain",
    description: "Trade seamlessly across Ethereum, Arbitrum, and Polygon with unified liquidity pools.",
  },
  {
    icon: Layers,
    title: "Deep Liquidity",
    description: "Aggregated order books and professional market makers ensure tight spreads on all pairs.",
  },
  {
    icon: Lock,
    title: "Audited Security",
    description: "Smart contracts audited by leading security firms. Battle-tested infrastructure you can trust.",
  },
  {
    icon: Activity,
    title: "Real-Time Data",
    description: "WebSocket API for live order book updates, trades, and portfolio tracking with 99.99% uptime.",
  },
]

export function Features() {
  return (
    <section id="products" className="relative border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Why Aurexia
          </p>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for Professional Traders
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Combining the speed and features of centralized exchanges with the security 
            and transparency of decentralized finance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
