"use client"

import Image from "next/image"
import Link from "next/link"
import { WalletButton } from "@/components/wallet-button"
import { Button } from "@/components/ui/button"
import { ChevronDown, Settings, HelpCircle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ExchangeHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card px-4">
      {/* Left: Logo & Nav */}
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80">
          <Image
            src="/aurexia-logo.png"
            alt="Aurexia"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="hidden text-lg font-semibold tracking-wide text-foreground sm:inline" style={{ fontFamily: 'var(--font-display)' }}>
            AUREXIA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/exchange">
            <Button variant="ghost" size="sm" className="text-foreground">
              Spot
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                Markets
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>All Markets</DropdownMenuItem>
              <DropdownMenuItem>Favorites</DropdownMenuItem>
              <DropdownMenuItem>New Listings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/products/liquidity">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Earn
            </Button>
          </Link>
        </nav>
      </div>

      {/* Right: Actions & Wallet */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <HelpCircle className="h-4 w-4" />
          <span className="sr-only">Help</span>
        </Button>
        <WalletButton />
      </div>
    </header>
  )
}
