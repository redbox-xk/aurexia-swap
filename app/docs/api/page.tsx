import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "API Reference | Aurexia",
  description: "Complete REST and WebSocket API documentation for Aurexia DEX.",
}

const endpoints = [
  {
    category: "Markets",
    endpoints: [
      { method: "GET", path: "/v1/markets", description: "List all available trading pairs" },
      { method: "GET", path: "/v1/markets/:symbol", description: "Get market info for a specific pair" },
      { method: "GET", path: "/v1/markets/:symbol/orderbook", description: "Get order book for a market" },
      { method: "GET", path: "/v1/markets/:symbol/trades", description: "Get recent trades for a market" },
      { method: "GET", path: "/v1/markets/:symbol/candles", description: "Get candlestick data" },
    ],
  },
  {
    category: "Orders",
    endpoints: [
      { method: "POST", path: "/v1/orders", description: "Place a new order" },
      { method: "GET", path: "/v1/orders", description: "List your open orders" },
      { method: "GET", path: "/v1/orders/:id", description: "Get order details" },
      { method: "DELETE", path: "/v1/orders/:id", description: "Cancel an order" },
      { method: "DELETE", path: "/v1/orders", description: "Cancel all orders" },
    ],
  },
  {
    category: "Account",
    endpoints: [
      { method: "GET", path: "/v1/account/balances", description: "Get your token balances" },
      { method: "GET", path: "/v1/account/history", description: "Get trade history" },
      { method: "GET", path: "/v1/account/fills", description: "Get order fills" },
    ],
  },
]

const websocketChannels = [
  { channel: "books.{symbol}", description: "Order book updates", example: "books.BTC_USDT" },
  { channel: "trades.{symbol}", description: "Real-time trades", example: "trades.ETH_USDT" },
  { channel: "ticker.{symbol}", description: "Price ticker updates", example: "ticker.ARB_USDT" },
  { channel: "orders", description: "Your order updates (authenticated)", example: "orders" },
  { channel: "fills", description: "Your trade fills (authenticated)", example: "fills" },
]

export default function APIDocsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          API Reference
        </h1>
        <p className="text-muted-foreground">
          Complete reference for the Aurexia REST API and WebSocket streams. 
          All endpoints are accessible at <code className="rounded bg-muted px-1.5 py-0.5 text-sm">https://api.aurexia.exchange</code>
        </p>
      </div>

      {/* Base URL */}
      <div className="mb-8 rounded-xl border border-border bg-card p-4">
        <h3 className="mb-2 text-sm font-semibold text-foreground">Base URLs</h3>
        <div className="space-y-2 font-mono text-sm">
          <div><span className="text-muted-foreground">REST:</span> <span className="text-foreground">https://api.aurexia.exchange</span></div>
          <div><span className="text-muted-foreground">WebSocket:</span> <span className="text-foreground">wss://api.aurexia.exchange/streams</span></div>
        </div>
      </div>

      {/* Authentication */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          Authentication
        </h2>
        <p className="mb-4 text-muted-foreground">
          Aurexia uses wallet-based authentication. Sign a message with your wallet to generate a session token.
        </p>
        <div className="rounded-xl border border-border bg-[#1a1b26] p-4">
          <pre className="overflow-x-auto text-sm">
            <code className="font-mono text-gray-300">{`// Request a nonce
GET /v1/auth/nonce?address=0x...

// Sign the nonce with your wallet, then authenticate
POST /v1/auth/login
{
  "address": "0x...",
  "signature": "0x...",
  "nonce": "abc123"
}

// Use the returned token in headers
Authorization: Bearer <token>`}</code>
          </pre>
        </div>
      </div>

      {/* REST Endpoints */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          REST Endpoints
        </h2>
        {endpoints.map((category) => (
          <div key={category.category} className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-foreground">{category.category}</h3>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              {category.endpoints.map((endpoint, i) => (
                <div key={endpoint.path} className={`flex items-center gap-4 px-4 py-3 ${i !== category.endpoints.length - 1 ? "border-b border-border" : ""}`}>
                  <span className={`rounded px-2 py-1 text-xs font-medium ${
                    endpoint.method === "GET" ? "bg-blue-500/10 text-blue-500" :
                    endpoint.method === "POST" ? "bg-green-500/10 text-green-500" :
                    "bg-red-500/10 text-red-500"
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="flex-1 font-mono text-sm text-foreground">{endpoint.path}</code>
                  <span className="hidden text-sm text-muted-foreground sm:inline">{endpoint.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* WebSocket */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          WebSocket Channels
        </h2>
        <p className="mb-4 text-muted-foreground">
          Subscribe to real-time data streams. Connect to <code className="rounded bg-muted px-1.5 py-0.5 text-sm">wss://api.aurexia.exchange/streams</code>
        </p>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Channel</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Description</th>
                <th className="hidden px-4 py-3 text-left text-sm font-medium text-muted-foreground sm:table-cell">Example</th>
              </tr>
            </thead>
            <tbody>
              {websocketChannels.map((channel) => (
                <tr key={channel.channel} className="border-b border-border/50">
                  <td className="px-4 py-3 font-mono text-sm text-foreground">{channel.channel}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{channel.description}</td>
                  <td className="hidden px-4 py-3 font-mono text-sm text-muted-foreground sm:table-cell">{channel.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Next */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 p-4">
        <div>
          <p className="text-sm text-muted-foreground">Next up</p>
          <p className="font-medium text-foreground">REST Endpoints Deep Dive</p>
        </div>
        <Link href="/docs/api/rest" className="flex items-center gap-1 text-primary hover:underline">
          Continue <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
