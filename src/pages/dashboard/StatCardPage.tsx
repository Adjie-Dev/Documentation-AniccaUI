import React from 'react'
import { AniccaStatCard } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function StatCardPage() {
  return (
    <DocPage
      title="StatCard"
      description="Dashboard statistic card with a prominent value, trend indicator, and optional icon. Supports positive and negative trends with color-coded badges."
      badge="Dashboard"
      importLine="import { AniccaStatCard } from 'anicca-ui'"
    >
      <SectionHeader id="grid">2×2 Grid</SectionHeader>
      <ComponentDemo
        title="Dashboard overview"
        description="Four stat cards in a responsive 2-column grid with trend indicators."
        centered={false}
        preview={
          <div className="grid grid-cols-2 gap-4 w-full">
            <AniccaStatCard
              title="Total Users"
              value="12,483"
              trend={12.5}
              trendLabel="vs last month"
              icon={<UsersIcon />}
            />
            <AniccaStatCard
              title="Revenue"
              value="$48,295"
              trend={8.2}
              trendLabel="vs last month"
            />
            <AniccaStatCard
              title="Active Projects"
              value="38"
              trend={-3.1}
              trendLabel="vs last month"
            />
            <AniccaStatCard
              title="Completion Rate"
              value="94.2%"
              trend={2.8}
              trendLabel="vs last month"
            />
          </div>
        }
        code={`<div className="grid grid-cols-2 gap-4">
  <AniccaStatCard
    title="Total Users"
    value="12,483"
    trend={12.5}
    trendLabel="vs last month"
    icon={<UsersIcon />}
  />
  <AniccaStatCard
    title="Revenue"
    value="$48,295"
    trend={8.2}
    trendLabel="vs last month"
  />
  <AniccaStatCard
    title="Active Projects"
    value="38"
    trend={-3.1}
    trendLabel="vs last month"
  />
  <AniccaStatCard
    title="Completion Rate"
    value="94.2%"
    trend={2.8}
    trendLabel="vs last month"
  />
</div>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'string',
            required: true,
            description: 'Label text shown above the value in uppercase.',
          },
          {
            name: 'value',
            type: 'string | number',
            required: true,
            description: 'Primary metric value displayed prominently.',
          },
          {
            name: 'trend',
            type: 'number',
            description: 'Percentage change. Positive = green up arrow, negative = red down arrow.',
          },
          {
            name: 'trendLabel',
            type: 'string',
            description: 'Contextual label shown alongside the trend badge (e.g. "vs last month").',
          },
          {
            name: 'icon',
            type: 'ReactNode',
            description: 'Icon element rendered in the top-right corner of the card.',
          },
          {
            name: 'color',
            type: 'string',
            default: 'var(--primary)',
            description: 'CSS color value for the left border accent.',
          },
          {
            name: 'className',
            type: 'string',
            default: "''",
            description: 'Additional Tailwind or custom classes applied to the card container.',
          },
        ]}
      />
    </DocPage>
  )
}
