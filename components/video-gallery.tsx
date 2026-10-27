"use client"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const VIDEOS = [
  { src: "/videos/shutter-warehouse.mp4", poster: "/images/poster-shutter.jpg" },
  { src: "/videos/hinged-gate-two-arm.mp4", poster: "/images/poster-hinged.jpg" },
  { src: "/videos/sliding-gate.mp4", poster: "/images/poster-sliding.jpg" },
] as const

export function VideoGallery() {
  const { t } = useLanguage()

  return (
    <section id="work" className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title={t.work.title} subtitle={t.work.subtitle} tone="dark" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VIDEOS.map((video, i) => {
            const meta = t.work.videos[i]
            return (
              <Reveal
                key={video.src}
                as="article"
                delay={i * 100}
                className="flex flex-col overflow-hidden rounded-xl border border-gold/20 bg-navy"
              >
                <div className="relative aspect-video bg-black">
                  <video
                    className="size-full object-contain"
                    controls
                    playsInline
                    muted
                    preload="none"
                    poster={video.poster}
                    aria-label={meta.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    {t.work.unsupported}
                  </video>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <span className="mt-0.5 text-sm font-bold text-gold" aria-hidden="true">
                    {`0${i + 1}`}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{meta.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{meta.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
