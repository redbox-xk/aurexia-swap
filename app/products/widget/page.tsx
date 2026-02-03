import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Code, Palette, Shield, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Swap Widget | Aurexia",
  description: "Embed professional-grade token swaps directly into your application with our customizable widget.",
}

const features = [
  {
    icon: Code,
    title: "Easy Integration",
    description: "Add token swaps to your dApp with just a few lines of code. Works with React, Vue, and vanilla JS.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Match your brand with custom colors, fonts, and styles. Light and dark mode support included.",
  },
  {
    icon: Shield,
    title: "Non-Custodial",
    description: "Users trade directly from their wallets. No funds are ever held by the widget.",
  },
  {
    icon: Zap,
    title: "Best Execution",
    description: "Smart order routing ensures users always get the best prices across all liquidity sources.",
  },
]

const codeExample = `import { AurexiaSwap } from '@aurexia/widget';

function App() {
  return (
    <AurexiaSwap
      defaultInputToken="ETH"
      defaultOutputToken="USDT"
      theme="light"
      onSwapComplete={(tx) => {
        console.log('Swap completed:', tx);
      }}
    />
  );
}`

export default function WidgetPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Swap Widget</p>
              <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
                Embed Token Swaps in Your dApp
              </h1>
              <p className="mb-8 text-lg text-muted-foreground text-pretty">
                Add professional-grade token swapping to your application in minutes. 
                Customizable, non-custodial, and built on Aurexia&apos;s deep liquidity.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/docs/widget">
                  <Button size="lg" className="h-12 min-w-[180px] gap-2 bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="h-12 min-w-[180px] bg-transparent">
                  View Demo
                </Button>
              </div>
            </div>

            {/* Widget Preview */}
            <div className="relative">
              <div className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Swap</h3>
                  <button type="button" className="text-muted-foreground hover:text-foreground">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* From Token */}
                <div className="mb-2 rounded-xl bg-muted p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                    <span>From</span>
                    <span>Balance: 2.45 ETH</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <input type="text" className="w-32 bg-transparent text-2xl font-semibold text-foreground outline-none" defaultValue="1.0" />
                    <button type="button" className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5">
                      <div className="h-6 w-6 rounded-full bg-blue-500" />
                      <span className="font-medium text-foreground">ETH</span>
                    </button>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="relative my-1 flex justify-center">
                  <button type="button" className="absolute -translate-y-1/2 rounded-xl border border-border bg-card p-2 hover:bg-muted">
                    <svg className="h-4 w-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>

                {/* To Token */}
                <div className="rounded-xl bg-muted p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                    <span>To</span>
                    <span>Balance: 5,234.12 USDT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <input type="text" className="w-32 bg-transparent text-2xl font-semibold text-foreground outline-none" defaultValue="3,456.78" />
                    <button type="button" className="flex items-center gap-2 rounded-full bg-card px-3 py-1.5">
                      <div className="h-6 w-6 rounded-full bg-green-500" />
                      <span className="font-medium text-foreground">USDT</span>
                    </button>
                  </div>
                </div>

                <Button className="mt-6 w-full bg-primary text-primary-foreground">
                  Connect Wallet
                </Button>
              </div>
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

      {/* Code Example */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                Simple Integration
              </h2>
              <p className="mb-6 text-muted-foreground">
                Install the package and add the component to your app. That&apos;s it. 
                The widget handles wallet connections, token selection, and transaction signing.
              </p>
              <ul className="space-y-3">
                {["Works with React, Vue, Angular, and vanilla JS", "TypeScript support out of the box", "Automatic wallet detection", "Built-in error handling"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-[#1a1b26] shadow-xl">
              <div className="flex items-center gap-2 border-b border-border/20 bg-[#24283b] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-xs text-gray-400">App.tsx</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="font-mono text-gray-300">{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
