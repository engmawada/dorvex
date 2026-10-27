"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { dictionaries, type Dictionary, type Lang } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  t: Dictionary
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "dorvex-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar")

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === "en" || saved === "ar") setLang(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dictionaries[lang].dir
    document.title =
      lang === "ar"
        ? "DORVEX | حلول متكاملة للشتر والبوابات الأوتوماتيكية"
        : "DORVEX | Premium Roller Shutters, Gates & Automation Solutions"
  }, [lang])

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ar" ? "en" : "ar"
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const value = useMemo(() => ({ lang, t: dictionaries[lang], toggle }), [lang, toggle])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
