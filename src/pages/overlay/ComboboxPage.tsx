import React, { useState } from 'react'
import { AniccaCombobox } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

const countries = [
  { value: 'id', label: 'Indonesia' },
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'jp', label: 'Japan' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'au', label: 'Australia' },
  { value: 'sg', label: 'Singapore' },
]

function BasicDemo() {
  const [value, setValue] = useState('')
  return (
    <div className="w-72">
      <AniccaCombobox
        options={countries}
        value={value}
        onChange={setValue}
        placeholder="Search country..."
        label="Country"
      />
      {value && (
        <p className="mt-2 text-xs text-text-muted">
          Selected: <span className="font-semibold text-text">{value}</span>
        </p>
      )}
    </div>
  )
}

function DisabledDemo() {
  const [value, setValue] = useState('id')
  return (
    <div className="w-72">
      <AniccaCombobox
        options={countries}
        value={value}
        onChange={setValue}
        label="Country (disabled)"
        disabled
      />
    </div>
  )
}

export default function ComboboxPage() {
  return (
    <DocPage
      title="Combobox"
      description="A searchable select input with keyboard navigation. Filters options as the user types and supports both controlled and uncontrolled modes."
      badge="Overlay"
      importLine="import { AniccaCombobox } from 'anicca-ui'"
    >
      <SectionHeader id="searchable">Searchable combobox</SectionHeader>
      <ComponentDemo
        title="Country picker"
        description="Type to filter the 8 country options. Use arrow keys to navigate, Enter to select."
        preview={<BasicDemo />}
        code={`const [value, setValue] = useState('')

const countries = [
  { value: 'id', label: 'Indonesia' },
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'jp', label: 'Japan' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'au', label: 'Australia' },
  { value: 'sg', label: 'Singapore' },
]

<AniccaCombobox
  options={countries}
  value={value}
  onChange={setValue}
  placeholder="Search country..."
  label="Country"
/>`}
      />

      <SectionHeader id="disabled">Disabled state</SectionHeader>
      <ComponentDemo
        title="Disabled combobox"
        description="Set disabled to prevent interaction."
        preview={<DisabledDemo />}
        code={`<AniccaCombobox
  options={countries}
  value="id"
  onChange={() => {}}
  label="Country (disabled)"
  disabled
/>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'options',
            type: 'AniccaComboboxOption[]',
            required: true,
            description: 'Array of { value, label, description?, disabled? } objects.',
          },
          {
            name: 'value',
            type: 'string',
            description: 'Controlled selected value.',
          },
          {
            name: 'onChange',
            type: '(value: string) => void',
            description: 'Called when the user selects an option.',
          },
          {
            name: 'placeholder',
            type: 'string',
            default: "'Type to search...'",
            description: 'Placeholder text shown in the input.',
          },
          {
            name: 'searchable',
            type: 'boolean',
            default: 'true',
            description: 'Whether typing filters the option list.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disables the input and prevents interaction.',
          },
        ]}
      />
    </DocPage>
  )
}
