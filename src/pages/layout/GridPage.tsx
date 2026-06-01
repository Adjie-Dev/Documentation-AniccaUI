import React from 'react'
import { AniccaGrid } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

const GridBox = ({ n }: { n: number }) => (
  <div className="w-full h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
    {n}
  </div>
)

export default function GridPage() {
  return (
    <DocPage
      title="Grid"
      description="A CSS grid layout primitive for building evenly-spaced multi-column layouts. Supports configurable column counts, gap sizes, and responsive breakpoints."
      badge="Layout"
      importLine="{ AniccaGrid } from 'anicca-ui'"
    >
      <SectionHeader id="three-col">3-Column Grid</SectionHeader>
      <ComponentDemo
        title="3 Columns"
        description="Six items distributed evenly across three columns."
        centered={false}
        preview={
          <AniccaGrid columns={3} gap="1rem" className="w-full">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <GridBox key={n} n={n} />
            ))}
          </AniccaGrid>
        }
        code={`<AniccaGrid columns={3} gap="1rem">
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">1</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">2</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">3</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">4</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">5</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">6</div>
</AniccaGrid>`}
      />

      <SectionHeader id="four-col">4-Column Grid</SectionHeader>
      <ComponentDemo
        title="4 Columns"
        description="Eight items across four equal-width columns."
        centered={false}
        preview={
          <AniccaGrid columns={4} gap="1rem" className="w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <GridBox key={n} n={n} />
            ))}
          </AniccaGrid>
        }
        code={`<AniccaGrid columns={4} gap="1rem">
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">1</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">2</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">3</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">4</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">5</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">6</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">7</div>
  <div className="w-full h-16 rounded-lg bg-primary/20 ...">8</div>
</AniccaGrid>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'columns',
            type: 'number',
            required: true,
            description: 'Number of equal-width columns in the grid.',
          },
          {
            name: 'gap',
            type: 'string | number',
            default: '"1rem"',
            description: 'Gap between grid cells. Accepts any CSS gap value or a number (px).',
          },
          {
            name: 'responsive',
            type: 'boolean',
            default: 'true',
            description: 'When true, columns collapse to fewer columns on smaller viewports.',
          },
        ]}
      />
    </DocPage>
  )
}
