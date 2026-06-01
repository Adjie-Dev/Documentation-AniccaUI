import React from 'react'
import { AniccaBadge } from 'anicca-ui'

interface DocPageProps {
  title: string
  description: string
  badge?: string
  importLine?: string
  children: React.ReactNode
}

export default function DocPage({ title, description, badge, importLine, children }: DocPageProps) {
  return (
    <article>
      <div className="mb-10">
        {badge && (
          <div className="mb-3">
            <AniccaBadge variant="primary" appearance="soft" size="sm">
              {badge}
            </AniccaBadge>
          </div>
        )}
        <h1 className="text-[2.25rem] font-display font-bold text-on-surface tracking-tight mb-3 leading-tight">
          {title}
        </h1>
        <p className="text-[1.05rem] text-text-muted leading-relaxed max-w-2xl">{description}</p>
        {importLine && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-surface-container rounded-lg border border-outline-variant/30">
            <span className="text-text-muted text-[0.78rem] font-mono select-none">import</span>
            <code className="text-primary text-[0.82rem] font-mono">{importLine}</code>
          </div>
        )}
      </div>
      {children}
    </article>
  )
}
