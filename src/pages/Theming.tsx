import React, { useState } from 'react'
import {
  AniccaThemeProvider,
  AniccaButton,
  AniccaBadge,
  AniccaStatCard,
} from 'anicca-ui'
import SectionHeader from '../components/SectionHeader'
import DocPage from '../components/DocPage'

type PresetKey = 'indigo' | 'violet' | 'emerald' | 'rose' | 'amber'

const PRESETS: Record<PresetKey, { label: string; primary: string; color: string }> = {
  indigo:  { label: 'Indigo',   primary: '70 72 212',  color: '#4648d4' },
  violet:  { label: 'Violet',   primary: '124 58 237', color: '#7c3aed' },
  emerald: { label: 'Emerald',  primary: '5 150 105',  color: '#059669' },
  rose:    { label: 'Rose',     primary: '244 63 94',  color: '#f43f5e' },
  amber:   { label: 'Amber',    primary: '217 119 6',  color: '#d97706' },
}

const TOKEN_ROWS = [
  { variable: '--primary',                  light: '70 72 212',   dark: '111 113 255',  description: 'Primary brand color (RGB channels)' },
  { variable: '--on-primary',               light: '255 255 255', dark: '255 255 255',  description: 'Text on primary background' },
  { variable: '--surface',                  light: '255 255 255', dark: '18 18 18',     description: 'Component surface / card background' },
  { variable: '--on-surface',               light: '15 23 42',    dark: '241 245 249',  description: 'Primary text color' },
  { variable: '--on-surface-variant',       light: '71 85 105',   dark: '148 163 184',  description: 'Secondary / muted text' },
  { variable: '--outline',                  light: '148 163 184', dark: '71 85 105',    description: 'Border and divider color' },
  { variable: '--outline-variant',          light: '203 213 225', dark: '51 65 85',     description: 'Subtle border / separator' },
  { variable: '--surface-container',        light: '241 245 249', dark: '30 41 59',     description: 'Slightly elevated container' },
  { variable: '--surface-container-lowest', light: '255 255 255', dark: '15 23 42',     description: 'Lowest elevation surface' },
  { variable: '--error',                    light: '220 38 38',   dark: '239 68 68',    description: 'Danger / error states' },
]

export default function Theming() {
  const [preset, setPreset] = useState<PresetKey>('indigo')
  const theme = { primary: PRESETS[preset].primary }

  return (
    <DocPage
      title="Theming"
      description="Customize anicca-ui to match your brand using CSS custom properties and AniccaThemeProvider."
    >
      {/* ── Overview ── */}
      <SectionHeader id="overview">Overview</SectionHeader>
      <p className="text-text-muted mb-4 leading-relaxed">
        anicca-ui's design tokens are CSS custom properties defined on{' '}
        <code className="text-primary font-mono text-[0.82rem]">:root</code>. Wrap any subtree with{' '}
        <code className="text-primary font-mono text-[0.82rem]">AniccaThemeProvider</code> and pass a{' '}
        <code className="text-primary font-mono text-[0.82rem]">theme</code> object to override tokens for that scope.
        Token values are <strong>space-separated RGB channels</strong> (e.g.{' '}
        <code className="text-violet font-mono text-[0.82rem]">'124 58 237'</code>), which lets Tailwind opacity modifiers work transparently.
      </p>

      {/* ── Live theme demo ── */}
      <SectionHeader id="presets">Theme Presets</SectionHeader>
      <p className="text-text-muted mb-5 leading-relaxed">
        Click a preset to see components update live. The selected primary color is applied via{' '}
        <code className="text-primary font-mono text-[0.82rem]">AniccaThemeProvider</code>.
      </p>

      {/* Preset picker */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(Object.keys(PRESETS) as PresetKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setPreset(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-[0.78rem] font-semibold border transition-all ${
              preset === key
                ? 'border-transparent text-white shadow-sm'
                : 'border-outline-variant/40 text-text-muted hover:text-text bg-surface'
            }`}
            style={preset === key ? { backgroundColor: PRESETS[key].color } : {}}
          >
            <span
              className="w-3 h-3 rounded-full border border-white/30"
              style={{ backgroundColor: PRESETS[key].color }}
            />
            {PRESETS[key].label}
          </button>
        ))}
      </div>

      {/* Live preview */}
      <div className="rounded-xl border border-outline-variant/40 overflow-hidden mb-8">
        <div className="px-4 py-2.5 bg-surface-container border-b border-outline-variant/30">
          <span className="text-[0.72rem] text-text-muted font-mono">
            Live preview, primary: '{PRESETS[preset].primary}'
          </span>
        </div>
        <div className="p-8 bg-surface-container-lowest/50">
          <AniccaThemeProvider theme={theme}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                <AniccaStatCard title="Revenue" value="$24,890" trend={8.2} />
                <AniccaStatCard title="Sessions" value="12,403" trend={-1.4} />
              </div>
              <div className="flex flex-wrap gap-3">
                <AniccaButton variant="primary">Primary</AniccaButton>
                <AniccaButton variant="outline">Outline</AniccaButton>
                <AniccaButton variant="ghost">Ghost</AniccaButton>
              </div>
              <div className="flex flex-wrap gap-2">
                <AniccaBadge variant="primary" appearance="solid" size="sm">Solid</AniccaBadge>
                <AniccaBadge variant="primary" appearance="soft" size="sm">Soft</AniccaBadge>
                <AniccaBadge variant="primary" appearance="outlined" size="sm">Outlined</AniccaBadge>
              </div>
            </div>
          </AniccaThemeProvider>
        </div>
      </div>

      {/* Code snippet */}
      <pre className="bg-surface-container rounded-xl border border-outline-variant/40 px-5 py-4 text-[0.8rem] font-mono text-on-surface overflow-x-auto mb-10">
{`import { AniccaThemeProvider } from 'anicca-ui'

// Scope a purple theme to a single section
<AniccaThemeProvider theme={{ primary: '${PRESETS[preset].primary}' }}>
  <YourComponent />
</AniccaThemeProvider>

// Or at the root for a global theme
<AniccaThemeProvider theme={{ primary: '${PRESETS[preset].primary}' }}>
  <App />
</AniccaThemeProvider>`}
      </pre>

      {/* ── Token reference ── */}
      <SectionHeader id="tokens">Token Reference</SectionHeader>
      <p className="text-text-muted mb-5 leading-relaxed">
        Key CSS custom properties and their default light / dark values (RGB channels).
      </p>

      <div className="overflow-x-auto rounded-xl border border-outline-variant/40 mb-8">
        <table className="w-full text-[0.8rem]">
          <thead>
            <tr className="bg-surface-container">
              <th className="text-left px-4 py-3 font-semibold text-text-muted">Variable</th>
              <th className="text-left px-4 py-3 font-semibold text-text-muted">Light</th>
              <th className="text-left px-4 py-3 font-semibold text-text-muted">Dark</th>
              <th className="text-left px-4 py-3 font-semibold text-text-muted">Description</th>
            </tr>
          </thead>
          <tbody>
            {TOKEN_ROWS.map((row) => (
              <tr key={row.variable} className="border-t border-outline-variant/20 hover:bg-surface-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <code className="text-primary font-mono text-[0.75rem]">{row.variable}</code>
                </td>
                <td className="px-4 py-3">
                  <code className="text-text font-mono text-[0.72rem] bg-surface-container px-1.5 py-0.5 rounded">
                    {row.light}
                  </code>
                </td>
                <td className="px-4 py-3">
                  <code className="text-text font-mono text-[0.72rem] bg-surface-container px-1.5 py-0.5 rounded">
                    {row.dark}
                  </code>
                </td>
                <td className="px-4 py-3 text-text-muted">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Dark mode ── */}
      <SectionHeader id="dark-mode">Dark Mode</SectionHeader>
      <p className="text-text-muted mb-4 leading-relaxed">
        anicca-ui uses the <code className="text-primary font-mono text-[0.82rem]">.dark</code> class strategy.
        Toggle dark mode by adding or removing the class on the{' '}
        <code className="text-primary font-mono text-[0.82rem]">{'<html>'}</code> element:
      </p>
      <pre className="bg-surface-container rounded-xl border border-outline-variant/40 px-5 py-4 text-[0.8rem] font-mono text-on-surface overflow-x-auto mb-6">
{`// Toggle dark mode
function toggleDark() {
  document.documentElement.classList.toggle('dark')
}

// Or set explicitly
document.documentElement.classList.add('dark')    // enable
document.documentElement.classList.remove('dark') // disable

// Persist to localStorage
const isDark = localStorage.getItem('theme') === 'dark'
if (isDark) document.documentElement.classList.add('dark')`}
      </pre>
      <p className="text-[0.85rem] text-text-muted">
        All tokens automatically switch between their light and dark values when the{' '}
        <code className="text-primary font-mono text-[0.78rem]">.dark</code> class is present.
        No additional configuration is required.
      </p>
    </DocPage>
  )
}
