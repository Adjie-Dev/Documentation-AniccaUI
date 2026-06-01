import React from 'react'

interface SectionHeaderProps {
  id: string
  children: React.ReactNode
  sub?: boolean
}

export default function SectionHeader({ id, children, sub = false }: SectionHeaderProps) {
  return sub ? (
    <h3
      id={id}
      className="text-base font-semibold text-on-surface mt-8 mb-3 flex items-center gap-2 scroll-mt-20"
    >
      <a href={`#${id}`} className="text-outline hover:text-primary transition-colors">#</a>
      {children}
    </h3>
  ) : (
    <h2
      id={id}
      className="text-xl font-bold font-display text-on-surface mt-10 mb-4 pb-2 border-b border-outline-variant/30 flex items-center gap-2 scroll-mt-20"
    >
      <a href={`#${id}`} className="text-outline hover:text-primary transition-colors">#</a>
      {children}
    </h2>
  )
}
