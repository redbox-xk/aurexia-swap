"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const posts = [
  {
    slug: "introducing-aurexia-v2",
    title: "Introducing Aurexia V2: Faster, Smarter, More Powerful",
    excerpt: "We are excited to announce the launch of Aurexia V2, featuring sub-millisecond order matching, enhanced liquidity aggregation, and support for 20+ new trading pairs.",
    category: "Product",
    date: "Jan 28, 2026",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
  },
  {
    slug: "polygon-integration-live",
    title: "Polygon Integration Now Live on Aurexia",
    excerpt: "Trade your favorite tokens on Polygon with near-zero gas fees. Our multi-chain expansion continues with full Polygon support.",
    category: "Announcement",
    date: "Jan 20, 2026",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "3 min read",
  },
  {
    slug: "understanding-off-chain-matching",
    title: "Understanding Off-Chain Order Matching",
    excerpt: "Learn how our hybrid architecture combines the speed of centralized exchanges with the security of decentralized settlement.",
    category: "Education",
    date: "Jan 15, 2026",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min read",
  },
  {
    slug: "security-audit-complete",
    title: "Trail of Bits Security Audit Complete",
    excerpt: "Our smart contracts have passed a comprehensive security audit by Trail of Bits. Read the full report and our commitment to security.",
    category: "Security",
    date: "Jan 10, 2026",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "4 min read",
  },
  {
    slug: "liquidity-provider-guide",
    title: "Complete Guide to Providing Liquidity on Aurexia",
    excerpt: "Maximize your returns as a liquidity provider. This comprehensive guide covers strategies, risks, and best practices.",
    category: "Education",
    date: "Jan 5, 2026",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "12 min read",
  },
  {
    slug: "2025-year-in-review",
    title: "2025: A Year in Review",
    excerpt: "From launch to $2B in trading volume - reflecting on our first year and looking ahead to 2026.",
    category: "Company",
    date: "Dec 31, 2025",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
]

const categories = ["All", "Product", "Announcement", "Education", "Security", "Company"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              News, updates, and insights from the Aurexia team.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${posts[0].slug}`} className="block mb-12">
            <Card className="overflow-hidden hover:border-primary/30 transition-colors">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-muted">
                  <Image
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{posts[0].category}</Badge>
                    <span className="text-sm text-muted-foreground">{posts[0].date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-pretty">{posts[0].excerpt}</p>
                  <span className="text-sm text-primary">{posts[0].readTime}</span>
                </CardContent>
              </div>
            </Card>
          </Link>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:border-primary/30 transition-colors overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-balance line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                    <span className="text-xs text-primary">{post.readTime}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
