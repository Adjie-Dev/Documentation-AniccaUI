import React from 'react'
import {
  AniccaButton,
  AniccaBadge,
  AniccaCard,
  AniccaStatCard,
  AniccaThemeProvider,
} from 'anicca-ui'

export default function GettingStarted() {
  return (
    <article>
      {/* ── Hero ── */}
      <div className="mb-14 pb-10 border-b border-outline-variant/30">
        <div className="flex flex-wrap gap-2 mb-5">
          <AniccaBadge variant="primary" appearance="soft" size="sm">v1.0.0-beta.1</AniccaBadge>
          <AniccaBadge variant="success" appearance="soft" size="sm">Stable</AniccaBadge>
        </div>
        <h1 className="text-[2.75rem] font-display font-bold text-on-surface tracking-[-0.03em] leading-[1.1] mb-4">
          anicca-ui
        </h1>
        <p className="text-[1.2rem] text-text-muted leading-relaxed max-w-xl mb-8">
          Production-ready React component library built with Tailwind CSS.
          Zero dependencies, full TypeScript support, dark mode out of the box.
        </p>

        {/* Stats badges */}
        <div className="flex flex-wrap gap-3">
          <AniccaBadge variant="primary" appearance="outlined" size="md">40+ Components</AniccaBadge>
          <AniccaBadge variant="info" appearance="outlined" size="md">5 Hooks</AniccaBadge>
          <AniccaBadge variant="success" appearance="outlined" size="md">Zero Dependencies</AniccaBadge>
        </div>
      </div>

      {/* ── Install ── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-display text-on-surface mb-4 pb-2 border-b border-outline-variant/30">
          Installation
        </h2>
        <p className="text-text-muted mb-4">Install the package from npm:</p>
        <pre className="bg-surface-container rounded-xl border border-outline-variant/40 px-5 py-4 text-[0.875rem] font-mono text-on-surface overflow-x-auto mb-4">
          <span className="text-text-muted select-none">$ </span>
          <span className="text-primary">npm install anicca-ui</span>
        </pre>
        <p className="text-[0.85rem] text-text-muted">
          Works with React 18+, Vite, Next.js, Remix, and any modern bundler.
        </p>
      </section>

      {/* ── Setup ── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-display text-on-surface mb-4 pb-2 border-b border-outline-variant/30">
          Setup
        </h2>
        <p className="text-text-muted mb-4">
          Import the stylesheet and wrap your app with{' '}
          <code className="text-primary font-mono text-[0.82rem]">AniccaThemeProvider</code>:
        </p>
        <pre className="bg-surface-container rounded-xl border border-outline-variant/40 px-5 py-4 text-[0.875rem] font-mono text-on-surface overflow-x-auto">
{`// main.tsx
import 'anicca-ui/styles.css'
import { AniccaThemeProvider } from 'anicca-ui'

createRoot(document.getElementById('root')!).render(
  <AniccaThemeProvider>
    <App />
  </AniccaThemeProvider>
)`}
        </pre>
      </section>

      {/* ── Quick example ── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-display text-on-surface mb-4 pb-2 border-b border-outline-variant/30">
          Quick Example
        </h2>
        <p className="text-text-muted mb-6">
          Live preview, real components:
        </p>

        {/* Live preview */}
        <div className="rounded-xl border border-outline-variant/40 overflow-hidden mb-4">
          <div className="px-4 py-2.5 bg-surface-container border-b border-outline-variant/30 flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-danger/60" />
            <span className="w-3 h-3 rounded-full bg-warning/60" />
            <span className="w-3 h-3 rounded-full bg-success/60" />
            <span className="ml-auto text-[0.7rem] text-text-muted font-mono">Live Preview</span>
          </div>
          <div className="p-8 bg-surface-container-lowest/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-lg">
              <AniccaStatCard title="Total Revenue" value="$48,295" trend={12.4} trendLabel="vs last month" />
              <AniccaStatCard title="Active Users" value="3,841" trend={-2.1} trendLabel="vs last week" />
            </div>
            <div className="flex flex-wrap gap-3">
              <AniccaButton variant="primary">Get Started</AniccaButton>
              <AniccaButton variant="secondary">View Docs</AniccaButton>
              <AniccaButton variant="outline">GitHub</AniccaButton>
            </div>
          </div>
        </div>

        {/* Code */}
        <pre className="bg-surface-container rounded-xl border border-outline-variant/40 px-5 py-4 text-[0.8rem] font-mono text-on-surface overflow-x-auto">
{`import { AniccaButton, AniccaStatCard } from 'anicca-ui'

function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <AniccaStatCard title="Total Revenue" value="$48,295" trend={12.4} />
        <AniccaStatCard title="Active Users" value="3,841" trend={-2.1} />
      </div>
      <AniccaButton variant="primary">Get Started</AniccaButton>
    </div>
  )
}`}
        </pre>
      </section>

      {/* ── Stats cards ── */}
      <section className="mb-12">
        <h2 className="text-xl font-bold font-display text-on-surface mb-6 pb-2 border-b border-outline-variant/30">
          What's Included
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <AniccaCard variant="outlined" className="flex flex-col gap-2">
            <AniccaBadge variant="primary" appearance="soft" size="md" className="w-fit">Components</AniccaBadge>
            <p className="text-[2rem] font-bold font-display text-on-surface tracking-tight">40+</p>
            <p className="text-[0.82rem] text-text-muted leading-snug">
              Primitives, layout, data display, feedback, overlay, dashboard, and auth.
            </p>
          </AniccaCard>
          <AniccaCard variant="outlined" className="flex flex-col gap-2">
            <AniccaBadge variant="info" appearance="soft" size="md" className="w-fit">Hooks</AniccaBadge>
            <p className="text-[2rem] font-bold font-display text-on-surface tracking-tight">5</p>
            <p className="text-[0.82rem] text-text-muted leading-snug">
              Form validation, date utilities, and general-purpose hooks included.
            </p>
          </AniccaCard>
          <AniccaCard variant="outlined" className="flex flex-col gap-2">
            <AniccaBadge variant="success" appearance="soft" size="md" className="w-fit">Dependencies</AniccaBadge>
            <p className="text-[2rem] font-bold font-display text-on-surface tracking-tight">0</p>
            <p className="text-[0.82rem] text-text-muted leading-snug">
              Only React and React DOM. No Radix, no Headless UI, no Floating UI.
            </p>
          </AniccaCard>
        </div>
      </section>
    </article>
  )
}
