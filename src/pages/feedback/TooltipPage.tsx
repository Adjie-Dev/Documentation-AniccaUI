import React from 'react'
import { AniccaTooltip, AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function TooltipPage() {
  return (
    <DocPage
      title="Tooltip"
      description="Hover or focus-triggered labels that appear next to an element. Portals to document.body and positions relative to the trigger."
      badge="Feedback"
      importLine="import { AniccaTooltip } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic usage</SectionHeader>
      <ComponentDemo
        title="Top tooltip"
        description="Wrap any focusable element. The tooltip appears above by default."
        preview={
          <AniccaTooltip content="This is a tooltip!" placement="top">
            <AniccaButton variant="outline">Hover me (top)</AniccaButton>
          </AniccaTooltip>
        }
        code={`<AniccaTooltip content="This is a tooltip!" placement="top">
  <AniccaButton variant="outline">Hover me (top)</AniccaButton>
</AniccaTooltip>`}
      />

      <SectionHeader id="placements">All placements</SectionHeader>
      <ComponentDemo
        title="Top / Right / Bottom / Left"
        description="Four placement options. The tooltip repositions to avoid overflow automatically."
        preview={
          <div className="grid grid-cols-2 gap-4">
            <AniccaTooltip content="Top tooltip" placement="top">
              <AniccaButton variant="outline" className="w-full">Top</AniccaButton>
            </AniccaTooltip>
            <AniccaTooltip content="Right tooltip" placement="right">
              <AniccaButton variant="outline" className="w-full">Right</AniccaButton>
            </AniccaTooltip>
            <AniccaTooltip content="Bottom tooltip" placement="bottom">
              <AniccaButton variant="outline" className="w-full">Bottom</AniccaButton>
            </AniccaTooltip>
            <AniccaTooltip content="Left tooltip" placement="left">
              <AniccaButton variant="outline" className="w-full">Left</AniccaButton>
            </AniccaTooltip>
          </div>
        }
        code={`<AniccaTooltip content="Top tooltip" placement="top">
  <AniccaButton>Top</AniccaButton>
</AniccaTooltip>

<AniccaTooltip content="Right tooltip" placement="right">
  <AniccaButton>Right</AniccaButton>
</AniccaTooltip>

<AniccaTooltip content="Bottom tooltip" placement="bottom">
  <AniccaButton>Bottom</AniccaButton>
</AniccaTooltip>

<AniccaTooltip content="Left tooltip" placement="left">
  <AniccaButton>Left</AniccaButton>
</AniccaTooltip>`}
      />

      <SectionHeader id="delay">Custom delay</SectionHeader>
      <ComponentDemo
        title="With delay prop"
        description="Control how long the user must hover before the tooltip appears."
        preview={
          <div className="flex gap-4">
            <AniccaTooltip content="Instant (0ms)" placement="top" delay={0}>
              <AniccaButton variant="outline">No delay</AniccaButton>
            </AniccaTooltip>
            <AniccaTooltip content="Slow (800ms)" placement="top" delay={800}>
              <AniccaButton variant="outline">800ms delay</AniccaButton>
            </AniccaTooltip>
          </div>
        }
        code={`<AniccaTooltip content="Instant (0ms)" placement="top" delay={0}>
  <AniccaButton>No delay</AniccaButton>
</AniccaTooltip>

<AniccaTooltip content="Slow (800ms)" placement="top" delay={800}>
  <AniccaButton>800ms delay</AniccaButton>
</AniccaTooltip>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'content',
            type: 'ReactNode',
            required: true,
            description: 'Content rendered inside the tooltip bubble.',
          },
          {
            name: 'placement',
            type: "'top' | 'right' | 'bottom' | 'left'",
            default: "'top'",
            description: 'Preferred placement relative to the trigger element.',
          },
          {
            name: 'delay',
            type: 'number',
            default: '200',
            description: 'Milliseconds to wait on hover before showing the tooltip.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disable tooltip behavior while still rendering children.',
          },
          {
            name: 'open',
            type: 'boolean',
            description: 'Controlled open state. When provided, overrides internal hover state.',
          },
        ]}
      />
    </DocPage>
  )
}
