import React from 'react'
import { AniccaCheckbox } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function CheckboxPage() {
  return (
    <DocPage
      title="Checkbox"
      description="Checkbox with label, description, indeterminate state, and full keyboard/focus support."
      badge="Primitive"
      importLine="{ AniccaCheckbox } from 'anicca-ui'"
    >

      {/* ── Basic ── */}
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        title="Unchecked and checked"
        preview={
          <div className="flex flex-col gap-4">
            <AniccaCheckbox label="Accept terms" />
            <AniccaCheckbox label="Subscribe to newsletter" defaultChecked />
          </div>
        }
        centered={false}
        code={`<AniccaCheckbox label="Accept terms" />
<AniccaCheckbox label="Subscribe to newsletter" defaultChecked />`}
      />

      {/* ── Indeterminate ── */}
      <SectionHeader id="indeterminate">Indeterminate</SectionHeader>
      <ComponentDemo
        title="Tri-state / select-all"
        description="Visual-only indeterminate state for parent checkboxes in tree selections."
        preview={
          <AniccaCheckbox label="Select all items" indeterminate />
        }
        centered={false}
        code={`<AniccaCheckbox label="Select all items" indeterminate />`}
      />

      {/* ── With description ── */}
      <SectionHeader id="description">With Label and Description</SectionHeader>
      <ComponentDemo
        title="Rich label"
        preview={
          <div className="flex flex-col gap-4">
            <AniccaCheckbox
              label="Marketing emails"
              description="Receive updates about new features and promotions."
              defaultChecked
            />
            <AniccaCheckbox
              label="Security alerts"
              description="Get notified about sign-ins from new devices."
            />
          </div>
        }
        centered={false}
        code={`<AniccaCheckbox
  label="Marketing emails"
  description="Receive updates about new features and promotions."
  defaultChecked
/>
<AniccaCheckbox
  label="Security alerts"
  description="Get notified about sign-ins from new devices."
/>`}
      />

      {/* ── Disabled ── */}
      <SectionHeader id="disabled">Disabled</SectionHeader>
      <ComponentDemo
        title="Disabled state"
        preview={
          <div className="flex flex-col gap-4">
            <AniccaCheckbox label="Disabled unchecked" disabled />
            <AniccaCheckbox label="Disabled checked" defaultChecked disabled />
          </div>
        }
        centered={false}
        code={`<AniccaCheckbox label="Disabled unchecked" disabled />
<AniccaCheckbox label="Disabled checked" defaultChecked disabled />`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'label',          type: 'ReactNode',     description: 'Label rendered beside the checkbox.' },
          { name: 'description',    type: 'string',     description: 'Helper text below the label.' },
          { name: 'error',          type: 'string',     description: 'Error message; replaces description with danger styling.' },
          { name: 'indeterminate',  type: 'boolean',   default: 'false', description: 'Visual-only indeterminate state for select-all patterns.' },
          { name: 'defaultChecked', type: 'boolean',   default: 'false', description: 'Uncontrolled initial checked state.' },
          { name: 'checked',        type: 'boolean',     description: 'Controlled checked state.' },
          { name: 'disabled',       type: 'boolean',   default: 'false', description: 'Disable the checkbox.' },
        ]}
      />
    </DocPage>
  )
}
