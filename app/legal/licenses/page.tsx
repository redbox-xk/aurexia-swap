import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const licenses = [
  {
    name: "Aurexia Smart Contracts",
    license: "MIT License",
    repository: "https://github.com/aurexia/contracts",
    description: "Core smart contracts for the Aurexia DEX protocol.",
  },
  {
    name: "Aurexia SDK",
    license: "MIT License",
    repository: "https://github.com/aurexia/sdk",
    description: "JavaScript/TypeScript SDK for interacting with Aurexia.",
  },
  {
    name: "Aurexia Widget",
    license: "MIT License",
    repository: "https://github.com/aurexia/widget",
    description: "Embeddable trading widget for third-party applications.",
  },
]

const dependencies = [
  { name: "React", license: "MIT", url: "https://react.dev" },
  { name: "Next.js", license: "MIT", url: "https://nextjs.org" },
  { name: "ethers.js", license: "MIT", url: "https://ethers.org" },
  { name: "viem", license: "MIT", url: "https://viem.sh" },
  { name: "wagmi", license: "MIT", url: "https://wagmi.sh" },
  { name: "Tailwind CSS", license: "MIT", url: "https://tailwindcss.com" },
  { name: "Radix UI", license: "MIT", url: "https://radix-ui.com" },
  { name: "Recharts", license: "MIT", url: "https://recharts.org" },
]

export default function LicensesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4">Open Source Licenses</h1>
            <p className="text-muted-foreground mb-12">
              Aurexia is built on open source software. We believe in transparency and 
              giving back to the community.
            </p>

            <div className="space-y-12">
              {/* Our Open Source Projects */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Our Open Source Projects</h2>
                <div className="space-y-4">
                  {licenses.map((project) => (
                    <Card key={project.name}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{project.name}</CardTitle>
                          <span className="text-sm text-primary font-medium">{project.license}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:underline"
                        >
                          View on GitHub <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Third-Party Dependencies */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Third-Party Dependencies</h2>
                <p className="text-muted-foreground mb-6">
                  We use the following open source libraries. We are grateful to their maintainers 
                  and contributors.
                </p>
                <Card>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {dependencies.map((dep) => (
                        <div key={dep.name} className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-4">
                            <span className="font-medium text-foreground">{dep.name}</span>
                            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                              {dep.license}
                            </span>
                          </div>
                          <a
                            href={dep.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center"
                          >
                            Website <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* MIT License Text */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-6">MIT License</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
{`MIT License

Copyright (c) 2025-2026 Aurexia Labs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                    </pre>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
