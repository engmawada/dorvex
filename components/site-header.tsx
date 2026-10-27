"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Languages, Menu, MessageCircle, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappUrl } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const NAV_IDS = ["home", "products", "motors", "work", "contact"] as const

export function SiteHeader() {
  const { t, toggle } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-gold/20 bg-navy-deep/95 backdrop-blur-md" : "border-transparent bg-navy-deep/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <a href="#home" className="flex shrink-0 items-center gap-2.5" aria-label="DORVEX">
          <Image src="/images/dorvex-mark.png" alt="" width={256} height={256} className="h-9 w-auto md:h-11" priority />
          <Image
            src="/images/dorvex-wordmark.png"
            alt="DORVEX"
            width={720}
            height={164}
            className="h-7 w-auto md:h-9"
            priority
          />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-gold-light focus-visible:text-gold-light"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.switchAria}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-gold/50 px-3.5 text-sm font-semibold text-gold-light transition-colors hover:bg-gold hover:text-navy-deep"
          >
            <Languages className="size-4" aria-hidden="true" />
            <span lang={t.dir === "rtl" ? "en" : "ar"}>{t.switchLabel}</span>
          </button>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.whatsappAria}
            className="hidden h-10 items-center gap-2 rounded-full bg-gold px-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {t.whatsapp}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.menuClose : t.menuOpen}
            className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn("border-t border-gold/15 bg-navy-deep lg:hidden", open ? "block" : "hidden")}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-gold-light"
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
          <li className="mt-2 sm:hidden">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-gold font-semibold text-navy-deep"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {t.whatsapp}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
