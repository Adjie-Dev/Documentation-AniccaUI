import React, { useState } from 'react'
import { AniccaRadioGroup, AniccaRadio } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function ControlledRadioDemo() {
  const [value, setValue] = useState('react')
  return (
    <div className="flex flex-col gap-4">
      <AniccaRadioGroup
        name="framework-demo"
        label="Preferred framework"
        value={value}
        onChange={setValue}
      >
        <AniccaRadio value="react" label="React" description="A library for building UIs" />
        <AniccaRadio value="vue" label="Vue" description="The progressive framework" />
        <AniccaRadio value="angular" label="Angular" description="Platform for web apps" />
      </AniccaRadioGroup>
      <p className="text-[0.8rem] text-text-muted mt-1">
        Selected: <code className="text-primary font-mono">{value}</code>
      </p>
    </div>
  )
}

function HorizontalRadioDemo() {
  const [value, setValue] = useState('monthly')
  return (
    <AniccaRadioGroup
      name="billing-demo"
      label="Billing period"
      value={value}
      onChange={setValue}
      orientation="horizontal"
    >
      <AniccaRadio value="monthly" label="Monthly" />
      <AniccaRadio value="yearly" label="Yearly" />
      <AniccaRadio value="lifetime" label="Lifetime" />
    </AniccaRadioGroup>
  )
}

export default function RadioPage() {
  return (
    <DocPage
      title="Radio"
      description="Radio group for single-choice selection. AniccaRadioGroup manages state; AniccaRadio renders each option."
      badge="Primitive"
      importLine="{ AniccaRadioGroup, AniccaRadio } from 'anicca-ui'"
    >

      {/* ── Controlled group ── */}
      <SectionHeader id="controlled">Controlled Group</SectionHeader>
      <ComponentDemo
        title="Controlled radio group"
        description="Use AniccaRadioGroup with value + onChange for controlled selection."
        centered={false}
        preview={<ControlledRadioDemo />}
        code={`function App() {
  const [value, setValue] = useState('react')
  return (
    <AniccaRadioGroup
      name="framework"
      label="Preferred framework"
      value={value}
      onChange={setValue}
    >
      <AniccaRadio value="react" label="React" description="A library for building UIs" />
      <AniccaRadio value="vue"   label="Vue"   description="The progressive framework" />
      <AniccaRadio value="angular" label="Angular" description="Platform for web apps" />
    </AniccaRadioGroup>
  )
}`}
      />

      {/* ── Horizontal ── */}
      <SectionHeader id="horizontal">Horizontal Orientation</SectionHeader>
      <ComponentDemo
        title="Horizontal layout"
        centered={false}
        preview={<HorizontalRadioDemo />}
        code={`<AniccaRadioGroup
  name="billing"
  label="Billing period"
  value={value}
  onChange={setValue}
  orientation="horizontal"
>
  <AniccaRadio value="monthly"  label="Monthly" />
  <AniccaRadio value="yearly"   label="Yearly" />
  <AniccaRadio value="lifetime" label="Lifetime" />
</AniccaRadioGroup>`}
      />

      {/* ── Props, RadioGroup ── */}
      <SectionHeader id="props-group">AniccaRadioGroup Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'name',         type: 'string',                         required: true,          description: 'HTML name attribute shared by all radio inputs.' },
          { name: 'value',        type: 'string',          description: 'Controlled selected value.' },
          { name: 'defaultValue', type: 'string',          description: 'Uncontrolled initial value.' },
          { name: 'onChange',     type: '(value: string) => void',          description: 'Called when selection changes.' },
          { name: 'orientation',  type: "'vertical' | 'horizontal'",      default: "'vertical'", description: 'Layout direction of radio items.' },
          { name: 'label',        type: 'string',          description: 'Group label rendered above the options.' },
          { name: 'error',        type: 'string',          description: 'Error message below the group.' },
          { name: 'disabled',     type: 'boolean',                        default: 'false',      description: 'Disable all radios in the group.' },
        ]}
      />

      {/* ── Props, Radio ── */}
      <SectionHeader id="props-radio">AniccaRadio Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'value',       type: 'string',    required: true, description: 'Value this radio represents.' },
          { name: 'label',       type: 'ReactNode',                 description: 'Option label.' },
          { name: 'description', type: 'string',                 description: 'Helper text below label.' },
          { name: 'disabled',    type: 'boolean',   default: 'false',             description: 'Disable this individual radio.' },
        ]}
      />
    </DocPage>
  )
}
