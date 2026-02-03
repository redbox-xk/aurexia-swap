"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, Globe, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { value: "$2.5B+", label: "Total Volume" },
  { value: "150K+", label: "Active Traders" },
  { value: "50+", label: "Token Pairs" },
  { value: "99.9%", label: "Uptime" },
]

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Non-custodial architecture ensures your assets remain under your control at all times.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Sub-second order matching with institutional-grade infrastructure for seamless trading.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Multi-chain support bringing decentralized trading to users worldwide.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Built by traders, for traders. Our community drives our roadmap and features.",
  },
]

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", image: "/placeholder.svg?height=200&width=200" },
  { name: "Sarah Kim", role: "CTO & Co-founder", image: "/placeholder.svg?height=200&width=200" },
  { name: "Michael Torres", role: "Head of Engineering", image: "/placeholder.svg?height=200&width=200" },
  { name: "Emily Zhang", role: "Head of Product", image: "/placeholder.svg?height=200&width=200" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Building the Future of <span className="text-primary">Decentralized Trading</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Aurexia was founded with a simple mission: make decentralized trading as fast, 
                secure, and accessible as centralized exchanges, without compromising on self-custody.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/exchange">Start Trading <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/careers">View Careers</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we build at Aurexia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the team building the next generation of decentralized finance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Mission</h2>
              <p className="text-muted-foreground mb-8">
                We are always looking for talented individuals who share our passion for 
                decentralized technology and building great products.
              </p>
              <Button asChild size="lg">
                <Link href="/careers">View Open Positions <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
