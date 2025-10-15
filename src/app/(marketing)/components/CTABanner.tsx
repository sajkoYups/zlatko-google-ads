"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/utils"
import { CTA } from "@/lib/types"

interface CTABannerProps {
  headline: string
  copy?: string
  primaryCta: CTA
}

export function CTABanner({ headline, copy, primaryCta }: CTABannerProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          {...fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {headline}
          </h2>
          {copy && (
            <p className="text-lg text-slate-300 mb-8">
              {copy}
            </p>
          )}
          <Button asChild size="lg" variant="secondary">
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
