import React from 'react'
import { AniccaBadge } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function BadgePage() {
  return (
    <DocPage
      title="Badge"
      description="Small status indicators used to label, categorize, or highlight an element. Supports multiple semantic variants, appearances, and sizes."
      badge="Data Display"
      importLine="{ AniccaBadge } from 'anicca-ui'"
    >
      <SectionHeader id="variants">Variants</SectionHeader>
      <ComponentDemo
        title="All Variants"
        description="Six semantic color variants to convey meaning at a glance."
        preview={
          <div className="flex flex-wrap gap-2">
            <AniccaBadge variant="neutral">Neutral</AniccaBadge>
            <AniccaBadge variant="primary">Primary</AniccaBadge>
            <AniccaBadge variant="success">Success</AniccaBadge>
            <AniccaBadge variant="warning">Warning</AniccaBadge>
            <AniccaBadge variant="danger">Danger</AniccaBadge>
            <AniccaBadge variant="info">Info</AniccaBadge>
          </div>
        }
        code={`<div className="flex flex-wrap gap-2">
  <AniccaBadge variant="neutral">Neutral</AniccaBadge>
  <AniccaBadge variant="primary">Primary</AniccaBadge>
  <AniccaBadge variant="success">Success</AniccaBadge>
  <AniccaBadge variant="warning">Warning</AniccaBadge>
  <AniccaBadge variant="danger">Danger</AniccaBadge>
  <AniccaBadge variant="info">Info</AniccaBadge>
</div>`}
      />

      <SectionHeader id="appearances">Appearances</SectionHeader>
      <ComponentDemo
        title="Appearance Styles"
        description="Three surface treatments: soft (default), solid, and outlined."
        variants={[
          {
            label: 'Soft',
            preview: (
              <div className="flex flex-wrap gap-2">
                <AniccaBadge variant="primary" appearance="soft">Primary</AniccaBadge>
                <AniccaBadge variant="success" appearance="soft">Success</AniccaBadge>
                <AniccaBadge variant="danger" appearance="soft">Danger</AniccaBadge>
              </div>
            ),
            code: `<AniccaBadge variant="primary" appearance="soft">Primary</AniccaBadge>
<AniccaBadge variant="success" appearance="soft">Success</AniccaBadge>
<AniccaBadge variant="danger" appearance="soft">Danger</AniccaBadge>`,
          },
          {
            label: 'Solid',
            preview: (
              <div className="flex flex-wrap gap-2">
                <AniccaBadge variant="primary" appearance="solid">Primary</AniccaBadge>
                <AniccaBadge variant="success" appearance="solid">Success</AniccaBadge>
                <AniccaBadge variant="danger" appearance="solid">Danger</AniccaBadge>
              </div>
            ),
            code: `<AniccaBadge variant="primary" appearance="solid">Primary</AniccaBadge>
<AniccaBadge variant="success" appearance="solid">Success</AniccaBadge>
<AniccaBadge variant="danger" appearance="solid">Danger</AniccaBadge>`,
          },
          {
            label: 'Outlined',
            preview: (
              <div className="flex flex-wrap gap-2">
                <AniccaBadge variant="primary" appearance="outlined">Primary</AniccaBadge>
                <AniccaBadge variant="success" appearance="outlined">Success</AniccaBadge>
                <AniccaBadge variant="danger" appearance="outlined">Danger</AniccaBadge>
              </div>
            ),
            code: `<AniccaBadge variant="primary" appearance="outlined">Primary</AniccaBadge>
<AniccaBadge variant="success" appearance="outlined">Success</AniccaBadge>
<AniccaBadge variant="danger" appearance="outlined">Danger</AniccaBadge>`,
          },
        ]}
      />

      <SectionHeader id="dot">With Dot</SectionHeader>
      <ComponentDemo
        title="Dot Indicator"
        description="Add a leading dot to reinforce status meaning visually."
        preview={
          <div className="flex flex-wrap gap-2">
            <AniccaBadge variant="success" dot>Online</AniccaBadge>
            <AniccaBadge variant="warning" dot>Away</AniccaBadge>
            <AniccaBadge variant="danger" dot>Offline</AniccaBadge>
          </div>
        }
        code={`<AniccaBadge variant="success" dot>Online</AniccaBadge>
<AniccaBadge variant="warning" dot>Away</AniccaBadge>
<AniccaBadge variant="danger" dot>Offline</AniccaBadge>`}
      />

      <SectionHeader id="sizes">Sizes</SectionHeader>
      <ComponentDemo
        title="Size Scale"
        description="Two sizes to fit different layout densities."
        preview={
          <div className="flex flex-wrap items-center gap-3">
            <AniccaBadge variant="primary" size="sm">Small</AniccaBadge>
            <AniccaBadge variant="primary" size="md">Medium</AniccaBadge>
          </div>
        }
        code={`<AniccaBadge variant="primary" size="sm">Small</AniccaBadge>
<AniccaBadge variant="primary" size="md">Medium</AniccaBadge>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'variant',
            type: '"neutral" | "primary" | "success" | "warning" | "danger" | "info"',
            default: '"neutral"',
            description: 'Semantic color variant of the badge.',
          },
          {
            name: 'size',
            type: '"sm" | "md"',
            default: '"md"',
            description: 'Controls the font size and padding of the badge.',
          },
          {
            name: 'appearance',
            type: '"soft" | "solid" | "outlined"',
            default: '"soft"',
            description: 'Visual treatment applied to the badge surface.',
          },
          {
            name: 'dot',
            type: 'boolean',
            default: 'false',
            description: 'When true, renders a small colored dot before the label.',
          },
        ]}
      />
    </DocPage>
  )
}
