// Trading pairs and market data
export interface TradingPair {
  symbol: string
  baseAsset: string
  quoteAsset: string
  price: number
  change24h: number
  high24h: number
  low24h: number
  volume24h: number
  lastUpdate: number
}

export interface OrderBookEntry {
  price: number
  size: number
  total: number
}

export interface Trade {
  id: string
  price: number
  size: number
  side: "buy" | "sell"
  timestamp: number
}

export interface Order {
  id: string
  symbol: string
  side: "buy" | "sell"
  type: "limit" | "market"
  price: number
  size: number
  filled: number
  status: "open" | "partial" | "filled" | "cancelled"
  timestamp: number
}

// Mock data generators
export const tradingPairs: TradingPair[] = [
  { symbol: "BTC_USDT", baseAsset: "BTC", quoteAsset: "USDT", price: 67542.50, change24h: 2.34, high24h: 68200, low24h: 65800, volume24h: 1234567890, lastUpdate: Date.now() },
  { symbol: "ETH_USDT", baseAsset: "ETH", quoteAsset: "USDT", price: 3456.78, change24h: -1.23, high24h: 3520, low24h: 3380, volume24h: 567890123, lastUpdate: Date.now() },
  { symbol: "ARB_USDT", baseAsset: "ARB", quoteAsset: "USDT", price: 1.234, change24h: 5.67, high24h: 1.28, low24h: 1.15, volume24h: 45678901, lastUpdate: Date.now() },
  { symbol: "MATIC_USDT", baseAsset: "MATIC", quoteAsset: "USDT", price: 0.8765, change24h: -0.45, high24h: 0.89, low24h: 0.85, volume24h: 34567890, lastUpdate: Date.now() },
  { symbol: "LINK_USDT", baseAsset: "LINK", quoteAsset: "USDT", price: 14.567, change24h: 3.21, high24h: 15.20, low24h: 13.80, volume24h: 23456789, lastUpdate: Date.now() },
  { symbol: "UNI_USDT", baseAsset: "UNI", quoteAsset: "USDT", price: 7.890, change24h: 1.45, high24h: 8.10, low24h: 7.50, volume24h: 12345678, lastUpdate: Date.now() },
  { symbol: "AAVE_USDT", baseAsset: "AAVE", quoteAsset: "USDT", price: 98.765, change24h: -2.34, high24h: 102.00, low24h: 95.00, volume24h: 9876543, lastUpdate: Date.now() },
  { symbol: "SOL_USDT", baseAsset: "SOL", quoteAsset: "USDT", price: 145.32, change24h: 4.56, high24h: 150.00, low24h: 138.00, volume24h: 87654321, lastUpdate: Date.now() },
]

export function generateOrderBook(basePrice: number): { bids: OrderBookEntry[]; asks: OrderBookEntry[] } {
  const bids: OrderBookEntry[] = []
  const asks: OrderBookEntry[] = []
  let bidTotal = 0
  let askTotal = 0

  for (let i = 0; i < 15; i++) {
    const bidPrice = basePrice * (1 - (i + 1) * 0.001)
    const bidSize = Math.random() * 10 + 0.5
    bidTotal += bidSize
    bids.push({ price: bidPrice, size: bidSize, total: bidTotal })

    const askPrice = basePrice * (1 + (i + 1) * 0.001)
    const askSize = Math.random() * 10 + 0.5
    askTotal += askSize
    asks.push({ price: askPrice, size: askSize, total: askTotal })
  }

  return { bids, asks }
}

export function generateTrades(basePrice: number, count: number = 20): Trade[] {
  const trades: Trade[] = []
  let lastPrice = basePrice

  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.5) * 0.002
    lastPrice = lastPrice * (1 + change)
    trades.push({
      id: `trade-${i}`,
      price: lastPrice,
      size: Math.random() * 5 + 0.1,
      side: Math.random() > 0.5 ? "buy" : "sell",
      timestamp: Date.now() - i * 5000,
    })
  }

  return trades
}

export function formatPrice(price: number, decimals: number = 2): string {
  if (price >= 1000) {
    return price.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  }
  return price.toFixed(decimals)
}

export function formatVolume(volume: number): string {
  if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`
  if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`
  if (volume >= 1e3) return `$${(volume / 1e3).toFixed(2)}K`
  return `$${volume.toFixed(2)}`
}

export function formatSize(size: number): string {
  return size.toFixed(4)
}
