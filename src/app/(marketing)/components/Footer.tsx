import Link from "next/link"
import { CTA } from "@/lib/types"

interface FooterProps {
  columns: { title: string; links: CTA[] }[]
  copyright: string
}

export function Footer({ columns, copyright }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {columns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-slate-400 text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
