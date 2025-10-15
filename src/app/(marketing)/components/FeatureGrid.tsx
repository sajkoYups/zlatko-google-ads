"use client"

import { motion } from "framer-motion"
import { BookOpen, Briefcase, ClipboardList, LayoutGrid } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { staggerContainer, staggerItem } from "@/lib/utils"
import { FeatureItem } from "@/lib/types"

interface FeatureGridProps {
  headline: string
  items: FeatureItem[]
}

const iconMap = {
  BookOpen,
  Briefcase,
  ClipboardList,
  LayoutGrid
} as const

export function FeatureGrid({ headline, items }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading title={headline} />
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                {item.copy && (
                  <p className="text-slate-600">{item.copy}</p>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
