import React, { useState } from 'react'
import { AniccaSwitch } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function ControlledSwitchDemo() {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="flex flex-col gap-3">
      <AniccaSwitch
        label={enabled ? 'Dark mode on' : 'Dark mode off'}
        description="Toggle between light and dark theme."
        checked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />
      <p className="text-[0.8rem] text-text-muted">
        State: <code className="text-primary font-mono">{enabled ? 'true' : 'false'}</code>
      </p>
    </div>
  )
}

export default function SwitchPage() {
  return (
    <DocPage
      title="Switch"
      description="Toggle switch with smooth thumb animation, three size options, and label/description slots."
      badge="Primitive"
      importLine="{ AniccaSwitch } from 'anicca-ui'"
    >

      {/* ── Controlled ── */}
      <SectionHeader id="controlled">Controlled</SectionHeader>
      <ComponentDemo
        title="Controlled toggle"
        description="Use checked + onChange to control the switch state."
        centered={false}
        preview={<ControlledSwitchDemo />}
        code={`function App() {
  const [enabled, setEnabled] = useState(false)
  return (
    <AniccaSwitch
      label={enabled ? 'Dark mode on' : 'Dark mode off'}
      description="Toggle between light and dark theme."
      checked={enabled}
      onChange={(e) => setEnabled(e.target.checked)}
    />
  )
}`}
      />

      {/* ── Sizes ── */}
      <SectionHeader id="sizes">Sizes</SectionHeader>
      <ComponentDemo
        title="sm, md, lg"
        preview={
          <div className="flex flex-col gap-5">
            <AniccaSwitch switchSize="sm" label="Small" defaultChecked />
            <AniccaSwitch switchSize="md" label="Medium (default)" defaultChecked />
            <AniccaSwitch switchSize="lg" label="Large" defaultChecked />
          </div>
        }
        centered={false}
        code={`<AniccaSwitch switchSize="sm" label="Small" defaultChecked />
<AniccaSwitch switchSize="md" label="Medium" defaultChecked />
<AniccaSwitch switchSize="lg" label="Large" defaultChecked />`}
      />

      {/* ── With description ── */}
      <SectionHeader id="description">With Description</SectionHeader>
      <ComponentDemo
        title="Label and description"
        centered={false}
        preview={
          <div className="flex flex-col gap-4">
            <AniccaSwitch
              label="Email notifications"
              description="Receive a daily digest of your activity."
              defaultChecked
            />
            <AniccaSwitch
              label="Push notifications"
              description="Get real-time alerts on your device."
            />
          </div>
        }
        code={`<AniccaSwitch
  label="Email notifications"
  description="Receive a daily digest of your activity."
  defaultChecked
/>
<AniccaSwitch
  label="Push notifications"
  description="Get real-time alerts on your device."
/>`}
      />

      {/* ── Disabled ── */}
      <SectionHeader id="disabled">Disabled</SectionHeader>
      <ComponentDemo
        title="Disabled state"
        preview={
          <div className="flex flex-col gap-4">
            <AniccaSwitch label="Disabled off" disabled />
            <AniccaSwitch label="Disabled on" defaultChecked disabled />
          </div>
        }
        centered={false}
        code={`<AniccaSwitch label="Disabled off" disabled />
<AniccaSwitch label="Disabled on" defaultChecked disabled />`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'label',         type: 'ReactNode',       description: 'Label rendered beside the switch.' },
          { name: 'description',   type: 'string',       description: 'Helper text below the label.' },
          { name: 'switchSize',    type: "'sm' | 'md' | 'lg'",           default: "'md'",    description: 'Track and thumb size preset.' },
          { name: 'labelPosition', type: "'left' | 'right'",             default: "'right'", description: 'Position of label relative to switch.' },
          { name: 'checked',       type: 'boolean',       description: 'Controlled checked state.' },
          { name: 'defaultChecked',type: 'boolean',                      default: 'false',   description: 'Uncontrolled initial state.' },
          { name: 'onChange',      type: 'ChangeEventHandler<HTMLInputElement>', description: 'Called when toggle state changes.' },
          { name: 'disabled',      type: 'boolean',                      default: 'false',   description: 'Disable the switch.' },
        ]}
      />
    </DocPage>
  )
}
