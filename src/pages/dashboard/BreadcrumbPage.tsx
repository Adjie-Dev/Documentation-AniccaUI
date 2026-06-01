import React from 'react'
import { AniccaBreadcrumb } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function BreadcrumbPage() {
  return (
    <DocPage
      title="Breadcrumb"
      description="Breadcrumb navigation that shows the current page location within a hierarchy. The last item renders as the active page; earlier items are styled as links."
      badge="Dashboard"
      importLine="import { AniccaBreadcrumb } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic breadcrumb</SectionHeader>
      <ComponentDemo
        title="3-level breadcrumb"
        description="Home and Dashboard are links; Analytics is the current page (non-link)."
        preview={
          <AniccaBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Analytics' },
            ]}
          />
        }
        code={`<AniccaBreadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics' },
  ]}
/>`}
      />

      <SectionHeader id="separator">Custom separator</SectionHeader>
      <ComponentDemo
        title="Arrow separator"
        description="Override the default '/' separator with any ReactNode."
        preview={
          <AniccaBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Settings', href: '/settings' },
              { label: 'Profile' },
            ]}
            separator="›"
          />
        }
        code={`<AniccaBreadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' },
    { label: 'Profile' },
  ]}
  separator="›"
/>`}
      />

      <SectionHeader id="with-icons">With icons</SectionHeader>
      <ComponentDemo
        title="Icon breadcrumb items"
        description="Add an icon prop to any item for visual context."
        preview={
          <AniccaBreadcrumb
            items={[
              { label: 'Home', href: '/', icon: <span>🏠</span> },
              { label: 'Projects', href: '/projects', icon: <span>📁</span> },
              { label: 'Alpha Project' },
            ]}
          />
        }
        code={`<AniccaBreadcrumb
  items={[
    { label: 'Home', href: '/', icon: <span>🏠</span> },
    { label: 'Projects', href: '/projects', icon: <span>📁</span> },
    { label: 'Alpha Project' },
  ]}
/>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'items',
            type: 'AniccaBreadcrumbItem[]',
            required: true,
            description: 'Array of { label, href?, icon? }. The last item renders as the current page.',
          },
          {
            name: 'separator',
            type: 'ReactNode',
            default: "'/'",
            description: 'Separator element rendered between breadcrumb items.',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "'Breadcrumb'",
            description: 'aria-label applied to the <nav> element for accessibility.',
          },
          {
            name: 'className',
            type: 'string',
            default: "''",
            description: 'Additional classes applied to the nav container.',
          },
        ]}
      />
    </DocPage>
  )
}
