"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { whatsappUrl, type ProductKey } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export type Product = {
  key: ProductKey
  image: string
  aspect?: "landscape" | "portrait"
  position?: string
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { t } = useLanguage()
  const item = t.items[product.key]

  return (
    <Reveal
      as="article"
      delay={index * 90}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10"
    >
      <div
        className={cn(
          "relative overflow-hidden bg-navy",
          product.aspect === "portrait" ? "aspect-[4/5]" : "aspect-[4/3]",
        )}
      >
        <Image
          src={product.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={product.position ? { objectPosition: product.position } : undefined}
        />
        <span className="absolute start-3 top-3 flex size-10 items-center justify-center rounded-full bg-navy-deep/75 p-1.5 ring-1 ring-gold/40 backdrop-blur">
          <Image src="/images/dorvex-mark.png" alt="" width={64} height={64} className="h-full w-auto" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h4 className="text-lg font-bold text-navy">{item.name}</h4>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <a
          href={whatsappUrl(t.productInquiry(item.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex h-10 items-center justify-center gap-2 self-start rounded-full border border-navy/15 px-4 text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy-deep"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          {t.productCta}
        </a>
      </div>
    </Reveal>
  )
}
