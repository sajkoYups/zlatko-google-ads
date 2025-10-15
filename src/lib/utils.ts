import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Motion variants for consistent animations
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

// Icon mapping for Lucide React icons
export const iconMap = {
  BookOpen: "BookOpen",
  Briefcase: "Briefcase", 
  ClipboardList: "ClipboardList",
  LayoutGrid: "LayoutGrid"
} as const
