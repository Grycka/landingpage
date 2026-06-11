import Image from "next/image"
import { ClaimButton } from "@/components/claim-button"
import { Gift, ShieldCheck, TrendingUp, Star, StarHalf } from "lucide-react"

const claimSteps = [
  "Click the button below",
  "Enter your basic info",
  "Complete required offers",
  "Claim up to $750 gift card",
]

const reviews = [
  {
    name: "Jessica M.",
    location: "Austin, TX",
    rating: 5,
    text: "Took me about 10 minutes to finish the deals and my gift card showed up the next day. So easy!",
  },
  {
    name: "Marcus T.",
    location: "Columbus, OH",
    rating: 5,
    text: "Was skeptical at first but it actually worked. Completed 4 deals and got the full reward.",
  },
  {
    name: "Danielle R.",
    location: "Tampa, FL",
    rating: 4,
    text: "Super simple process. The more offers you do the bigger the payout — totally worth it.",
  },
]

function Rating({ size = "size-4", value = 4.5 }: { size?: string; value?: number }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.5
  return (
    <div className="flex items-center gap-0.5 text-accent" aria-label={`Rated ${value} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className={`${size} fill-current`} aria-hidden="true" />
      ))}
      {hasHalf && <StarHalf className={`${size} fill-current`} aria-hidden="true" />}
    </div>
  )
}

export default function Page() {
  return (
    <main className="flex flex-col bg-background text-foreground">
      {/* Above the fold: everything up to the reviews heading fits in one screen */}
      <div className="flex min-h-svh flex-col">
        {/* Top bar */}
        <header className="shrink-0 border-b border-border">
          <div className="mx-auto flex w-full max-w-md items-center justify-between px-5 py-2">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Gift className="size-3.5" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold tracking-tight">DealsOnShops</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              Verified Program
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="flex flex-1 items-center justify-center">
          <div className="mx-auto flex w-full max-w-md flex-col items-center gap-2 px-5 py-2 text-center">
            <h1 className="text-balance text-lg font-bold leading-tight tracking-tight">
              Get a <span className="text-accent">$750</span> Amazon Gift Card
            </h1>

            <Image
              src="/amazon-gift-card.png"
              alt="$750 Amazon gift card reward"
              width={420}
              height={266}
              className="h-auto w-28 drop-shadow-xl"
              priority
            />

            <ol className="flex w-full max-w-xs flex-col gap-1.5">
              {claimSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-2.5 text-left">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-[13px] font-medium leading-tight">{step}</span>
                </li>
              ))}
            </ol>

            <div className="flex w-full max-w-xs flex-col items-center gap-1.5">
              <ClaimButton />
              <span className="text-xs text-muted-foreground">No purchase required to enter</span>
            </div>

            {/* Highlight: more deals = bigger reward */}
            <div className="flex w-full max-w-xs items-start gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-left">
              <TrendingUp className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-[11px] font-medium leading-snug text-foreground">
                The more deals you complete, the more you can win — finish 3–5 deals to unlock the biggest reward.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews heading — last thing visible above the fold */}
        <section className="shrink-0 border-t border-border bg-card">
          <div className="mx-auto flex w-full max-w-md flex-col items-center gap-0.5 px-5 py-2.5 text-center">
            <Rating />
            <h2 className="text-sm font-bold tracking-tight">Loved by thousands of members</h2>
          </div>
        </section>
      </div>

      {/* Review cards — visible after scrolling */}
      <section className="bg-card">
        <div className="mx-auto flex w-full max-w-md flex-col gap-3 px-5 pb-8">
          {reviews.map((review) => (
            <figure key={review.name} className="rounded-xl border border-border bg-background p-4 text-left">
              <div className="mb-1.5">
                <Rating size="size-3.5" value={review.rating} />
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground">{review.text}</blockquote>
              <figcaption className="mt-2 text-xs font-medium text-muted-foreground">
                {review.name} · {review.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Footer disclaimer — minimal */}
      <footer className="shrink-0 border-t border-border">
        <p className="mx-auto max-w-md px-5 py-2.5 text-center text-[11px] leading-snug text-muted-foreground">
          Must be 18+. Reward requires completion of eligible partner offers.
        </p>
      </footer>
    </main>
  )
}
