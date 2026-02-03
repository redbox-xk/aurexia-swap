"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Building } from "lucide-react"
import Link from "next/link"

const benefits = [
  "Competitive salary + equity",
  "Remote-first culture",
  "Unlimited PTO",
  "Health, dental & vision",
  "Annual learning budget",
  "Home office stipend",
  "Crypto-friendly payroll",
  "Team retreats",
]

const openings = [
  {
    id: 1,
    title: "Senior Solidity Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and audit smart contracts for our multi-chain DEX infrastructure.",
  },
  {
    id: 2,
    title: "Backend Engineer - Rust",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design high-performance order matching systems and trading infrastructure.",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, responsive trading interfaces using React and TypeScript.",
  },
  {
    id: 4,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Shape the user experience of our trading platform and developer tools.",
  },
  {
    id: 5,
    title: "DevRel Engineer",
    department: "Developer Relations",
    location: "Remote",
    type: "Full-time",
    description: "Build relationships with developers and create amazing documentation.",
  },
  {
    id: 6,
    title: "Security Engineer",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    description: "Lead security initiatives and conduct smart contract audits.",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">We are hiring</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Build the Future of <span className="text-primary">DeFi</span> With Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
                Join a team of passionate builders creating the next generation of decentralized 
                trading infrastructure. Remote-first, globally distributed, crypto-native.
              </p>
              <Button asChild size="lg">
                <a href="#openings">View Open Positions <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Join Aurexia?</h2>
              <p className="text-muted-foreground">Benefits designed for the modern workforce.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="bg-card border border-border rounded-xl p-4 text-center">
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-muted-foreground">Find your next opportunity at Aurexia.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {openings.map((job) => (
                <Card key={job.id} className="hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building className="h-4 w-4" /> {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {job.type}
                          </span>
                        </div>
                      </div>
                      <Button asChild>
                        <Link href={`/careers/${job.id}`}>Apply <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Do Not See Your Role?</h2>
              <p className="text-muted-foreground mb-8">
                We are always looking for talented individuals. Send us your resume and 
                we will reach out when a relevant position opens up.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
