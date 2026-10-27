"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { whatsappUrl, type ProductKey } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const PRODUCT_KEYS: ProductKey[] = [
  "shutterShop",
  "shutterGarage",
  "shutterFactory",
  "shutterWarehouse",
  "gateWrought",
  "gateDouble",
  "gateSliding",
  "motorSide",
  "motorCentral",
  "motorTwoArm",
]

type Errors = Partial<Record<"name" | "phone" | "product", string>>

const fieldClass =
  "w-full rounded-lg border border-input bg-white px-4 text-navy placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"

export function QuoteForm() {
  const { t } = useLanguage()
  const c = t.contact
  const [errors, setErrors] = useState<Errors>({})
  const [opened, setOpened] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const product = String(data.get("product") ?? "") as ProductKey | ""
    const details = String(data.get("details") ?? "").trim()

    const next: Errors = {}
    if (!name) next.name = c.required
    if (!phone) next.phone = c.required
    else if (!/^\+?[0-9\s-]{7,16}$/.test(phone)) next.phone = c.invalidPhone
    if (!product) next.product = c.required
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const lines = [
      c.messageHeader,
      `${c.fieldName}: ${name}`,
      `${c.fieldPhone}: ${phone}`,
      `${c.fieldProduct}: ${t.items[product as ProductKey].name}`,
      details ? `${c.fieldDetails}: ${details}` : "",
    ].filter(Boolean)

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer")
    setOpened(true)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="q-name" className="text-sm font-semibold text-navy">
            {c.name}
          </label>
          <input
            id="q-name"
            name="name"
            autoComplete="name"
            className={cn(fieldClass, "h-12", errors.name && "border-destructive")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "q-name-err" : undefined}
          />
          {errors.name && (
            <p id="q-name-err" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="q-phone" className="text-sm font-semibold text-navy">
            {c.phone}
          </label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            dir="ltr"
            className={cn(fieldClass, "h-12 text-start rtl:text-end", errors.phone && "border-destructive")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "q-phone-err" : undefined}
          />
          {errors.phone && (
            <p id="q-phone-err" className="text-xs text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="q-product" className="text-sm font-semibold text-navy">
          {c.product}
        </label>
        <select
          id="q-product"
          name="product"
          defaultValue=""
          className={cn(fieldClass, "h-12", errors.product && "border-destructive")}
          aria-invalid={!!errors.product}
          aria-describedby={errors.product ? "q-product-err" : undefined}
        >
          <option value="" disabled>
            {c.productPlaceholder}
          </option>
          <optgroup label={t.products.shutters.title}>
            {PRODUCT_KEYS.slice(0, 4).map((k) => (
              <option key={k} value={k}>
                {t.items[k].name}
              </option>
            ))}
          </optgroup>
          <optgroup label={t.products.gates.title}>
            {PRODUCT_KEYS.slice(4, 7).map((k) => (
              <option key={k} value={k}>
                {t.items[k].name}
              </option>
            ))}
          </optgroup>
          <optgroup label={t.motors.categoryTitle}>
            {PRODUCT_KEYS.slice(7).map((k) => (
              <option key={k} value={k}>
                {t.items[k].name}
              </option>
            ))}
          </optgroup>
        </select>
        {errors.product && (
          <p id="q-product-err" className="text-xs text-destructive">
            {errors.product}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="q-details" className="text-sm font-semibold text-navy">
          {c.message}
        </label>
        <textarea
          id="q-details"
          name="details"
          rows={4}
          placeholder={c.messagePlaceholder}
          className={cn(fieldClass, "resize-y py-3")}
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 font-semibold text-white transition-colors hover:bg-navy-soft"
      >
        <Send className="size-4 rtl:-scale-x-100" aria-hidden="true" />
        {c.submit}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">{c.formNote}</p>
      <p role="status" aria-live="polite" className="text-sm font-medium text-gold-dark">
        {opened ? c.opened : ""}
      </p>
    </form>
  )
}
