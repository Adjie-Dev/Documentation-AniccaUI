import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AniccaSidebar, AniccaNavbar, AniccaBreadcrumb } from 'anicca-ui'
import type { AniccaSidebarItem, AniccaBreadcrumbItem } from 'anicca-ui'
import { navItems, type NavItem } from './lib/nav'
import AppRoutes from './routes'
import DocsSearch from './components/DocsSearch'

function Icon({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: '20px', lineHeight: 1 }}>
      {name}
    </span>
  )
}

function toSidebarItems(items: NavItem[]): AniccaSidebarItem[] {
  return items.map((item) => ({
    label: item.label,
    href: item.href,
    icon: item.icon ? <Icon name={item.icon} /> : undefined,
    children: item.children ? toSidebarItems(item.children) : undefined,
  }))
}

function buildBreadcrumb(pathname: string, items: NavItem[]): AniccaBreadcrumbItem[] {
  const crumbs: AniccaBreadcrumbItem[] = [{ label: 'Docs', href: '/' }]
  for (const item of items) {
    if (item.children) {
      const child = item.children.find((c) => c.href === pathname)
      if (child) {
        crumbs.push({ label: item.label, href: item.href })
        crumbs.push({ label: child.label })
        return crumbs
      }
    }
    if (item.href === pathname) {
      crumbs.push({ label: item.label })
      return crumbs
    }
  }
  return crumbs
}

export default function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [dark, setDark] = useState(() =>
    localStorage.getItem('anicca-theme') === 'dark'
  )
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('anicca-theme', dark ? 'dark' : 'light')
  }, [dark])

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = (e.target as HTMLElement).closest('a')
    if (a) {
      const href = a.getAttribute('href')
      if (href && href.startsWith('/')) {
        e.preventDefault()
        navigate(href)
      }
    }
  }

  const logo = (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center font-bold text-sm text-white">
        A
      </div>
      {!collapsed && (
        <span className="font-display font-bold text-on-surface text-[0.95rem] tracking-tight">
          anicca<span className="text-primary">-ui</span>
        </span>
      )}
    </div>
  )

  const crumbs = buildBreadcrumb(location.pathname, navItems)
  const showCrumbs = location.pathname !== '/'

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div onClick={handleNavClick} className="flex-shrink-0">
        <AniccaSidebar
          items={toSidebarItems(navItems)}
          collapsed={collapsed}
          onCollapse={setCollapsed}
          activePath={location.pathname}
          logo={logo}
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <AniccaNavbar
          onMenuToggle={() => setCollapsed(!collapsed)}
          actions={
            <div className="flex items-center gap-2">
              <DocsSearch />
              <button
                className="p-2 rounded-full text-on-surface-variant hover:bg-primary/5 transition-colors"
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', lineHeight: 1 }}>
                  {dark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <a
                href="https://www.npmjs.com/package/anicca-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-text-muted hover:text-text text-xs font-semibold border border-outline-variant/40 transition-colors"
              >
                <span>npm</span>
                <span className="text-primary">v1.1.1</span>
              </a>
            </div>
          }
        />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-10">
            {showCrumbs && (
              <div className="mb-6">
                <AniccaBreadcrumb items={crumbs} />
              </div>
            )}
            <AppRoutes />
          </div>
        </main>
      </div>
    </div>
  )
}
