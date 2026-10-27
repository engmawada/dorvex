"use client"

import Image from "next/image"
import { ArrowDown, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappUrl } from "@/lib/i18n"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-deep text-white">
      <Image
        src="/images/hero.jpg"
        alt={t.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[60%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/70 to-transparent rtl:bg-gradient-to-l"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-32 md:px-6 md:pb-20">
        <div className="max-w-3xl animate-rise">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light md:text-sm">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl md:leading-[1.1]">
            <span className="text-gold-gradient">{t.hero.title}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(t.contact.messageHeader)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-7 font-semibold text-white transition-colors hover:border-gold hover:text-gold-light"
            >
              {t.hero.ctaSecondary}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gold/20 bg-gold/20 sm:grid-cols-3">
          {t.hero.pillars.map((p, i) => (
            <li key={p} className="flex items-center gap-4 bg-navy-deep/85 px-5 py-4 backdrop-blur">
              <span className="text-2xl font-bold text-gold" aria-hidden="true">
                {`0${i + 1}`}
              </span>
              <span className="font-semibold text-white/90">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
