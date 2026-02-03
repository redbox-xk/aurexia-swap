"use client"

const steps = [
  {
    number: "01",
    title: "Connect Wallet",
    description: "Connect MetaMask, WalletConnect, or any EVM-compatible wallet. No registration required.",
  },
  {
    number: "02",
    title: "Sign & Authorize",
    description: "Sign a message to authenticate. Approve token spending for the trading contract once.",
  },
  {
    number: "03",
    title: "Place Orders",
    description: "Orders are signed locally and sent to our off-chain matching engine for instant execution.",
  },
  {
    number: "04",
    title: "On-Chain Settlement",
    description: "Matched trades settle atomically on-chain. Funds never leave your control until settlement.",
  },
]

export function HowItWorks() {
  return (
    <section className="relative border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Trade in Four Simple Steps
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Experience the simplicity of centralized exchanges with the security of self-custody.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-primary/40 to-transparent lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                {/* Step Number */}
                <div 
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20" 
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.number}
                </div>
                
                <h3 className="mb-2 text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
