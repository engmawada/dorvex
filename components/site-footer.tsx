"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { PHONE_LOCAL, whatsappUrl } from "@/lib/i18n"

const NAV_IDS = ["home", "products", "motors", "work", "contact"] as const

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-gold/20 bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Image src="/images/dorvex-logo-full.png" alt="DORVEX" width={640} height={538} className="h-28 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.quickLinks}>
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-gold-light">{t.footer.quickLinks}</h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sm text-white/75 transition-colors hover:text-gold-light">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-gold-light">{t.footer.contact}</h2>
          <a
            href={`tel:${PHONE_LOCAL}`}
            dir="ltr"
            className="mt-4 block text-xl font-bold text-white transition-colors hover:text-gold-light rtl:text-end"
          >
            {PHONE_LOCAL}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-10 items-center gap-2 rounded-full border border-gold/50 px-4 text-sm font-semibold text-gold-light transition-colors hover:bg-gold hover:text-navy-deep"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {t.whatsapp}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/55 md:px-6">
          {`© ${new Date().getFullYear()} DORVEX. ${t.footer.rights}`}
        </p>
      </div>
    </footer>
  )
}
