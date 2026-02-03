"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative border-t border-border py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 
          className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Ready to Trade the Future?
        </h2>
        <p className="mb-8 text-lg text-muted-foreground text-pretty">
          Join thousands of traders already using Aurexia for fast, secure, 
          non-custodial trading across multiple chains.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/exchange">
            <Button 
              size="lg" 
              className="h-12 min-w-[180px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30"
            >
              Start Trading Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 min-w-[180px] border-border text-foreground hover:bg-muted bg-transparent transition-all duration-200"
            >
              Contact Sales
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No registration required. Connect your wallet to begin.
        </p>
      </div>
    </section>
  )
}
