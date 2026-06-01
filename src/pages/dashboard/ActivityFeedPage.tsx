import React from 'react'
import { AniccaActivityFeed } from 'anicca-ui'
import type { AniccaActivityItem } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function Ms({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: '18px', lineHeight: 1 }}>
      {name}
    </span>
  )
}

const now = new Date()
const timeAgo = (mins: number) => {
  const d = new Date(now.getTime() - mins * 60 * 1000)
  return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

const feedItems: AniccaActivityItem[] = [
  {
    icon: <Ms name="edit_note" />,
    message: 'Alice created a new project "Dashboard Redesign"',
    time: timeAgo(2),
  },
  {
    icon: <Ms name="check_circle" />,
    message: 'Bob completed task "API integration for auth flow"',
    time: timeAgo(15),
  },
  {
    icon: <Ms name="chat" />,
    message: 'Carol left a comment on "Design System v2"',
    time: timeAgo(43),
  },
  {
    icon: <Ms name="rocket_launch" />,
    message: 'David deployed version 1.4.2 to production',
    time: timeAgo(90),
  },
  {
    icon: <Ms name="person_add" />,
    message: 'Eve joined the team as Designer',
    time: timeAgo(240),
  },
]

export default function ActivityFeedPage() {
  return (
    <DocPage
      title="ActivityFeed"
      description="A vertical timeline of activity items with connector lines, icons, messages, and timestamps. Ideal for dashboards and audit trails."
      badge="Dashboard"
      importLine="import { AniccaActivityFeed } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        centered={false}
        preview={
          <div className="w-full max-w-lg">
            <AniccaActivityFeed title="Recent Activity" items={feedItems} />
          </div>
        }
        code={`const items = [
  {
    icon: <span className="material-symbols-outlined">edit_note</span>,
    message: 'Alice created a new project',
    time: '2 min ago',
  },
  {
    icon: <span className="material-symbols-outlined">check_circle</span>,
    message: 'Bob completed the task',
    time: '15 min ago',
  },
]

<AniccaActivityFeed title="Recent Activity" items={items} />`}
      />

      <SectionHeader id="no-title">Without title</SectionHeader>
      <ComponentDemo
        centered={false}
        preview={
          <div className="w-full max-w-lg">
            <AniccaActivityFeed items={feedItems.slice(0, 3)} />
          </div>
        }
        code={`<AniccaActivityFeed items={items} />`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'items',
            type: 'AniccaActivityItem[]',
            required: true,
            description: 'Array of { icon, message, time, iconBg? } activity entries.',
          },
          {
            name: 'title',
            type: 'string',
            description: 'Heading text shown above the feed.',
          },
          {
            name: 'badge',
            type: 'ReactNode',
            description: 'Optional badge rendered in the top-right of the header row.',
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
