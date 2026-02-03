"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

const codeExample = `// Connect to Aurexia WebSocket
const ws = new WebSocket('wss://api.aurexia.exchange/streams');

// Subscribe to BTC/USDT order book
ws.send(JSON.stringify({
  method: 'subscribe',
  channels: ['books.BTC_USDT']
}));

// Place a limit order (signed by wallet)
ws.send(JSON.stringify({
  method: 'order.place',
  symbol: 'BTC_USDT',
  side: 1, // buy
  type: 2, // limit
  price: '42000.00',
  size: '0.5',
  signature: walletSignature
}));`

export function Developers() {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="developers" className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              For Developers
            </p>
            <h2 
              className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Build with Aurexia
            </h2>
            <p className="mb-6 text-lg text-muted-foreground text-pretty">
              Powerful WebSocket API for real-time market data and trading. 
              Connect your bots, build custom interfaces, or integrate into existing workflows.
            </p>
            
            <ul className="mb-8 space-y-3">
              {[
                "Real-time order book and trade streams",
                "Wallet-based authentication",
                "Complete TypeScript SDK",
                "99.99% uptime SLA",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/docs">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-200">
                  View Documentation
                </Button>
              </Link>
              <Link href="/docs/api">
                <Button variant="outline" className="border-border hover:bg-muted bg-transparent transition-all duration-200">
                  API Reference
                </Button>
              </Link>
            </div>
          </div>

          {/* Code Block */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-[#1a1b26] shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/20 bg-[#24283b] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs text-gray-400">example.ts</span>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              
              {/* Code */}
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="font-mono text-gray-300">
                  {codeExample.split('\n').map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      <span className="mr-4 select-none text-gray-600">{String(i + 1).padStart(2, ' ')}</span>
                      <span dangerouslySetInnerHTML={{ 
                        __html: line
                          .replace(/(\/\/.*)/g, '<span style="color:#565f89">$1</span>')
                          .replace(/('.*?')/g, '<span style="color:#9ece6a">$1</span>')
                          .replace(/\b(const|new|JSON)\b/g, '<span style="color:#bb9af7">$1</span>')
                          .replace(/\b(WebSocket|stringify|send)\b/g, '<span style="color:#7aa2f7">$1</span>')
                      }} />
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
