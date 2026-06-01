import React from 'react'
import { AniccaSelect } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

const FRAMEWORK_OPTIONS = [
  { value: 'react',   label: 'React' },
  { value: 'vue',     label: 'Vue' },
  { value: 'angular', label: 'Angular' },
]

export default function SelectPage() {
  return (
    <DocPage
      title="Select"
      description="Native select element with label, helper/error, custom caret, and full accessibility."
      badge="Primitive"
      importLine="{ AniccaSelect } from 'anicca-ui'"
    >

      {/* ── Basic ── */}
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        title="With label and options"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaSelect
              label="Framework"
              options={FRAMEWORK_OPTIONS}
              defaultValue="react"
            />
          </div>
        }
        code={`const options = [
  { value: 'react',   label: 'React' },
  { value: 'vue',     label: 'Vue' },
  { value: 'angular', label: 'Angular' },
]

<AniccaSelect label="Framework" options={options} defaultValue="react" />`}
      />

      {/* ── Placeholder ── */}
      <SectionHeader id="placeholder">With Placeholder</SectionHeader>
      <ComponentDemo
        title="Empty default + placeholder"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaSelect
              label="Choose framework"
              options={FRAMEWORK_OPTIONS}
              placeholder="Select a framework…"
            />
          </div>
        }
        code={`<AniccaSelect
  label="Choose framework"
  options={options}
  placeholder="Select a framework…"
/>`}
      />

      {/* ── Error ── */}
      <SectionHeader id="error">Error State</SectionHeader>
      <ComponentDemo
        title="With error"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaSelect
              label="Framework"
              options={FRAMEWORK_OPTIONS}
              placeholder="Select a framework…"
              required
              error="Please select a framework to continue."
            />
          </div>
        }
        code={`<AniccaSelect
  label="Framework"
  options={options}
  placeholder="Select a framework…"
  required
  error="Please select a framework to continue."
/>`}
      />

      {/* ── Disabled ── */}
      <SectionHeader id="disabled">Disabled</SectionHeader>
      <ComponentDemo
        title="Disabled state"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaSelect
              label="Framework (locked)"
              options={FRAMEWORK_OPTIONS}
              defaultValue="react"
              disabled
            />
          </div>
        }
        code={`<AniccaSelect
  label="Framework (locked)"
  options={options}
  defaultValue="react"
  disabled
/>`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'label',       type: 'string',     description: 'Label rendered above the select.' },
          { name: 'helper',      type: 'string',     description: 'Helper text shown below.' },
          { name: 'error',       type: 'string',     description: 'Error message; replaces helper and applies error styling.' },
          { name: 'options',     type: 'AniccaSelectOption[]',     description: 'Array of { value, label, disabled? } option objects.' },
          { name: 'placeholder', type: 'string',     description: 'Shown when no value is selected (disabled hidden option).' },
          { name: 'selectSize',  type: "'sm' | 'md' | 'lg'",                                                  default: "'md'",  description: 'Height and font size preset.' },
          { name: 'required',    type: 'boolean',                                                             default: 'false', description: 'Required indicator and aria attribute.' },
          { name: 'disabled',    type: 'boolean',                                                             default: 'false', description: 'Disable the select.' },
        ]}
      />
    </DocPage>
  )
}
