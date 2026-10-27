"use client"

import Image from "next/image"
import { MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { QuoteForm } from "@/components/quote-form"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { PHONE_LOCAL, whatsappUrl } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useLanguage()
  const c = t.contact

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title={c.title} subtitle={c.subtitle} />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="relative flex flex-col overflow-hidden rounded-2xl bg-navy-deep text-white lg:col-span-2">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/dorvex-sign.jpg"
                alt="DORVEX"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" aria-hidden="true" />
            </div>
            <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
              <div>
                <p className="text-sm font-semibold text-gold-light">{c.phoneLabel}</p>
                <a
                  href={`tel:${PHONE_LOCAL}`}
                  dir="ltr"
                  className="mt-1 block text-3xl font-bold tracking-wide text-white transition-colors hover:text-gold-light rtl:text-end"
                >
                  {PHONE_LOCAL}
                </a>
              </div>
              <div className="gold-rule h-px w-full" aria-hidden="true" />
              <div className="mt-auto flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 font-semibold text-navy-deep transition-colors hover:bg-gold-light"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {c.whatsappCta}
                </a>
                <a
                  href={`tel:${PHONE_LOCAL}`}
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-white/30 px-5 font-semibold text-white transition-colors hover:border-gold hover:text-gold-light"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {c.callCta}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10 lg:col-span-3">
            <h3 className="mb-6 text-2xl font-bold text-navy">{c.formTitle}</h3>
            <QuoteForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
