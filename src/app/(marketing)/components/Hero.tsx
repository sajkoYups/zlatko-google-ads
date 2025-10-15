"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/utils"

interface HeroProps {
  eyebrow: string
  headline: string
  subheadline: string
  image: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  image,
  primaryCta,
  secondaryCta
}: HeroProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            {...fadeUp}
            className="space-y-6"
          >
            <p className="text-sm font-medium text-sky-600">{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              {headline}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt="Hero image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
