import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Zap, Globe, Lock, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trading API | Aurexia",
  description: "High-performance WebSocket and REST API for programmatic trading. Sub-10ms latency, 99.99% uptime.",
}

const features = [
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    description: "Sub-10ms order execution with co-located infrastructure for the fastest possible trading.",
  },
  {
    icon: Globe,
    title: "WebSocket Streams",
    description: "Real-time market data, order book updates, and trade notifications via WebSocket.",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Wallet-based authentication with signed messages. No API keys to manage or leak.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Comprehensive documentation, TypeScript SDK, and example implementations.",
  },
]

const endpoints = [
  { method: "GET", path: "/v1/markets", description: "List all trading pairs" },
  { method: "GET", path: "/v1/orderbook/:symbol", description: "Get order book for a symbol" },
  { method: "POST", path: "/v1/orders", description: "Place a new order" },
  { method: "DELETE", path: "/v1/orders/:id", description: "Cancel an existing order" },
  { method: "WS", path: "/streams", description: "WebSocket for real-time data" },
]

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["100 requests/minute", "5 WebSocket connections", "Basic market data", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For serious traders",
    features: ["10,000 requests/minute", "50 WebSocket connections", "Full order book depth", "Priority support", "Custom rate limits"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For institutions",
    features: ["Unlimited requests", "Unlimited connections", "Co-located servers", "Dedicated support", "Custom SLAs"],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function APIPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Trading API</p>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
              Build with Professional-Grade Infrastructure
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">
              Access deep liquidity and fast execution through our WebSocket and REST APIs. 
              Perfect for trading bots, custom interfaces, and institutional integrations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/docs/api">
                <Button size="lg" className="h-12 min-w-[180px] gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  View API Docs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs/sdk">
                <Button variant="outline" size="lg" className="h-12 min-w-[180px] bg-transparent">
                  Download SDK
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Preview */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              RESTful & WebSocket API
            </h2>
            <p className="text-muted-foreground">Simple, predictable endpoints for all trading operations</p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card">
            {endpoints.map((endpoint, i) => (
              <div key={endpoint.path} className={`flex items-center gap-4 px-4 py-3 ${i !== endpoints.length - 1 ? "border-b border-border" : ""}`}>
                <span className={`rounded px-2 py-1 text-xs font-medium ${
                  endpoint.method === "GET" ? "bg-blue-500/10 text-blue-500" :
                  endpoint.method === "POST" ? "bg-green-500/10 text-green-500" :
                  endpoint.method === "DELETE" ? "bg-red-500/10 text-red-500" :
                  "bg-primary/10 text-primary"
                }`}>
                  {endpoint.method}
                </span>
                <code className="flex-1 font-mono text-sm text-foreground">{endpoint.path}</code>
                <span className="text-sm text-muted-foreground">{endpoint.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
              API Pricing
            </h2>
            <p className="text-muted-foreground">Choose the plan that fits your trading volume</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div key={plan.name} className={`relative rounded-xl border bg-card p-6 ${plan.popular ? "border-primary shadow-lg" : "border-border"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
