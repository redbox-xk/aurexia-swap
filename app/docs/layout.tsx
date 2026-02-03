"use client"

import React, { Suspense } from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Github, ExternalLink, ChevronRight, Menu, X } from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quickstart" },
      { title: "Authentication", href: "/docs/auth" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { title: "Overview", href: "/docs/api" },
      { title: "REST Endpoints", href: "/docs/api/rest" },
      { title: "WebSocket Streams", href: "/docs/api/websocket" },
      { title: "Error Codes", href: "/docs/api/errors" },
    ],
  },
  {
    title: "SDK",
    links: [
      { title: "Installation", href: "/docs/sdk" },
      { title: "TypeScript SDK", href: "/docs/sdk/typescript" },
      { title: "Examples", href: "/docs/sdk/examples" },
    ],
  },
  {
    title: "Guides",
    links: [
      { title: "Place Orders", href: "/docs/guides/orders" },
      { title: "Market Making", href: "/docs/guides/market-making" },
      { title: "Liquidity Provision", href: "/docs/guides/liquidity" },
    ],
  },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/aurexia-logo.png" alt="Aurexia" width={32} height={32} className="h-8 w-8" />
              <span className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>AUREXIA</span>
            </Link>
            <span className="hidden text-sm text-muted-foreground sm:inline">Documentation</span>
          </div>

          <div className="hidden flex-1 items-center justify-center px-8 md:flex">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search documentation..." className="pl-10" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="https://github.com/aurexia" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/exchange">
              <Button size="sm" className="hidden bg-primary text-primary-foreground sm:flex">
                Launch App
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        <Suspense fallback={null}>
          <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-background pt-14 transition-transform md:static md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <nav className="h-full overflow-y-auto p-4">
              {navigation.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                            pathname === link.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          }`}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {pathname === link.href && <ChevronRight className="h-3 w-3" />}
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
                <h4 className="mb-2 text-sm font-semibold text-foreground">Need help?</h4>
                <p className="mb-3 text-xs text-muted-foreground">
                  Join our Discord community or check out the GitHub discussions.
                </p>
                <div className="flex gap-2">
                  <Link href="https://discord.gg/aurexia" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="gap-1 bg-transparent text-xs">
                      Discord <ExternalLink className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </aside>
        </Suspense>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="min-h-screen flex-1 px-4 py-8 md:px-8 md:py-12">
          {children}
        </main>
      </div>
    </div>
  )
}
