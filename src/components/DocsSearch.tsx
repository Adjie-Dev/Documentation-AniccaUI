import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { navItems, type NavItem } from '../lib/nav'

interface SearchEntry {
  label: string
  href: string
  category?: string
}

function flattenNav(items: NavItem[], parent?: string): SearchEntry[] {
  const result: SearchEntry[] = []
  for (const item of items) {
    if (item.children) {
      result.push(...flattenNav(item.children, item.label))
    } else {
      result.push({ label: item.label, href: item.href, category: parent })
    }
  }
  return result
}

const INDEX = flattenNav(navItems)

export default function DocsSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = query.trim()
    ? INDEX.filter(
        (e) =>
          e.label.toLowerCase().includes(query.toLowerCase()) ||
          (e.category ?? '').toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : []

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '/' && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        inputRef.current?.focus()
        setOpen(true)
      }
      if (e.key === 'Escape') {
        setOpen(false)
        setQuery('')
        inputRef.current?.blur()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    setActive(0)
  }, [query])

  const go = (href: string) => {
    navigate(href)
    setQuery('')
    setOpen(false)
    inputRef.current?.blur()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((p) => Math.min(p + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((p) => Math.max(p - 1, 0))
    } else if (e.key === 'Enter' && results[active]) {
      go(results[active].href)
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-1.5 h-8 px-3 rounded-lg border border-outline-variant/40 bg-surface text-text-muted hover:border-primary/40 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/10 transition-all w-[180px]">
        <span className="material-symbols-outlined flex-shrink-0" style={{ fontSize: '16px', lineHeight: 1 }}>
          search
        </span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={onKeyDown}
          className="flex-1 min-w-0 bg-transparent text-[0.78rem] text-on-surface placeholder:text-text-muted outline-none"
        />
        {!query && (
          <kbd className="hidden sm:inline text-[0.6rem] px-1 py-0.5 rounded border border-outline-variant/40 text-text-muted font-mono">
            /
          </kbd>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest border border-outline-variant/40 rounded-xl shadow-lg overflow-hidden z-50 min-w-[240px]">
          {results.map((entry, i) => (
            <button
              key={entry.href}
              onMouseDown={() => go(entry.href)}
              className={`w-full text-left px-3 py-2 flex items-center gap-2 transition-colors ${
                i === active
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined flex-shrink-0 text-text-muted" style={{ fontSize: '16px', lineHeight: 1 }}>
                article
              </span>
              <span className="text-[0.82rem] font-medium">{entry.label}</span>
              {entry.category && (
                <span className="ml-auto text-[0.7rem] text-text-muted flex-shrink-0">{entry.category}</span>
              )}
            </button>
          ))}
        </div>
      )}

      {open && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container-lowest border border-outline-variant/40 rounded-xl shadow-lg px-3 py-4 z-50 min-w-[240px]">
          <p className="text-[0.8rem] text-text-muted text-center">No results for "{query}"</p>
        </div>
      )}
    </div>
  )
}
