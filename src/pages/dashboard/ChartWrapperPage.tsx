import React from 'react'
import { AniccaChartWrapper } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function ChartPlaceholder() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-surface-container rounded-xl border border-outline-variant/20">
      <svg viewBox="0 0 120 60" className="w-32 opacity-40" fill="none">
        <polyline
          points="0,50 20,35 40,42 60,20 80,28 100,10 120,18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
      </svg>
      <p className="text-xs text-text-muted">Bring your own chart library</p>
    </div>
  )
}

export default function ChartWrapperPage() {
  return (
    <DocPage
      title="ChartWrapper"
      description="A container for chart components that provides a consistent header, loading skeleton, and empty state. Bring your own chart library (Recharts, Chart.js, Victory, etc.)."
      badge="Dashboard"
      importLine="import { AniccaChartWrapper } from 'anicca-ui'"
    >
      <SectionHeader id="basic">With chart content</SectionHeader>
      <ComponentDemo
        title="Chart container"
        description="Wrap any chart component. AniccaChartWrapper provides the title, subtitle, and framing."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaChartWrapper title="Monthly Revenue" subtitle="Last 12 months" height={200}>
              <ChartPlaceholder />
            </AniccaChartWrapper>
          </div>
        }
        code={`<AniccaChartWrapper title="Monthly Revenue" subtitle="Last 12 months" height={200}>
  {/* Your Recharts / Chart.js / Victory chart here */}
  <LineChart data={data} width="100%" height={200}>
    <Line type="monotone" dataKey="revenue" stroke="#6366f1" />
  </LineChart>
</AniccaChartWrapper>`}
      />

      <SectionHeader id="loading">Loading state</SectionHeader>
      <ComponentDemo
        title="Loading skeleton"
        description="Pass loading=true while data is being fetched to show an animated shimmer."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaChartWrapper title="Monthly Revenue" subtitle="Fetching data…" height={200} loading>
              <div />
            </AniccaChartWrapper>
          </div>
        }
        code={`<AniccaChartWrapper title="Monthly Revenue" subtitle="Fetching data…" height={200} loading>
  {/* children are hidden while loading */}
</AniccaChartWrapper>`}
      />

      <SectionHeader id="empty">Empty state</SectionHeader>
      <ComponentDemo
        title="Empty state"
        description="Pass empty=true when there is no data to display."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaChartWrapper
              title="Monthly Revenue"
              subtitle="No data for this period"
              height={200}
              empty
              emptyMessage="No revenue data available for the selected range"
            >
              <div />
            </AniccaChartWrapper>
          </div>
        }
        code={`<AniccaChartWrapper
  title="Monthly Revenue"
  height={200}
  empty
  emptyMessage="No revenue data available for the selected range"
>
  {/* children hidden when empty */}
</AniccaChartWrapper>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'string',
            required: true,
            description: 'Chart heading displayed above the chart area.',
          },
          {
            name: 'subtitle',
            type: 'string',
            description: 'Secondary descriptive text rendered below the title.',
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Show animated shimmer skeleton instead of children.',
          },
          {
            name: 'empty',
            type: 'boolean',
            default: 'false',
            description: 'Show empty state illustration instead of children.',
          },
          {
            name: 'emptyMessage',
            type: 'string',
            default: "'No data available'",
            description: 'Text shown in the empty state.',
          },
          {
            name: 'height',
            type: 'string | number',
            default: '300',
            description: 'Height of the chart area. Accepts a pixel number or any CSS string.',
          },
        ]}
      />
    </DocPage>
  )
}
