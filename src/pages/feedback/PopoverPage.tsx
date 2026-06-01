import React from 'react'
import { AniccaPopover, AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function PopoverPage() {
  return (
    <DocPage
      title="Popover"
      description="A floating panel anchored to a trigger element. Supports click or hover triggers, portals to document.body, and closes on outside click or Escape."
      badge="Feedback"
      importLine="import { AniccaPopover } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic usage</SectionHeader>
      <ComponentDemo
        title="Click trigger"
        description="Click the button to toggle the popover. Click outside or press Escape to dismiss."
        preview={
          <AniccaPopover
            content={
              <div className="p-2 text-sm">
                <p className="font-semibold text-text mb-1">Popover title</p>
                <p className="text-text-muted">Popover content here. You can put anything inside.</p>
              </div>
            }
            placement="bottom"
            trigger="click"
          >
            <AniccaButton variant="outline">Open Popover</AniccaButton>
          </AniccaPopover>
        }
        code={`<AniccaPopover
  content={
    <div className="p-2 text-sm">
      <p className="font-semibold text-text mb-1">Popover title</p>
      <p className="text-text-muted">Popover content here.</p>
    </div>
  }
  placement="bottom"
  trigger="click"
>
  <AniccaButton variant="outline">Open Popover</AniccaButton>
</AniccaPopover>`}
      />

      <SectionHeader id="placements">Placement options</SectionHeader>
      <ComponentDemo
        title="Different placements"
        description="Popover can be positioned on any side of the trigger."
        preview={
          <div className="flex flex-wrap gap-4">
            {(['top', 'right', 'bottom', 'left'] as const).map((p) => (
              <AniccaPopover
                key={p}
                content={<div className="p-2 text-sm text-text">{p} popover</div>}
                placement={p}
                trigger="click"
              >
                <AniccaButton variant="outline">{p}</AniccaButton>
              </AniccaPopover>
            ))}
          </div>
        }
        code={`<AniccaPopover content={<div className="p-2 text-sm">top popover</div>} placement="top" trigger="click">
  <AniccaButton>top</AniccaButton>
</AniccaPopover>

<AniccaPopover content={<div className="p-2 text-sm">right popover</div>} placement="right" trigger="click">
  <AniccaButton>right</AniccaButton>
</AniccaPopover>

<AniccaPopover content={<div className="p-2 text-sm">bottom popover</div>} placement="bottom" trigger="click">
  <AniccaButton>bottom</AniccaButton>
</AniccaPopover>

<AniccaPopover content={<div className="p-2 text-sm">left popover</div>} placement="left" trigger="click">
  <AniccaButton>left</AniccaButton>
</AniccaPopover>`}
      />

      <SectionHeader id="hover">Hover trigger</SectionHeader>
      <ComponentDemo
        title="Hover trigger"
        description="Set trigger='hover' to open the popover on mouse enter."
        preview={
          <AniccaPopover
            content={<div className="p-2 text-sm text-text">Opened on hover!</div>}
            placement="top"
            trigger="hover"
          >
            <AniccaButton variant="ghost">Hover over me</AniccaButton>
          </AniccaPopover>
        }
        code={`<AniccaPopover
  content={<div className="p-2 text-sm">Opened on hover!</div>}
  placement="top"
  trigger="hover"
>
  <AniccaButton variant="ghost">Hover over me</AniccaButton>
</AniccaPopover>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'content',
            type: 'ReactNode',
            required: true,
            description: 'Content rendered inside the popover panel.',
          },
          {
            name: 'placement',
            type: "'top' | 'right' | 'bottom' | 'left'",
            default: "'bottom'",
            description: 'Preferred placement of the panel relative to the trigger.',
          },
          {
            name: 'trigger',
            type: "'click' | 'hover'",
            default: "'click'",
            description: "Interaction that opens the popover, 'click' toggles, 'hover' shows on mouse enter.",
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'When true, the popover will not open.',
          },
          {
            name: 'open',
            type: 'boolean',
            description: 'Controlled open state. Pair with onOpenChange for full control.',
          },
          {
            name: 'onOpenChange',
            type: '(open: boolean) => void',
            description: 'Called when the open state changes (controlled mode).',
          },
        ]}
      />
    </DocPage>
  )
}
