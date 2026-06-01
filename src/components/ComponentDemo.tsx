import React, { useState } from 'react'
import CodeBlock from './CodeBlock'

interface DemoVariant {
  label: string
  code: string
  preview: React.ReactNode
}

interface ComponentDemoProps {
  title?: string
  description?: string
  variants?: DemoVariant[]
  code?: string
  preview?: React.ReactNode
  centered?: boolean
}

export default function ComponentDemo({
  title,
  description,
  variants,
  code,
  preview,
  centered = true,
}: ComponentDemoProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [activeVariant, setActiveVariant] = useState(0)

  const demos: DemoVariant[] = variants ?? [{ label: 'Default', code: code ?? '', preview }]
  const current = demos[activeVariant]

  return (
    <div className="rounded-xl border border-outline-variant/40 overflow-hidden mb-8 bg-surface-container-lowest dark:bg-surface-container-lowest">
      {title && (
        <div className="px-4 pt-4 pb-0">
          <p className="text-[0.875rem] font-semibold text-on-surface">{title}</p>
          {description && <p className="text-[0.8rem] text-text-muted mt-0.5">{description}</p>}
        </div>
      )}

      {demos.length > 1 && (
        <div className="flex gap-1.5 px-4 pt-3 flex-wrap">
          {demos.map((d, i) => (
            <button
              key={d.label}
              onClick={() => setActiveVariant(i)}
              className={`px-3 py-1 rounded-full text-[0.72rem] font-semibold transition-all ${
                i === activeVariant
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-container text-text-muted hover:text-text border border-outline-variant/30'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      )}

      <div className="flex border-b border-outline-variant/30 px-4 pt-2 gap-0.5">
        {(['preview', 'code'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-[0.78rem] font-semibold capitalize border-b-2 -mb-px transition-colors ${
              activeTab === tab
                ? 'border-primary text-primary'
                : 'border-transparent text-text-muted hover:text-text'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'preview' ? (
        <div
          className={`p-8 min-h-[120px] bg-surface-container-lowest/50 ${
            centered ? 'flex flex-wrap gap-4 items-center justify-center' : ''
          }`}
        >
          {current.preview}
        </div>
      ) : (
        <CodeBlock code={current.code} language="tsx" />
      )}
    </div>
  )
}
