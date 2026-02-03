import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Code, Zap, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation | Aurexia",
  description: "Learn how to integrate with Aurexia DEX. API documentation, SDK guides, and code examples.",
}

const quickLinks = [
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get up and running with Aurexia in under 5 minutes.",
    href: "/docs/quickstart",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete REST and WebSocket API documentation.",
    href: "/docs/api",
  },
  {
    icon: Book,
    title: "SDK Guide",
    description: "Use our TypeScript SDK for faster development.",
    href: "/docs/sdk",
  },
  {
    icon: Users,
    title: "Examples",
    description: "Real-world code examples and tutorials.",
    href: "/docs/sdk/examples",
  },
]

const codeExample = `import { Aurexia } from '@aurexia/sdk';

// Initialize client with wallet
const client = new Aurexia({
  chainId: 1, // Ethereum mainnet
  wallet: window.ethereum
});

// Connect and authenticate
await client.connect();

// Place a limit order
const order = await client.orders.create({
  symbol: 'ETH_USDT',
  side: 'buy',
  type: 'limit',
  price: '3400.00',
  size: '1.5'
});

console.log('Order placed:', order.id);`

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Aurexia Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to integrate with Aurexia&apos;s decentralized exchange. 
          Build trading bots, embed swaps, or access deep liquidity programmatically.
        </p>
      </div>

      {/* Quick Links */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <div className="group rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:shadow-lg">
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Code Preview */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Quick Example
        </h2>
        <p className="mb-4 text-muted-foreground">
          Place your first order in just a few lines of code using our SDK.
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-[#1a1b26]">
          <div className="flex items-center justify-between border-b border-border/20 bg-[#24283b] px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs text-gray-400">example.ts</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="font-mono text-gray-300">{codeExample}</code>
          </pre>
        </div>
      </div>

      {/* Next Steps */}
      <div className="rounded-xl border border-border bg-muted/30 p-6">
        <h2 className="mb-2 text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Ready to get started?
        </h2>
        <p className="mb-4 text-muted-foreground">
          Follow our quick start guide to connect your wallet and place your first trade.
        </p>
        <Link href="/docs/quickstart">
          <Button className="gap-2 bg-primary text-primary-foreground">
            Quick Start Guide
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
