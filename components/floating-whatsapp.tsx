"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappUrl } from "@/lib/i18n"

export function FloatingWhatsApp() {
  const { t } = useLanguage()

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      className="fixed bottom-5 end-5 z-40 flex size-14 items-center justify-center rounded-full bg-gold text-navy-deep shadow-lg shadow-navy-deep/30 ring-4 ring-white/70 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  )
}
