import React from 'react'
import { AniccaDivider } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function DividerPage() {
  return (
    <DocPage
      title="Divider"
      description="A thin rule used to visually separate sections of content. Supports solid and dashed variants, horizontal and vertical orientations, and configurable margins."
      badge="Layout"
      importLine="{ AniccaDivider } from 'anicca-ui'"
    >
      <SectionHeader id="horizontal">Horizontal</SectionHeader>
      <ComponentDemo
        title="Horizontal Divider"
        description="Default orientation, spans the full width of its container."
        centered={false}
        preview={
          <div className="w-full space-y-3">
            <p className="text-sm text-text-muted">Section above</p>
            <AniccaDivider />
            <p className="text-sm text-text-muted">Section below</p>
          </div>
        }
        code={`<p>Section above</p>
<AniccaDivider />
<p>Section below</p>`}
      />

      <SectionHeader id="dashed">Dashed Variant</SectionHeader>
      <ComponentDemo
        title="Dashed Divider"
        description='Use variant="dashed" for a lighter, more subtle separation.'
        centered={false}
        preview={
          <div className="w-full space-y-3">
            <p className="text-sm text-text-muted">Section above</p>
            <AniccaDivider variant="dashed" />
            <p className="text-sm text-text-muted">Section below</p>
          </div>
        }
        code={`<p>Section above</p>
<AniccaDivider variant="dashed" />
<p>Section below</p>`}
      />

      <SectionHeader id="vertical">Vertical Orientation</SectionHeader>
      <ComponentDemo
        title="Vertical Divider"
        description='Use orientation="vertical" inside a flex row to separate inline elements.'
        preview={
          <div className="flex items-center gap-4 h-10">
            <span className="text-sm text-text-muted">Left</span>
            <AniccaDivider orientation="vertical" />
            <span className="text-sm text-text-muted">Center</span>
            <AniccaDivider orientation="vertical" />
            <span className="text-sm text-text-muted">Right</span>
          </div>
        }
        code={`<div className="flex items-center gap-4 h-10">
  <span>Left</span>
  <AniccaDivider orientation="vertical" />
  <span>Center</span>
  <AniccaDivider orientation="vertical" />
  <span>Right</span>
</div>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'variant',
            type: '"solid" | "dashed"',
            default: '"solid"',
            description: 'Line style of the divider.',
          },
          {
            name: 'orientation',
            type: '"horizontal" | "vertical"',
            default: '"horizontal"',
            description: 'Axis along which the divider runs.',
          },
          {
            name: 'margin',
            type: 'string | number',
            description: 'Margin applied along the perpendicular axis (top/bottom for horizontal, left/right for vertical).',
          },
        ]}
      />
    </DocPage>
  )
}
