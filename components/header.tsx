"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WalletButton } from "@/components/wallet-button"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  {
    label: "Products",
    items: [
      { label: "Exchange", href: "/exchange", description: "Trade tokens with deep liquidity" },
      { label: "API", href: "/products/api", description: "Programmatic trading access" },
      { label: "Widget", href: "/products/widget", description: "Embed trading in your app" },
      { label: "Liquidity", href: "/products/liquidity", description: "Provide liquidity & earn" },
    ],
  },
  {
    label: "Developers",
    items: [
      { label: "Documentation", href: "/docs", description: "Getting started guides" },
      { label: "API Reference", href: "/docs/api", description: "Full API documentation" },
      { label: "SDK", href: "/docs/sdk", description: "JavaScript/TypeScript SDK" },
      { label: "GitHub", href: "https://github.com/aurexia", description: "Open source repos" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about", description: "Our mission and team" },
      { label: "Blog", href: "/blog", description: "News and updates" },
      { label: "Careers", href: "/careers", description: "Join our team" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
          <Image
            src="/aurexia-logo.png"
            alt="Aurexia"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-semibold tracking-wide text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            AUREXIA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <DropdownMenu key={link.label}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-muted-foreground hover:text-foreground hover:bg-transparent">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {link.items.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="cursor-pointer">
                    <Link href={item.href} className="flex flex-col items-start gap-1 py-2">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/exchange">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Trade
            </Button>
          </Link>
          <WalletButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`border-t border-border bg-background md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-[80vh]' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((group) => (
            <div key={group.label} className="mb-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4 border-t border-border pt-4">
            <WalletButton />
          </div>
        </nav>
      </div>
    </header>
  )
}
