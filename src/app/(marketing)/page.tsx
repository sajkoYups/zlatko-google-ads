import landingContent from "../../content/landing.json"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { FeatureGrid } from "./components/FeatureGrid"
import { StatsBand } from "./components/StatsBand"
import { CoursesGrid } from "./components/CoursesGrid"
import { ProcessSection } from "./components/ProcessSection"
import { Testimonials } from "./components/Testimonials"
import { CTABanner } from "./components/CTABanner"
import { Footer } from "./components/Footer"

export default function MarketingPage() {
  return (
    <main>
      <Header 
        logo={landingContent.site.logo}
        nav={landingContent.nav}
        primaryCta={landingContent.site.primaryCta}
      />
      
      <Hero
        eyebrow={landingContent.hero.eyebrow}
        headline={landingContent.hero.headline}
        subheadline={landingContent.hero.subheadline}
        image={landingContent.hero.image}
        primaryCta={landingContent.hero.primaryCta}
        secondaryCta={landingContent.hero.secondaryCta}
      />
      
      <FeatureGrid
        headline={landingContent.features.headline}
        items={landingContent.features.items}
      />
      
      <StatsBand
        headline={landingContent.stats.headline}
        items={landingContent.stats.items}
        cta={landingContent.stats.cta}
      />
      
      <CoursesGrid
        headline={landingContent.courses.headline}
        items={landingContent.courses.items}
        cta={landingContent.courses.cta}
      />
      
      <ProcessSection
        headline={landingContent.process.headline}
        image={landingContent.process.image}
        steps={landingContent.process.steps}
      />
      
      <Testimonials
        headline={landingContent.testimonials.headline}
        items={landingContent.testimonials.items}
      />
      
      <CTABanner
        headline={landingContent.ctaBanner.headline}
        copy={landingContent.ctaBanner.copy}
        primaryCta={landingContent.ctaBanner.primaryCta}
      />
      
      <Footer
        columns={landingContent.footer.columns}
        copyright={landingContent.footer.copyright}
      />
    </main>
  )
}
