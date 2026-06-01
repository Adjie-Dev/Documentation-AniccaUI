import React from 'react'
import { AniccaProgressCard } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function ProgressCardPage() {
  return (
    <DocPage
      title="ProgressCard"
      description="A card displaying multiple tasks or categories with labelled progress bars. Supports custom colors and optional team avatar clusters."
      badge="Dashboard"
      importLine="import { AniccaProgressCard } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic progress card</SectionHeader>
      <ComponentDemo
        title="Project phases"
        description="Three items showing design, development, and testing progress."
        centered={false}
        preview={
          <div className="w-full max-w-md">
            <AniccaProgressCard
              title="Project Progress"
              items={[
                { name: 'Design', progress: 75 },
                { name: 'Development', progress: 45 },
                { name: 'Testing', progress: 20 },
              ]}
            />
          </div>
        }
        code={`<AniccaProgressCard
  title="Project Progress"
  items={[
    { name: 'Design', progress: 75 },
    { name: 'Development', progress: 45 },
    { name: 'Testing', progress: 20 },
  ]}
/>`}
      />

      <SectionHeader id="colors">Custom colors</SectionHeader>
      <ComponentDemo
        title="Colored progress bars"
        description="Pass a color string to each item to override the default primary accent."
        centered={false}
        preview={
          <div className="w-full max-w-md">
            <AniccaProgressCard
              title="Tasks by team"
              showCount
              items={[
                { name: 'Frontend', progress: 88, color: '#6366f1' },
                { name: 'Backend', progress: 62, color: '#10b981' },
                { name: 'QA', progress: 34, color: '#f59e0b' },
              ]}
            />
          </div>
        }
        code={`<AniccaProgressCard
  title="Tasks by team"
  showCount
  items={[
    { name: 'Frontend', progress: 88, color: '#6366f1' },
    { name: 'Backend', progress: 62, color: '#10b981' },
    { name: 'QA', progress: 34, color: '#f59e0b' },
  ]}
/>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'items',
            type: 'AniccaProgressItem[]',
            required: true,
            description: 'Array of { name, progress, color?, status?, team? } progress entries.',
          },
          {
            name: 'title',
            type: 'string',
            description: 'Heading text in the card header.',
          },
          {
            name: 'showCount',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show the item count badge in the header.',
          },
          {
            name: 'labels',
            type: 'AniccaProgressCardLabels',
            description: "Override unit label in the count badge. Default: 'projects'.",
          },
          {
            name: 'className',
            type: 'string',
            default: "''",
            description: 'Additional classes applied to the card container.',
          },
        ]}
      />
    </DocPage>
  )
}
