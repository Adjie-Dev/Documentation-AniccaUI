import React, { useState, useEffect } from 'react'
import { AniccaButton } from 'anicca-ui'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <AniccaButton
      variant="ghost"
      size="icon"
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
    >
      {dark ? '☀️' : '🌙'}
    </AniccaButton>
  )
}
