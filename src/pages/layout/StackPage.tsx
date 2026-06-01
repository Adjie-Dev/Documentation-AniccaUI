import React from 'react'
import { AniccaStack } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

const Box = ({ n, color = 'primary' }: { n: number; color?: string }) => (
  <div
    className={`w-16 h-16 rounded-lg bg-${color}/20 flex items-center justify-center text-${color} font-bold`}
  >
    {n}
  </div>
)

export default function StackPage() {
  return (
    <DocPage
      title="Stack"
      description="A layout primitive that arranges children in a single axis, horizontal or vertical, with consistent spacing. A simpler alternative to writing flex utilities by hand."
      badge="Layout"
      importLine="{ AniccaStack } from 'anicca-ui'"
    >
      <SectionHeader id="horizontal">Horizontal Stack</SectionHeader>
      <ComponentDemo
        title="Row Direction"
        description='direction="horizontal" lays children out side by side (default).'
        preview={
          <AniccaStack direction="horizontal" gap={4}>
            <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
            <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
            <div className="w-16 h-16 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary font-bold">3</div>
          </AniccaStack>
        }
        code={`<AniccaStack direction="horizontal" gap={4}>
  <div className="w-16 h-16 rounded-lg bg-primary/20 ...">1</div>
  <div className="w-16 h-16 rounded-lg bg-secondary/20 ...">2</div>
  <div className="w-16 h-16 rounded-lg bg-tertiary/20 ...">3</div>
</AniccaStack>`}
      />

      <SectionHeader id="vertical">Vertical Stack</SectionHeader>
      <ComponentDemo
        title="Column Direction"
        description='direction="vertical" stacks children top to bottom.'
        preview={
          <AniccaStack direction="vertical" gap={3}>
            <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
            <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
            <div className="w-16 h-16 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary font-bold">3</div>
          </AniccaStack>
        }
        code={`<AniccaStack direction="vertical" gap={3}>
  <div className="w-16 h-16 rounded-lg bg-primary/20 ...">1</div>
  <div className="w-16 h-16 rounded-lg bg-secondary/20 ...">2</div>
  <div className="w-16 h-16 rounded-lg bg-tertiary/20 ...">3</div>
</AniccaStack>`}
      />

      <SectionHeader id="alignment">Justify & Align</SectionHeader>
      <ComponentDemo
        title="justify=between, align=center"
        description="Use justify and align to control cross-axis and main-axis distribution."
        centered={false}
        preview={
          <AniccaStack direction="horizontal" justify="between" align="center" className="w-full p-4 border border-outline-variant/30 rounded-xl">
            <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
            <div className="w-20 h-20 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
            <div className="w-12 h-12 rounded-lg bg-tertiary/20 flex items-center justify-center text-tertiary font-bold">3</div>
          </AniccaStack>
        }
        code={`<AniccaStack direction="horizontal" justify="between" align="center">
  <div className="w-16 h-16 rounded-lg bg-primary/20 ...">1</div>
  <div className="w-20 h-20 rounded-lg bg-secondary/20 ...">2</div>
  <div className="w-12 h-12 rounded-lg bg-tertiary/20 ...">3</div>
</AniccaStack>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'direction',
            type: '"row" | "column"',
            default: '"row"',
            description: 'The flex direction of the stack.',
          },
          {
            name: 'gap',
            type: 'number | string',
            default: '4',
            description: 'Spacing between children. Numbers map to Tailwind gap scale; strings are used as-is.',
          },
          {
            name: 'align',
            type: '"start" | "center" | "end" | "stretch" | "baseline"',
            default: '"start"',
            description: 'Cross-axis alignment (align-items).',
          },
          {
            name: 'justify',
            type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
            default: '"start"',
            description: 'Main-axis distribution (justify-content).',
          },
        ]}
      />
    </DocPage>
  )
}
