import React from 'react'
import { AniccaSkeleton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function SkeletonPage() {
  return (
    <DocPage
      title="Skeleton"
      description="Placeholder loading shapes that mimic the structure of incoming content, reducing perceived latency while data loads."
      badge="Feedback"
      importLine="{ AniccaSkeleton } from 'anicca-ui'"
    >
      <SectionHeader id="text">Text Variant</SectionHeader>
      <ComponentDemo
        title="Text Lines"
        description="Renders multiple stacked lines, ideal for paragraph or list placeholders."
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaSkeleton variant="text" lines={3} />
          </div>
        }
        code={`<AniccaSkeleton variant="text" lines={3} />`}
      />

      <SectionHeader id="circle">Circle Variant</SectionHeader>
      <ComponentDemo
        title="Circle"
        description="Circular skeleton for avatar or icon placeholders."
        preview={<AniccaSkeleton variant="circle" width={48} height={48} />}
        code={`<AniccaSkeleton variant="circle" width={48} height={48} />`}
      />

      <SectionHeader id="rect">Rect Variant</SectionHeader>
      <ComponentDemo
        title="Rectangle"
        description="Rectangular skeleton for image, card, or banner placeholders."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaSkeleton variant="rect" width="100%" height={120} />
          </div>
        }
        code={`<AniccaSkeleton variant="rect" width="100%" height={120} />`}
      />

      <SectionHeader id="composite">Card Composite</SectionHeader>
      <ComponentDemo
        title="Card Skeleton"
        description="Compose multiple skeleton shapes to match complex card layouts."
        centered={false}
        preview={
          <div className="flex gap-4 items-start w-full max-w-sm p-4 rounded-xl border border-outline-variant/30">
            <AniccaSkeleton variant="circle" width={48} height={48} />
            <div className="flex-1">
              <AniccaSkeleton variant="text" lines={3} />
            </div>
          </div>
        }
        code={`<div className="flex gap-4 items-start">
  <AniccaSkeleton variant="circle" width={48} height={48} />
  <div className="flex-1">
    <AniccaSkeleton variant="text" lines={3} />
  </div>
</div>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'variant',
            type: '"text" | "circle" | "rect"',
            default: '"rect"',
            description: 'Shape of the skeleton placeholder.',
          },
          {
            name: 'width',
            type: 'number | string',
            description: 'Width of the skeleton. Accepts px numbers or CSS strings like "100%".',
          },
          {
            name: 'height',
            type: 'number | string',
            description: 'Height of the skeleton. Accepts px numbers or CSS strings.',
          },
          {
            name: 'lines',
            type: 'number',
            default: '3',
            description: 'Number of text lines to render. Only applies to the "text" variant.',
          },
          {
            name: 'static',
            type: 'boolean',
            default: 'false',
            description: 'When true, disables the shimmer animation.',
          },
        ]}
      />
    </DocPage>
  )
}
