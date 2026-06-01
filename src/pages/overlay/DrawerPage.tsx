import React, { useState } from 'react'
import { AniccaDrawer, AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function DrawerDemo() {
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const [topOpen, setTopOpen] = useState(false)
  const [bottomOpen, setBottomOpen] = useState(false)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <AniccaButton variant="outline" onClick={() => setLeftOpen(true)}>
          Left Drawer
        </AniccaButton>
        <AniccaButton variant="outline" onClick={() => setRightOpen(true)}>
          Right Drawer
        </AniccaButton>
        <AniccaButton variant="outline" onClick={() => setTopOpen(true)}>
          Top Drawer
        </AniccaButton>
        <AniccaButton variant="outline" onClick={() => setBottomOpen(true)}>
          Bottom Drawer
        </AniccaButton>
      </div>

      <AniccaDrawer
        open={leftOpen}
        onClose={() => setLeftOpen(false)}
        side="left"
        title="Drawer Title"
        footer={
          <AniccaButton variant="ghost" onClick={() => setLeftOpen(false)}>
            Close
          </AniccaButton>
        }
      >
        <p className="text-text-muted text-sm">
          This drawer slides in from the left side. Use it for navigation, filters, or any
          contextual actions.
        </p>
      </AniccaDrawer>

      <AniccaDrawer
        open={rightOpen}
        onClose={() => setRightOpen(false)}
        side="right"
        title="Drawer Title"
        footer={
          <AniccaButton variant="ghost" onClick={() => setRightOpen(false)}>
            Close
          </AniccaButton>
        }
      >
        <p className="text-text-muted text-sm">
          This drawer slides in from the right. A common pattern for detail panels and
          edit forms.
        </p>
      </AniccaDrawer>

      <AniccaDrawer
        open={topOpen}
        onClose={() => setTopOpen(false)}
        side="top"
        size="sm"
        title="Drawer Title"
        footer={
          <AniccaButton variant="ghost" onClick={() => setTopOpen(false)}>
            Close
          </AniccaButton>
        }
      >
        <p className="text-text-muted text-sm">
          This drawer drops down from the top. Useful for global alerts or command palettes.
        </p>
      </AniccaDrawer>

      <AniccaDrawer
        open={bottomOpen}
        onClose={() => setBottomOpen(false)}
        side="bottom"
        size="sm"
        title="Drawer Title"
        footer={
          <AniccaButton variant="ghost" onClick={() => setBottomOpen(false)}>
            Close
          </AniccaButton>
        }
      >
        <p className="text-text-muted text-sm">
          This drawer rises from the bottom. A great choice for mobile-style action sheets.
        </p>
      </AniccaDrawer>
    </>
  )
}

export default function DrawerPage() {
  return (
    <DocPage
      title="Drawer"
      description="A slide-in panel that anchors to any edge of the viewport. Locks body scroll while open and closes on backdrop click or Escape."
      badge="Overlay"
      importLine="import { AniccaDrawer } from 'anicca-ui'"
    >
      <SectionHeader id="sides">All four sides</SectionHeader>
      <ComponentDemo
        title="Left / Right / Top / Bottom"
        description="Open a drawer from each edge. Size and animation adapt to the chosen side."
        preview={<DrawerDemo />}
        centered={false}
        code={`const [leftOpen, setLeftOpen] = useState(false)
const [rightOpen, setRightOpen] = useState(false)
const [topOpen, setTopOpen] = useState(false)
const [bottomOpen, setBottomOpen] = useState(false)

<AniccaDrawer
  open={leftOpen}
  onClose={() => setLeftOpen(false)}
  side="left"
  title="Drawer Title"
  footer={<AniccaButton variant="ghost" onClick={() => setLeftOpen(false)}>Close</AniccaButton>}
>
  <p>Left drawer content.</p>
</AniccaDrawer>

{/* Repeat with side="right", "top", "bottom" */}`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'open',
            type: 'boolean',
            required: true,
            description: 'Controls whether the drawer is visible.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            description: 'Called when the user presses Escape or clicks the backdrop.',
          },
          {
            name: 'side',
            type: "'left' | 'right' | 'top' | 'bottom'",
            default: "'right'",
            description: 'The edge from which the drawer slides in.',
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg' | 'xl' | 'full' | string",
            default: "'md'",
            description: "Preset width (horizontal) or height (vertical). Accepts any CSS value string.",
          },
          {
            name: 'title',
            type: 'ReactNode',
            description: 'Text shown in the header bar with a close × button.',
          },
          {
            name: 'footer',
            type: 'ReactNode',
            description: 'Content in the sticky bottom footer, typically action buttons.',
          },
          {
            name: 'disableEscapeKey',
            type: 'boolean',
            default: 'false',
            description: 'Prevent the Escape key from closing the drawer.',
          },
        ]}
      />
    </DocPage>
  )
}
