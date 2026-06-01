import React from 'react'
import { AniccaInput } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export default function InputPage() {
  return (
    <DocPage
      title="Input"
      description="Text input with label, helper/error states, inline addons, and three size options."
      badge="Primitive"
      importLine="{ AniccaInput } from 'anicca-ui'"
    >

      {/* ── Basic ── */}
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        title="With label"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaInput label="Email address" placeholder="you@example.com" />
          </div>
        }
        code={`<AniccaInput label="Email address" placeholder="you@example.com" />`}
      />

      {/* ── Helper text ── */}
      <SectionHeader id="helper">Helper Text</SectionHeader>
      <ComponentDemo
        title="With helper"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaInput
              label="Username"
              placeholder="johndoe"
              helper="Your username must be 3–20 characters."
            />
          </div>
        }
        code={`<AniccaInput
  label="Username"
  placeholder="johndoe"
  helper="Your username must be 3–20 characters."
/>`}
      />

      {/* ── Error state ── */}
      <SectionHeader id="error">Error State</SectionHeader>
      <ComponentDemo
        title="With error"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaInput
              label="Password"
              type="password"
              value="abc"
              required
              error="Password must be at least 8 characters."
              onChange={() => {}}
            />
          </div>
        }
        code={`<AniccaInput
  label="Password"
  type="password"
  required
  error="Password must be at least 8 characters."
/>`}
      />

      {/* ── Addons ── */}
      <SectionHeader id="addons">Addons</SectionHeader>
      <ComponentDemo
        title="Left and right addons"
        description="Use leftAddon and rightAddon for inline icons or text."
        centered={false}
        preview={
          <div className="w-full max-w-sm space-y-4">
            <AniccaInput
              label="Search"
              placeholder="Search components…"
              leftAddon={<SearchIcon />}
            />
            <AniccaInput
              label="Width"
              placeholder="100"
              type="number"
              rightAddon={<span className="text-[0.78rem] font-medium text-text-muted">px</span>}
            />
          </div>
        }
        code={`const SearchIcon = () => (
  <svg width="14" height="14" ...><circle cx="11" cy="11" r="8" />...</svg>
)

<AniccaInput
  label="Search"
  placeholder="Search components…"
  leftAddon={<SearchIcon />}
/>

<AniccaInput
  label="Width"
  placeholder="100"
  type="number"
  rightAddon={<span>px</span>}
/>`}
      />

      {/* ── Sizes ── */}
      <SectionHeader id="sizes">Sizes</SectionHeader>
      <ComponentDemo
        title="sm, md, lg"
        centered={false}
        preview={
          <div className="w-full max-w-sm space-y-4">
            <AniccaInput inputSize="sm" placeholder="Small input" label="Small" />
            <AniccaInput inputSize="md" placeholder="Medium input" label="Medium (default)" />
            <AniccaInput inputSize="lg" placeholder="Large input" label="Large" />
          </div>
        }
        code={`<AniccaInput inputSize="sm" label="Small" placeholder="Small input" />
<AniccaInput inputSize="md" label="Medium" placeholder="Medium input" />
<AniccaInput inputSize="lg" label="Large" placeholder="Large input" />`}
      />

      {/* ── Disabled ── */}
      <SectionHeader id="disabled">Disabled</SectionHeader>
      <ComponentDemo
        title="Disabled state"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaInput
              label="Read-only field"
              value="Cannot edit this"
              disabled
              onChange={() => {}}
            />
          </div>
        }
        code={`<AniccaInput label="Read-only field" value="Cannot edit this" disabled />`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'label',       type: 'string',     description: 'Label rendered above the input.' },
          { name: 'helper',      type: 'string',     description: 'Helper text shown below input.' },
          { name: 'error',       type: 'string',     description: 'Error message; replaces helper and applies error styling.' },
          { name: 'required',    type: 'boolean',                      default: 'false', description: 'Adds required indicator and aria attribute.' },
          { name: 'leftAddon',   type: 'ReactNode',     description: 'Element inside the input on the leading side.' },
          { name: 'rightAddon',  type: 'ReactNode',     description: 'Element inside the input on the trailing side.' },
          { name: 'inputSize',   type: "'sm' | 'md' | 'lg'",           default: "'md'",  description: 'Height and font size preset.' },
          { name: 'placeholder', type: 'string',     description: 'Native placeholder text.' },
        ]}
      />
    </DocPage>
  )
}
