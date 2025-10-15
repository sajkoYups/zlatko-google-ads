"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "./SectionHeading"
import { staggerContainer, staggerItem } from "@/lib/utils"
import { CourseItem, CTA } from "@/lib/types"

interface CoursesGridProps {
  headline: string
  items: CourseItem[]
  cta?: CTA
}

export function CoursesGrid({ headline, items, cta }: CoursesGridProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title={headline} />
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-stretch"
        >
          {items.map((course, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <Badge variant="secondary" className="mb-3">
                    {course.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {course.title}
                  </h3>
                  <div className="mt-auto" />
                  <Button asChild className="w-full mt-4 md:mt-6 mt-auto">
                    <Link href={course.href}>{course.ctaLabel}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {cta && (
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
