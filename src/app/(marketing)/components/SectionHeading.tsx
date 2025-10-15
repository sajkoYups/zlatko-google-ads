import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  sub?: string
  align?: 'left' | 'center'
  overlap?: boolean
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  sub, 
  align = 'center',
  overlap = false 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "max-w-3xl",
      align === 'center' ? "mx-auto text-center" : "text-left",
      overlap && "mb-8"
    )}>
      {eyebrow && (
        <p className="text-sm font-medium text-sky-600 mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
        {title}
      </h2>
      {sub && (
        <p className="text-lg text-slate-600">{sub}</p>
      )}
    </div>
  )
}
