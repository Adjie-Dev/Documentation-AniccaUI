import React from 'react'
import { AniccaSpinner } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function SpinnerPage() {
  return (
    <DocPage
      title="Spinner"
      description="An animated loading indicator used to communicate that an operation is in progress. Supports multiple sizes, custom colors, and accessible labels."
      badge="Feedback"
      importLine="{ AniccaSpinner } from 'anicca-ui'"
    >
      <SectionHeader id="sizes">Sizes</SectionHeader>
      <ComponentDemo
        title="Size Scale"
        description="Five sizes to match different UI contexts, from inline text indicators to full-page loaders."
        preview={
          <div className="flex items-center gap-6">
            <AniccaSpinner size="xs" />
            <AniccaSpinner size="sm" />
            <AniccaSpinner size="md" />
            <AniccaSpinner size="lg" />
            <AniccaSpinner size="xl" />
          </div>
        }
        code={`<AniccaSpinner size="xs" />
<AniccaSpinner size="sm" />
<AniccaSpinner size="md" />
<AniccaSpinner size="lg" />
<AniccaSpinner size="xl" />`}
      />

      <SectionHeader id="custom-color">Custom Color</SectionHeader>
      <ComponentDemo
        title="Custom Color"
        description="Pass any CSS color value via the color prop to match your brand or context."
        preview={
          <AniccaSpinner size="lg" color="rgb(var(--tertiary))" />
        }
        code={`<AniccaSpinner size="lg" color="rgb(var(--tertiary))" />`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'size',
            type: '"xs" | "sm" | "md" | "lg" | "xl"',
            default: '"md"',
            description: 'Controls the diameter of the spinner.',
          },
          {
            name: 'color',
            type: 'string',
            description: 'CSS color value applied to the spinning arc. Defaults to the current primary color.',
          },
          {
            name: 'thickness',
            type: 'number',
            description: 'Stroke width of the spinner ring in pixels.',
          },
          {
            name: 'label',
            type: 'string',
            default: '"Loading"',
            description: 'Accessible aria-label for screen readers.',
          },
        ]}
      />
    </DocPage>
  )
}
