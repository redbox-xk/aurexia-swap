"use client"

const chains = [
  {
    name: "Ethereum",
    color: "#627EEA",
    bgColor: "bg-[#627EEA]/10",
    description: "Main settlement layer",
  },
  {
    name: "Arbitrum",
    color: "#28A0F0",
    bgColor: "bg-[#28A0F0]/10",
    description: "Low-cost trading",
  },
  {
    name: "Polygon",
    color: "#8247E5",
    bgColor: "bg-[#8247E5]/10",
    description: "Fast execution",
  },
]

export function Chains() {
  return (
    <section className="relative border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Multi-Chain
          </p>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Trade Across Networks
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            Unified liquidity and seamless bridging between supported chains.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {chains.map((chain) => (
            <div 
              key={chain.name}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card px-10 py-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <div 
                className={`flex h-16 w-16 items-center justify-center rounded-full ${chain.bgColor}`}
                style={{ color: chain.color }}
              >
                <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  {chain.name.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                {chain.name}
              </span>
              <span className="text-sm text-muted-foreground">{chain.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
