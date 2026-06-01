import React, { useState } from 'react'
import { useAniccaToast } from 'anicca-ui'
import DocPage from '../components/DocPage'
import SectionHeader from '../components/SectionHeader'

const CATEGORIES: { label: string; icons: string[] }[] = [
  {
    label: 'Navigation',
    icons: [
      'home', 'dashboard', 'menu', 'arrow_back', 'arrow_forward', 'chevron_right',
      'chevron_left', 'expand_more', 'expand_less', 'close', 'open_in_new',
      'first_page', 'last_page', 'navigate_next', 'navigate_before',
    ],
  },
  {
    label: 'Actions',
    icons: [
      'add', 'edit', 'delete', 'save', 'search', 'filter_list', 'sort',
      'refresh', 'download', 'upload', 'share', 'copy_all', 'more_vert',
      'more_horiz', 'settings', 'tune', 'print', 'link', 'launch',
    ],
  },
  {
    label: 'Status',
    icons: [
      'check_circle', 'cancel', 'error', 'warning', 'info', 'pending',
      'schedule', 'lock', 'lock_open', 'verified', 'shield', 'key',
      'visibility', 'visibility_off', 'block', 'flag',
    ],
  },
  {
    label: 'Content',
    icons: [
      'description', 'folder', 'folder_open', 'image', 'videocam', 'attach_file',
      'bookmark', 'star', 'favorite', 'label', 'category', 'inventory_2',
      'article', 'topic', 'notes',
    ],
  },
  {
    label: 'Communication',
    icons: [
      'mail', 'chat', 'notifications', 'call', 'send', 'forum',
      'announcement', 'campaign', 'inbox', 'outbox', 'reply', 'forward_to_inbox',
    ],
  },
  {
    label: 'Data',
    icons: [
      'analytics', 'bar_chart', 'trending_up', 'trending_down', 'payments',
      'credit_card', 'savings', 'table_chart', 'timeline', 'pie_chart',
      'show_chart', 'leaderboard',
    ],
  },
  {
    label: 'People',
    icons: [
      'person', 'group', 'person_add', 'manage_accounts', 'badge',
      'admin_panel_settings', 'groups', 'supervisor_account', 'contacts',
    ],
  },
]

const ALL_ICONS = CATEGORIES.flatMap((c) => c.icons)

export default function IconsPage() {
  const [query, setQuery] = useState('')
  const [filled, setFilled] = useState(false)
  const [copied, setCopied] = useState('')
  const { push } = useAniccaToast()

  const q = query.toLowerCase().trim()

  const copy = (name: string) => {
    navigator.clipboard.writeText(name)
    setCopied(name)
    push({ variant: 'success', title: 'Copied!', description: `"${name}" copied to clipboard.` })
    setTimeout(() => setCopied(''), 2000)
  }

  const filteredCategories = q
    ? [{ label: 'Results', icons: ALL_ICONS.filter((n) => n.includes(q)) }]
    : CATEGORIES

  const totalShown = filteredCategories.reduce((a, c) => a + c.icons.length, 0)

  return (
    <DocPage
      title="Icons"
      description="anicca-ui ships Material Symbols Outlined via its stylesheet. Add the class material-symbols-outlined to any span and use an icon name as text content."
      badge="Reference"
    >
      <SectionHeader id="usage">Usage</SectionHeader>

      <pre className="mb-8 rounded-xl border border-outline-variant/40 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/5">
          <span className="text-[0.7rem] text-white/30 font-mono uppercase tracking-widest">tsx</span>
        </div>
        <div className="p-5 bg-[#0d1117] text-[0.82rem] font-mono text-white/80 overflow-x-auto leading-relaxed whitespace-pre">{`import 'anicca-ui/styles.css'

// Outline (default)
<span className="material-symbols-outlined">home</span>

// Filled
<span
  className="material-symbols-outlined"
  style={{ fontVariationSettings: "'FILL' 1" }}
>
  home
</span>

// Custom size
<span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
  dashboard
</span>`}</div>
      </pre>

      <SectionHeader id="gallery">Gallery</SectionHeader>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Search icons..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 min-w-[180px] h-9 px-3 rounded-lg border border-outline-variant/40 bg-surface text-on-surface text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/60 transition-colors"
        />
        <div className="flex rounded-lg border border-outline-variant/40 overflow-hidden text-sm">
          <button
            onClick={() => setFilled(false)}
            className={`px-4 py-1.5 transition-colors ${!filled ? 'bg-primary text-white' : 'bg-surface text-text-muted hover:text-text'}`}
          >
            Outline
          </button>
          <button
            onClick={() => setFilled(true)}
            className={`px-4 py-1.5 transition-colors ${filled ? 'bg-primary text-white' : 'bg-surface text-text-muted hover:text-text'}`}
          >
            Filled
          </button>
        </div>
      </div>

      {filteredCategories.map((cat) =>
        cat.icons.length === 0 ? null : (
          <div key={cat.label} className="mb-8">
            {!q && (
              <h3 className="text-[0.78rem] font-semibold text-text-muted uppercase tracking-wider mb-3">
                {cat.label}
              </h3>
            )}
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
              {cat.icons.map((name) => (
                <button
                  key={name}
                  onClick={() => copy(name)}
                  title={copied === name ? 'Copied!' : `Click to copy: ${name}`}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all text-center ${
                    copied === name
                      ? 'border-primary/60 bg-primary/10 text-primary'
                      : 'border-outline-variant/30 bg-surface hover:border-primary/40 hover:bg-primary/5 text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '24px',
                      lineHeight: 1,
                      fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
                    }}
                  >
                    {name}
                  </span>
                  <span className="text-[0.58rem] leading-tight break-all font-mono">{name}</span>
                </button>
              ))}
            </div>
          </div>
        )
      )}

      {q && totalShown === 0 && (
        <p className="text-text-muted text-sm py-8 text-center">No icons match "{query}".</p>
      )}

      <p className="mt-2 text-[0.78rem] text-text-muted">
        {totalShown} of {ALL_ICONS.length} icons. Click any icon to copy its name.
      </p>
    </DocPage>
  )
}
