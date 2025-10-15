export interface CTA { label: string; href: string }
export interface SiteMeta { title: string; description: string; logo: string; primaryCta: CTA; secondaryCta?: CTA }
export interface NavItem { label: string; href: string }
export interface FeatureItem { title: string; icon: string; copy?: string }
export interface Stat { label: string; value: string }
export interface CourseItem { category: string; title: string; image: string; href: string; ctaLabel: string }
export interface Testimonial { quote: string; author: string; role?: string; avatar?: string }

export interface LandingContent {
  site: SiteMeta;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    image: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  features: { headline: string; items: FeatureItem[] };
  stats: { headline: string; items: Stat[]; cta?: CTA };
  courses: { headline: string; cta?: CTA; items: CourseItem[] };
  process: { headline: string; image: string; steps: { title: string; copy: string }[] };
  testimonials: { headline: string; items: Testimonial[] };
  ctaBanner: { headline: string; copy?: string; primaryCta: CTA };
  footer: { columns: { title: string; links: CTA[] }[]; copyright: string };
}


