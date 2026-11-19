"use client"

import { useEffect, useState } from "react"

const INTRO_KEY = "ok-intro-seen"

function shouldSkipIntro() {
  if (typeof window === "undefined") return false
  try {
    if (new URLSearchParams(window.location.search).has("replay-intro")) {
      return false
    }
    return (
      sessionStorage.getItem(INTRO_KEY) === "1" ||
      document.documentElement.classList.contains("intro-done")
    )
  } catch {
    return false
  }
}

export function LogoIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (shouldSkipIntro()) {
      document.documentElement.classList.add("intro-done")
      setVisible(false)
      return
    }

    document.documentElement.classList.remove("intro-done")
    document.body.style.overflow = "hidden"

    const finish = () => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1")
      } catch {
        // ignore
      }
      document.documentElement.classList.add("intro-done")
      document.body.style.overflow = ""
      setVisible(false)
    }

    const timer = window.setTimeout(finish, 3000)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [])

  if (!visible) return null

  return (
    <div className="logo-intro" aria-hidden="true">
      <div className="logo-intro__stage">
        <div className="logo-intro__glow" />
        <svg
          className="logo-intro__ring"
          viewBox="0 0 168 168"
          fill="none"
          aria-hidden="true"
        >
          <circle className="logo-intro__ring-track" cx="84" cy="84" r="78" />
          <circle className="logo-intro__ring-draw" cx="84" cy="84" r="78" />
        </svg>
        <img
          className="logo-intro__mark"
          src="/logo_ussama.png"
          alt="Oussama Kbaili"
        />
      </div>
    </div>
  )
}
