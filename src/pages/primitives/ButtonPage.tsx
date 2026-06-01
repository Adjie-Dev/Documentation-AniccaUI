import React from 'react'
import { AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
)

export default function ButtonPage() {
  return (
    <DocPage
      title="Button"
      description="Interactive button with 6 variants, 4 sizes, loading state, and icon slots."
      badge="Primitive"
      importLine="{ AniccaButton } from 'anicca-ui'"
    >

      {/* ── Variants ── */}
      <SectionHeader id="variants">Variants</SectionHeader>
      <ComponentDemo
        title="All variants"
        description="Use variant to set the visual style."
        preview={
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <AniccaButton variant="primary">Primary</AniccaButton>
            <AniccaButton variant="secondary">Secondary</AniccaButton>
            <AniccaButton variant="ghost">Ghost</AniccaButton>
            <AniccaButton variant="outline">Outline</AniccaButton>
            <AniccaButton variant="danger">Danger</AniccaButton>
            <AniccaButton variant="link">Link</AniccaButton>
          </div>
        }
        code={`<AniccaButton variant="primary">Primary</AniccaButton>
<AniccaButton variant="secondary">Secondary</AniccaButton>
<AniccaButton variant="ghost">Ghost</AniccaButton>
<AniccaButton variant="outline">Outline</AniccaButton>
<AniccaButton variant="danger">Danger</AniccaButton>
<AniccaButton variant="link">Link</AniccaButton>`}
      />

      {/* ── Sizes ── */}
      <SectionHeader id="sizes">Sizes</SectionHeader>
      <ComponentDemo
        title="All sizes"
        description="sm, md (default), lg, and icon."
        preview={
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <AniccaButton size="sm">Small</AniccaButton>
            <AniccaButton size="md">Medium</AniccaButton>
            <AniccaButton size="lg">Large</AniccaButton>
            <AniccaButton size="icon" aria-label="Star">★</AniccaButton>
          </div>
        }
        code={`<AniccaButton size="sm">Small</AniccaButton>
<AniccaButton size="md">Medium</AniccaButton>
<AniccaButton size="lg">Large</AniccaButton>
<AniccaButton size="icon" aria-label="Star">★</AniccaButton>`}
      />

      {/* ── States ── */}
      <SectionHeader id="states">States</SectionHeader>
      <ComponentDemo
        title="Loading, disabled, full width"
        variants={[
          {
            label: 'Loading',
            preview: <AniccaButton loading>Saving…</AniccaButton>,
            code: `<AniccaButton loading>Saving…</AniccaButton>`,
          },
          {
            label: 'Disabled',
            preview: <AniccaButton disabled>Disabled</AniccaButton>,
            code: `<AniccaButton disabled>Disabled</AniccaButton>`,
          },
          {
            label: 'Full Width',
            preview: (
              <div className="w-64">
                <AniccaButton fullWidth>Full Width</AniccaButton>
              </div>
            ),
            code: `<AniccaButton fullWidth>Full Width</AniccaButton>`,
          },
        ]}
      />

      {/* ── Icons ── */}
      <SectionHeader id="icons">With Icons</SectionHeader>
      <ComponentDemo
        title="leftIcon and rightIcon"
        preview={
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <AniccaButton leftIcon={<ArrowLeft />} variant="outline">Back</AniccaButton>
            <AniccaButton rightIcon={<ArrowRight />}>Continue</AniccaButton>
            <AniccaButton leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />} variant="secondary">Both</AniccaButton>
          </div>
        }
        code={`const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

<AniccaButton leftIcon={<ArrowLeft />} variant="outline">Back</AniccaButton>
<AniccaButton rightIcon={<ArrowRight />}>Continue</AniccaButton>`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'variant',    type: "'primary' | 'secondary' | 'ghost' | 'outline' | 'danger' | 'link'", default: "'primary'",   description: 'Visual style of the button.' },
          { name: 'size',       type: "'sm' | 'md' | 'lg' | 'icon'",                                       default: "'md'",        description: 'Height and padding preset.' },
          { name: 'loading',    type: 'boolean',                                                            default: 'false',       description: 'Show loading spinner and disable interaction.' },
          { name: 'leftIcon',   type: 'ReactNode',                                                          description: 'Icon rendered before label.' },
          { name: 'rightIcon',  type: 'ReactNode',                                                          description: 'Icon rendered after label.' },
          { name: 'fullWidth',  type: 'boolean',                                                            default: 'false',       description: 'Stretch button to fill container width.' },
          { name: 'disabled',   type: 'boolean',                                                            default: 'false',       description: 'Disable the button.' },
        ]}
      />
    </DocPage>
  )
}
