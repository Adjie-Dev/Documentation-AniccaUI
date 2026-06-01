import React, { useState } from 'react'
import { AniccaTabs, AniccaButton } from 'anicca-ui'
import type { AniccaTabItem } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

const basicTabs: AniccaTabItem[] = [
  {
    key: 'overview',
    label: 'Overview',
    content: (
      <div className="text-sm text-text-muted space-y-2">
        <p className="font-semibold text-text">Overview</p>
        <p>This tab gives you a high-level summary of the current state of your project.</p>
      </div>
    ),
  },
  {
    key: 'analytics',
    label: 'Analytics',
    content: (
      <div className="text-sm text-text-muted space-y-2">
        <p className="font-semibold text-text">Analytics</p>
        <p>Detailed metrics, charts, and breakdowns live here.</p>
      </div>
    ),
  },
  {
    key: 'settings',
    label: 'Settings',
    content: (
      <div className="text-sm text-text-muted space-y-2">
        <p className="font-semibold text-text">Settings</p>
        <p>Configure preferences, integrations, and permissions from this panel.</p>
      </div>
    ),
  },
]

function ControlledTabsDemo() {
  const [active, setActive] = useState('overview')

  const controlled: AniccaTabItem[] = basicTabs.map((t) => ({ ...t }))

  return (
    <div className="w-full space-y-4">
      <div className="flex gap-2">
        {controlled.map((t) => (
          <AniccaButton
            key={t.key}
            size="sm"
            variant={active === t.key ? 'primary' : 'outline'}
            onClick={() => setActive(t.key)}
          >
            Select {t.label}
          </AniccaButton>
        ))}
      </div>
      <AniccaTabs tabs={controlled} activeKey={active} onChange={setActive} />
    </div>
  )
}

export default function TabsPage() {
  return (
    <DocPage
      title="Tabs"
      description="Tab navigation that switches between content panels. Supports both uncontrolled (defaultTab) and fully controlled (activeKey + onChange) modes."
      badge="Dashboard"
      importLine="import { AniccaTabs } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic tabs</SectionHeader>
      <ComponentDemo
        title="Uncontrolled tabs"
        description="Three tabs with independent content. The component manages its own state via defaultTab."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaTabs tabs={basicTabs} defaultTab="overview" />
          </div>
        }
        code={`const tabs = [
  { key: 'overview', label: 'Overview', content: <div>Overview content</div> },
  { key: 'analytics', label: 'Analytics', content: <div>Analytics content</div> },
  { key: 'settings', label: 'Settings', content: <div>Settings content</div> },
]

<AniccaTabs tabs={tabs} defaultTab="overview" />`}
      />

      <SectionHeader id="controlled">Controlled tabs</SectionHeader>
      <ComponentDemo
        title="Externally controlled"
        description="Pass activeKey and onChange to control the active tab from outside the component."
        centered={false}
        preview={<ControlledTabsDemo />}
        code={`const [active, setActive] = useState('overview')

<div className="flex gap-2 mb-4">
  <AniccaButton onClick={() => setActive('overview')}>Select Overview</AniccaButton>
  <AniccaButton onClick={() => setActive('analytics')}>Select Analytics</AniccaButton>
  <AniccaButton onClick={() => setActive('settings')}>Select Settings</AniccaButton>
</div>

<AniccaTabs tabs={tabs} activeKey={active} onChange={setActive} />`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'tabs',
            type: 'AniccaTabItem[]',
            required: true,
            description: 'Array of { key, label, content, icon? } tab definitions.',
          },
          {
            name: 'defaultTab',
            type: 'string',
            default: 'tabs[0].key',
            description: 'Initial active tab key (uncontrolled mode).',
          },
          {
            name: 'activeKey',
            type: 'string',
            description: 'Controlled active tab key. When set, component becomes controlled.',
          },
          {
            name: 'onChange',
            type: '(key: string) => void',
            description: 'Called when the user clicks a different tab.',
          },
        ]}
      />
    </DocPage>
  )
}
