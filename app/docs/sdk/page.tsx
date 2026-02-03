import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Terminal } from "lucide-react"

export const metadata: Metadata = {
  title: "SDK | Aurexia",
  description: "TypeScript SDK for integrating with Aurexia DEX. Easy wallet connection, order management, and real-time data.",
}

const features = [
  "Full TypeScript support with type definitions",
  "Automatic wallet connection and authentication",
  "Real-time WebSocket subscriptions",
  "Order management (create, cancel, query)",
  "Market data and order book access",
  "Built-in retry and error handling",
]

const installCode = `# npm
npm install @aurexia/sdk

# yarn
yarn add @aurexia/sdk

# pnpm
pnpm add @aurexia/sdk`

const usageExample = `import { Aurexia } from '@aurexia/sdk';

// Initialize the client
const aurexia = new Aurexia({
  chainId: 1, // Ethereum mainnet
});

// Connect wallet (prompts user)
await aurexia.connect();

// Get account balances
const balances = await aurexia.account.getBalances();
console.log('Balances:', balances);

// Subscribe to order book updates
aurexia.subscribe('books.ETH_USDT', (update) => {
  console.log('Order book update:', update);
});

// Place a limit buy order
const order = await aurexia.orders.create({
  symbol: 'ETH_USDT',
  side: 'buy',
  type: 'limit',
  price: '3400.00',
  size: '2.5',
});

console.log('Order created:', order);

// Cancel an order
await aurexia.orders.cancel(order.id);`

export default function SDKPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Aurexia SDK
        </h1>
        <p className="text-muted-foreground">
          The official TypeScript SDK for building on Aurexia. 
          Simplifies wallet connection, authentication, and all API interactions.
        </p>
      </div>

      {/* Features */}
      <div className="mb-8 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Features</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Installation */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Installation
        </h2>
        <div className="rounded-xl border border-border bg-[#1a1b26]">
          <div className="flex items-center gap-2 border-b border-border/20 bg-[#24283b] px-4 py-2">
            <Terminal className="h-4 w-4 text-gray-400" />
            <span className="text-xs text-gray-400">Terminal</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="font-mono text-gray-300">{installCode}</code>
          </pre>
        </div>
      </div>

      {/* Usage */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Basic Usage
        </h2>
        <p className="mb-4 text-muted-foreground">
          Here&apos;s a complete example showing wallet connection, subscriptions, and order management.
        </p>
        <div className="rounded-xl border border-border bg-[#1a1b26]">
          <div className="flex items-center justify-between border-b border-border/20 bg-[#24283b] px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-xs text-gray-400">app.ts</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="font-mono text-gray-300">{usageExample}</code>
          </pre>
        </div>
      </div>

      {/* API Methods */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Available Methods
        </h2>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Method</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-foreground">connect()</td>
                <td className="px-4 py-3 text-muted-foreground">Connect wallet and authenticate</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-foreground">disconnect()</td>
                <td className="px-4 py-3 text-muted-foreground">Disconnect wallet session</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-foreground">orders.create()</td>
                <td className="px-4 py-3 text-muted-foreground">Place a new order</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-foreground">orders.cancel()</td>
                <td className="px-4 py-3 text-muted-foreground">Cancel an existing order</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-foreground">orders.list()</td>
                <td className="px-4 py-3 text-muted-foreground">Get all open orders</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-foreground">markets.list()</td>
                <td className="px-4 py-3 text-muted-foreground">Get all trading pairs</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="px-4 py-3 font-mono text-foreground">markets.orderbook()</td>
                <td className="px-4 py-3 text-muted-foreground">Get order book snapshot</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-foreground">subscribe()</td>
                <td className="px-4 py-3 text-muted-foreground">Subscribe to WebSocket channel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-border bg-muted/30 p-4">
        <div>
          <p className="font-medium text-foreground">View more examples</p>
          <p className="text-sm text-muted-foreground">Real-world code samples and tutorials</p>
        </div>
        <Link href="/docs/sdk/examples">
          <Button className="gap-2 bg-primary text-primary-foreground">
            Examples <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
