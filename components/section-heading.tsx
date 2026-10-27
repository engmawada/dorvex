import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  subtitle,
  tone = "light",
}: {
  title: string
  subtitle: string
  tone?: "light" | "dark"
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2 className={cn("text-balance text-3xl font-bold md:text-4xl", tone === "dark" ? "text-white" : "text-navy")}>
        {title}
      </h2>
      <div className="gold-rule mx-auto mt-5 h-px w-28" aria-hidden="true" />
      <p className={cn("mt-5 text-pretty leading-relaxed", tone === "dark" ? "text-white/75" : "text-muted-foreground")}>
        {subtitle}
      </p>
    </Reveal>
  )
}
