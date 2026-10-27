"use client"

import { useLanguage } from "@/components/language-provider"
import { ProductCard, type Product } from "@/components/product-card"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function CategoryBlock({
  number,
  title,
  description,
  products,
  columns,
}: {
  number: number
  title: string
  description: string
  products: Product[]
  columns: 3 | 4
}) {
  const { t } = useLanguage()

  return (
    <div>
      <Reveal className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
            {t.categoryLabel} {`0${number}`}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-navy md:text-3xl">{title}</h3>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-end">{description}</p>
      </Reveal>
      <div
        className={cn(
          "grid grid-cols-1 gap-5 sm:grid-cols-2",
          columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        )}
      >
        {products.map((p, i) => (
          <ProductCard key={p.key} product={p} index={i} />
        ))}
      </div>
    </div>
  )
}
