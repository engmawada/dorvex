import { ContactSection } from "@/components/contact-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Hero } from "@/components/hero"
import { LanguageProvider } from "@/components/language-provider"
import { MotorsSection, ProductsSection } from "@/components/product-sections"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { VideoGallery } from "@/components/video-gallery"

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <ProductsSection />
        <MotorsSection />
        <VideoGallery />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </LanguageProvider>
  )
}
