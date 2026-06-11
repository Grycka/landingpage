import { ArrowRight } from "lucide-react"

// Affiliate offer URL.
export const AFFILIATE_URL = "https://giftclick.org/aff_c?offer_id=144&aff_id=188165"

interface ClaimButtonProps {
  label?: string
  className?: string
}

export function ClaimButton({ label = "Claim Your $750 Gift Card", className = "" }: ClaimButtonProps) {
  return (
    <a
      href={AFFILIATE_URL}
      rel="nofollow sponsored noopener"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-sm transition-colors hover:bg-accent/90 ${className}`}
    >
      {label}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  )
}
