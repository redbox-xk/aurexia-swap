"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp, Shield, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Announcement Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-foreground">Multi-Chain Trading Now Live</span>
          <ArrowRight className="h-4 w-4 text-primary" />
        </div>

        {/* Logo Hero */}
        <div className="relative mb-8 animate-in fade-in zoom-in-95 duration-700 delay-100">
          <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-150" />
          <Image
            src="/aurexia-logo.png"
            alt="Aurexia"
            width={180}
            height={180}
            className="relative h-36 w-36 object-contain sm:h-44 sm:w-44"
            priority
          />
        </div>

        {/* Headline */}
        <h1 
          className="mb-6 text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Trade with
          <span className="text-primary"> Confidence</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-10 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          The next-generation decentralized exchange. Non-custodial trading with 
          institutional-grade speed across Ethereum, Arbitrum, and Polygon.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <Link href="/exchange">
            <Button 
              size="lg" 
              className="h-12 min-w-[180px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30"
            >
              Start Trading
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 min-w-[180px] border-border text-foreground hover:bg-muted bg-transparent transition-all duration-200"
            >
              Read Documentation
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          {[
            { value: "$2.4B+", label: "Trading Volume", icon: TrendingUp },
            { value: "50K+", label: "Active Traders", icon: Globe },
            { value: "<10ms", label: "Order Latency", icon: Zap },
            { value: "100%", label: "Non-Custodial", icon: Shield },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-lg">
              <stat.icon className="mb-2 h-5 w-5 text-primary" />
              <div className="text-2xl font-bold text-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
