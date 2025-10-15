"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "./SectionHeading"
import { fadeUp } from "@/lib/utils"

interface ProcessSectionProps {
  headline: string
  image: string
  steps: { title: string; copy: string }[]
}

export function ProcessSection({ headline, image, steps }: ProcessSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title={headline} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Image */}
          <motion.div
            {...fadeUp}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt="Process illustration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.copy}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
