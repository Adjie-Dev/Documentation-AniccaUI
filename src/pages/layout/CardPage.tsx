import React from 'react'
import {
  AniccaCard, AniccaCardHeader, AniccaCardTitle, AniccaCardDescription,
  AniccaCardBody, AniccaCardFooter, AniccaButton, AniccaBadge,
} from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function CardPage() {
  return (
    <DocPage
      title="Card"
      description="A surface container for grouping related content. Compose with CardHeader, CardBody, and CardFooter slots, or pass children directly for simple cases. Three visual variants and an optional accent stripe."
      badge="Layout"
      importLine="{ AniccaCard, AniccaCardHeader, AniccaCardBody, AniccaCardFooter } from 'anicca-ui'"
    >
      <SectionHeader id="variants">Variants</SectionHeader>
      <ComponentDemo
        title="Three visual variants"
        centered={false}
        variants={[
          {
            label: 'Elevated',
            preview: (
              <AniccaCard variant="elevated">
                <h3 className="font-semibold text-on-surface mb-1">Elevated Card</h3>
                <p className="text-sm text-text-muted">Shadow on a white surface, the default style.</p>
              </AniccaCard>
            ),
            code: `<AniccaCard variant="elevated">
  <h3 className="font-semibold text-on-surface mb-1">Elevated Card</h3>
  <p className="text-sm text-text-muted">Shadow on a white surface, the default style.</p>
</AniccaCard>`,
          },
          {
            label: 'Outlined',
            preview: (
              <AniccaCard variant="outlined">
                <h3 className="font-semibold text-on-surface mb-1">Outlined Card</h3>
                <p className="text-sm text-text-muted">Visible border, no shadow, clean and flat.</p>
              </AniccaCard>
            ),
            code: `<AniccaCard variant="outlined">
  <h3 className="font-semibold text-on-surface mb-1">Outlined Card</h3>
  <p className="text-sm text-text-muted">Visible border, no shadow, clean and flat.</p>
</AniccaCard>`,
          },
          {
            label: 'Flat',
            preview: (
              <AniccaCard variant="flat">
                <h3 className="font-semibold text-on-surface mb-1">Flat Card</h3>
                <p className="text-sm text-text-muted">Muted background, no border, subtle grouping.</p>
              </AniccaCard>
            ),
            code: `<AniccaCard variant="flat">
  <h3 className="font-semibold text-on-surface mb-1">Flat Card</h3>
  <p className="text-sm text-text-muted">Muted background, no border, subtle grouping.</p>
</AniccaCard>`,
          },
        ]}
      />

      <SectionHeader id="composed">Composed with Slots</SectionHeader>
      <ComponentDemo
        title="CardHeader + CardBody + CardFooter"
        description="Use the slot components for consistent internal spacing and dividers."
        centered={false}
        preview={
          <AniccaCard variant="outlined" unpadded>
            <AniccaCardHeader>
              <div>
                <AniccaCardTitle>Project Alpha</AniccaCardTitle>
                <AniccaCardDescription>Last updated 2 hours ago</AniccaCardDescription>
              </div>
              <AniccaBadge variant="success" appearance="soft">Active</AniccaBadge>
            </AniccaCardHeader>
            <AniccaCardBody>
              <p className="text-sm text-text-muted leading-relaxed">
                This project is currently in development. All sprints are on schedule and the team is hitting targets.
              </p>
            </AniccaCardBody>
            <AniccaCardFooter>
              <AniccaButton variant="ghost" size="sm">Cancel</AniccaButton>
              <AniccaButton variant="primary" size="sm">View Details</AniccaButton>
            </AniccaCardFooter>
          </AniccaCard>
        }
        code={`<AniccaCard variant="outlined" unpadded>
  <AniccaCardHeader>
    <div>
      <AniccaCardTitle>Project Alpha</AniccaCardTitle>
      <AniccaCardDescription>Last updated 2 hours ago</AniccaCardDescription>
    </div>
    <AniccaBadge variant="success" appearance="soft">Active</AniccaBadge>
  </AniccaCardHeader>
  <AniccaCardBody>
    <p className="text-sm text-text-muted">
      This project is currently in development.
    </p>
  </AniccaCardBody>
  <AniccaCardFooter>
    <AniccaButton variant="ghost" size="sm">Cancel</AniccaButton>
    <AniccaButton variant="primary" size="sm">View Details</AniccaButton>
  </AniccaCardFooter>
</AniccaCard>`}
      />

      <SectionHeader id="accent">Accent Stripe</SectionHeader>
      <ComponentDemo
        title="Status accent"
        description="Pass a CSS color to the accent prop to render a left border stripe, useful for status cards."
        centered={false}
        preview={
          <div className="grid grid-cols-3 gap-3 w-full">
            <AniccaCard variant="outlined" accent="rgb(var(--success))">
              <p className="text-xs font-semibold text-success uppercase tracking-wide">Success</p>
              <p className="text-2xl font-bold text-on-surface mt-1">98.4%</p>
              <p className="text-xs text-text-muted">Uptime this month</p>
            </AniccaCard>
            <AniccaCard variant="outlined" accent="rgb(var(--warning))">
              <p className="text-xs font-semibold text-amber uppercase tracking-wide">Warning</p>
              <p className="text-2xl font-bold text-on-surface mt-1">3</p>
              <p className="text-xs text-text-muted">Pending reviews</p>
            </AniccaCard>
            <AniccaCard variant="outlined" accent="rgb(var(--error))">
              <p className="text-xs font-semibold text-danger uppercase tracking-wide">Critical</p>
              <p className="text-2xl font-bold text-on-surface mt-1">1</p>
              <p className="text-xs text-text-muted">Open incidents</p>
            </AniccaCard>
          </div>
        }
        code={`<AniccaCard variant="outlined" accent="rgb(var(--success))">
  <p className="text-xs font-semibold text-success">Success</p>
  <p className="text-2xl font-bold text-on-surface mt-1">98.4%</p>
  <p className="text-xs text-text-muted">Uptime this month</p>
</AniccaCard>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'variant',
            type: '"elevated" | "outlined" | "flat"',
            default: '"elevated"',
            description: 'Visual style of the card surface.',
          },
          {
            name: 'accent',
            type: 'string',
            description: 'A CSS color value applied as a left border stripe for status indication.',
          },
          {
            name: 'unpadded',
            type: 'boolean',
            default: 'false',
            description: 'Removes default padding, use when composing with CardHeader/Body/Footer.',
          },
        ]}
      />

      <SectionHeader id="slots" sub>Slot Components</SectionHeader>
      <PropsTable
        props={[
          { name: 'AniccaCardHeader', type: 'div', description: 'Top slot with bottom divider. Flex row, space between.' },
          { name: 'AniccaCardTitle', type: 'h3', description: 'Bold heading inside the header.' },
          { name: 'AniccaCardDescription', type: 'p', description: 'Muted subtitle inside the header.' },
          { name: 'AniccaCardBody', type: 'div', description: 'Main content area with comfortable padding.' },
          { name: 'AniccaCardFooter', type: 'div', description: 'Bottom slot with top divider. Flex row, right-aligned.' },
        ]}
      />
    </DocPage>
  )
}
