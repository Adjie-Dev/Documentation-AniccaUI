import React, { useState } from 'react'
import {
  AniccaDropdown,
  AniccaMenu,
  AniccaMenuItem,
  AniccaMenuDivider,
  AniccaMenuLabel,
  AniccaButton,
} from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function BasicDemo() {
  return (
    <AniccaDropdown
      content={
        <AniccaMenu>
          <AniccaMenuItem onClick={() => {}}>Edit</AniccaMenuItem>
          <AniccaMenuItem onClick={() => {}}>Duplicate</AniccaMenuItem>
          <AniccaMenuItem onClick={() => {}}>Export</AniccaMenuItem>
          <AniccaMenuDivider />
          <AniccaMenuItem destructive onClick={() => {}}>Delete</AniccaMenuItem>
        </AniccaMenu>
      }
    >
      <AniccaButton>Options</AniccaButton>
    </AniccaDropdown>
  )
}

function PlacementDemo() {
  const placements = ['bottom-start', 'bottom-end', 'top-start', 'top-end'] as const
  return (
    <div className="flex flex-wrap gap-3">
      {placements.map((p) => (
        <AniccaDropdown
          key={p}
          placement={p}
          content={
            <AniccaMenu>
              <AniccaMenuItem onClick={() => {}}>Item A</AniccaMenuItem>
              <AniccaMenuItem onClick={() => {}}>Item B</AniccaMenuItem>
              <AniccaMenuItem onClick={() => {}}>Item C</AniccaMenuItem>
            </AniccaMenu>
          }
        >
          <AniccaButton variant="outline" size="sm">{p}</AniccaButton>
        </AniccaDropdown>
      ))}
    </div>
  )
}

function MatchWidthDemo() {
  return (
    <div className="w-64">
      <AniccaDropdown
        matchTriggerWidth
        content={
          <AniccaMenu>
            <AniccaMenuItem onClick={() => {}}>Profile settings</AniccaMenuItem>
            <AniccaMenuItem onClick={() => {}}>Billing</AniccaMenuItem>
            <AniccaMenuDivider />
            <AniccaMenuItem destructive onClick={() => {}}>Sign out</AniccaMenuItem>
          </AniccaMenu>
        }
      >
        <AniccaButton variant="outline" className="w-full">Account menu (full width)</AniccaButton>
      </AniccaDropdown>
    </div>
  )
}

function ControlledDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-wrap items-center gap-3">
      <AniccaButton size="sm" variant="outline" onClick={() => setOpen(true)}>Open externally</AniccaButton>
      <AniccaButton size="sm" variant="outline" onClick={() => setOpen(false)}>Close externally</AniccaButton>
      <AniccaDropdown
        open={open}
        onOpenChange={setOpen}
        content={
          <AniccaMenu>
            <AniccaMenuItem onClick={() => setOpen(false)}>Action one</AniccaMenuItem>
            <AniccaMenuItem onClick={() => setOpen(false)}>Action two</AniccaMenuItem>
          </AniccaMenu>
        }
      >
        <AniccaButton>Controlled trigger</AniccaButton>
      </AniccaDropdown>
    </div>
  )
}

export default function DropdownPage() {
  return (
    <DocPage
      title="Dropdown"
      description="A click-toggle panel anchored to any trigger element. Pair with AniccaMenu and AniccaMenuItem for a styled menu list, or provide any custom content."
      badge="Overlay"
      importLine="import { AniccaDropdown, AniccaMenu, AniccaMenuItem, AniccaMenuDivider, AniccaMenuLabel } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic with menu</SectionHeader>
      <ComponentDemo
        title="Options menu"
        description="Click the trigger button to open a dropdown panel containing a menu. Click outside or press Escape to close."
        preview={<BasicDemo />}
        code={`<AniccaDropdown
  content={
    <AniccaMenu>
      <AniccaMenuItem onClick={() => {}}>Edit</AniccaMenuItem>
      <AniccaMenuItem onClick={() => {}}>Duplicate</AniccaMenuItem>
      <AniccaMenuItem onClick={() => {}}>Export</AniccaMenuItem>
      <AniccaMenuDivider />
      <AniccaMenuItem destructive onClick={() => {}}>Delete</AniccaMenuItem>
    </AniccaMenu>
  }
>
  <AniccaButton>Options</AniccaButton>
</AniccaDropdown>`}
      />

      <SectionHeader id="placement">Placement</SectionHeader>
      <ComponentDemo
        title="Alignment variants"
        description="Control which corner of the trigger element the dropdown panel aligns to using the placement prop."
        preview={<PlacementDemo />}
        code={`<AniccaDropdown placement="bottom-start" content={<AniccaMenu>...</AniccaMenu>}>
  <AniccaButton variant="outline" size="sm">bottom-start</AniccaButton>
</AniccaDropdown>

<AniccaDropdown placement="bottom-end" content={<AniccaMenu>...</AniccaMenu>}>
  <AniccaButton variant="outline" size="sm">bottom-end</AniccaButton>
</AniccaDropdown>

<AniccaDropdown placement="top-start" content={<AniccaMenu>...</AniccaMenu>}>
  <AniccaButton variant="outline" size="sm">top-start</AniccaButton>
</AniccaDropdown>

<AniccaDropdown placement="top-end" content={<AniccaMenu>...</AniccaMenu>}>
  <AniccaButton variant="outline" size="sm">top-end</AniccaButton>
</AniccaDropdown>`}
      />

      <SectionHeader id="match-width">Match trigger width</SectionHeader>
      <ComponentDemo
        title="Full-width panel"
        description="Set matchTriggerWidth to make the dropdown panel stretch to the same width as the trigger element."
        preview={<MatchWidthDemo />}
        code={`<div className="w-64">
  <AniccaDropdown
    matchTriggerWidth
    content={
      <AniccaMenu>
        <AniccaMenuItem onClick={() => {}}>Profile settings</AniccaMenuItem>
        <AniccaMenuItem onClick={() => {}}>Billing</AniccaMenuItem>
        <AniccaMenuDivider />
        <AniccaMenuItem destructive onClick={() => {}}>Sign out</AniccaMenuItem>
      </AniccaMenu>
    }
  >
    <AniccaButton variant="outline" className="w-full">Account menu (full width)</AniccaButton>
  </AniccaDropdown>
</div>`}
      />

      <SectionHeader id="controlled">Controlled</SectionHeader>
      <ComponentDemo
        title="Controlled open state"
        description="Manage open state externally via the open and onOpenChange props. Useful when you need to open or close the dropdown from outside the trigger."
        preview={<ControlledDemo />}
        code={`const [open, setOpen] = useState(false)

<AniccaButton onClick={() => setOpen(true)}>Open externally</AniccaButton>
<AniccaButton onClick={() => setOpen(false)}>Close externally</AniccaButton>

<AniccaDropdown
  open={open}
  onOpenChange={setOpen}
  content={
    <AniccaMenu>
      <AniccaMenuItem onClick={() => setOpen(false)}>Action one</AniccaMenuItem>
      <AniccaMenuItem onClick={() => setOpen(false)}>Action two</AniccaMenuItem>
    </AniccaMenu>
  }
>
  <AniccaButton>Controlled trigger</AniccaButton>
</AniccaDropdown>`}
      />

      <SectionHeader id="menu-components">Menu Components</SectionHeader>
      <p className="text-sm text-text-muted mb-4">
        These components are designed to be used as the content of AniccaDropdown. They can also be composed independently.
      </p>
      <PropsTable
        props={[
          {
            name: 'onClick',
            type: '() => void',
            description: 'Handler called when the item is clicked.',
          },
          {
            name: 'destructive',
            type: 'boolean',
            default: 'false',
            description: 'Renders the item in a danger/red color to indicate a destructive action.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Prevents interaction and dims the item.',
          },
          {
            name: 'children',
            type: 'ReactNode',
            required: true,
            description: 'Label content for the menu item.',
          },
        ]}
      />

      <SectionHeader id="props">AniccaDropdown props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'children',
            type: 'ReactElement',
            required: true,
            description: 'Clickable trigger element that toggles the dropdown open/closed.',
          },
          {
            name: 'content',
            type: 'ReactNode',
            required: true,
            description: 'Content rendered inside the dropdown panel. Use AniccaMenu for styled items.',
          },
          {
            name: 'placement',
            type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'",
            default: "'bottom-start'",
            description: 'Which corner of the trigger the panel aligns to.',
          },
          {
            name: 'open',
            type: 'boolean',
            description: 'Controlled open state. Pair with onOpenChange.',
          },
          {
            name: 'onOpenChange',
            type: '(open: boolean) => void',
            description: 'Called when the open state changes.',
          },
          {
            name: 'matchTriggerWidth',
            type: 'boolean',
            default: 'false',
            description: 'When true, the panel stretches to match the trigger width.',
          },
        ]}
      />
    </DocPage>
  )
}
