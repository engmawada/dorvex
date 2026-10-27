"use client"

import { CategoryBlock } from "@/components/category-block"
import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/components/product-card"
import { SectionHeading } from "@/components/section-heading"

const SHUTTERS: Product[] = [
  { key: "shutterShop", image: "/images/shutter-shop.jpg" },
  { key: "shutterGarage", image: "/images/shutter-garage.jpg" },
  { key: "shutterFactory", image: "/images/shutter-factory.jpg" },
  { key: "shutterWarehouse", image: "/images/shutter-warehouse.jpg" },
]

const GATES: Product[] = [
  { key: "gateWrought", image: "/images/gate-wrought.jpg", aspect: "portrait" },
  { key: "gateDouble", image: "/images/gate-double.jpg", aspect: "portrait" },
  { key: "gateSliding", image: "/images/gate-sliding.jpg", aspect: "portrait", position: "30% center" },
]

const MOTORS: Product[] = [
  { key: "motorSide", image: "/images/motor-side.jpg" },
  { key: "motorCentral", image: "/images/motor-central.jpg" },
  { key: "motorTwoArm", image: "/images/motor-two-arm.jpg" },
]

export function ProductsSection() {
  const { t } = useLanguage()

  return (
    <section id="products" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title={t.products.title} subtitle={t.products.subtitle} />
        <div className="flex flex-col gap-20">
          <CategoryBlock
            number={1}
            title={t.products.shutters.title}
            description={t.products.shutters.description}
            products={SHUTTERS}
            columns={4}
          />
          <CategoryBlock
            number={2}
            title={t.products.gates.title}
            description={t.products.gates.description}
            products={GATES}
            columns={3}
          />
        </div>
      </div>
    </section>
  )
}

export function MotorsSection() {
  const { t } = useLanguage()

  return (
    <section id="motors" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title={t.motors.title} subtitle={t.motors.subtitle} />
        <CategoryBlock
          number={3}
          title={t.motors.categoryTitle}
          description={t.motors.description}
          products={MOTORS}
          columns={3}
        />
      </div>
    </section>
  )
}
