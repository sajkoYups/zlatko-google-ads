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
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.copy || "Comprehensive learning experience designed to accelerate your professional growth and skill development."}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
