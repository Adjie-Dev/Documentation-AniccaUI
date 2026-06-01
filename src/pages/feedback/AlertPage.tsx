import React, { useState } from 'react'
import { AniccaAlert, AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function AlertPage() {
  const [visible, setVisible] = useState(true)

  return (
    <DocPage
      title="Alert"
      description="Inline contextual messages that inform users about important events, actions, or states. Supports five semantic variants, two visual appearances, and optional dismissal."
      badge="Feedback"
      importLine="import { AniccaAlert } from 'anicca-ui'"
    >
      <SectionHeader id="variants">Variants</SectionHeader>
      <ComponentDemo
        title="All variants"
        description="Five semantic variants covering the full range of feedback contexts."
        centered={false}
        preview={
          <div className="flex flex-col gap-3 w-full">
            <AniccaAlert variant="info" title="Info">
              This is an informational message to guide the user.
            </AniccaAlert>
            <AniccaAlert variant="success" title="Success">
              Your changes have been saved successfully.
            </AniccaAlert>
            <AniccaAlert variant="warning" title="Warning">
              This action may have unintended side effects.
            </AniccaAlert>
            <AniccaAlert variant="danger" title="Danger">
              Something went wrong. Please try again.
            </AniccaAlert>
            <AniccaAlert variant="neutral" title="Neutral">
              Here is some general context for the current view.
            </AniccaAlert>
          </div>
        }
        code={`<AniccaAlert variant="info" title="Info">
  This is an informational message to guide the user.
</AniccaAlert>

<AniccaAlert variant="success" title="Success">
  Your changes have been saved successfully.
</AniccaAlert>

<AniccaAlert variant="warning" title="Warning">
  This action may have unintended side effects.
</AniccaAlert>

<AniccaAlert variant="danger" title="Danger">
  Something went wrong. Please try again.
</AniccaAlert>

<AniccaAlert variant="neutral" title="Neutral">
  Here is some general context for the current view.
</AniccaAlert>`}
      />

      <SectionHeader id="appearance">Appearance</SectionHeader>
      <ComponentDemo
        title="Soft vs Outlined"
        description="Two visual styles, soft (default) uses a tinted background, outlined uses a border accent."
        centered={false}
        preview={
          <div className="flex flex-col gap-3 w-full">
            <AniccaAlert variant="info" appearance="soft" title="Soft (default)">
              Uses a tinted background color matching the variant.
            </AniccaAlert>
            <AniccaAlert variant="info" appearance="outlined" title="Outlined">
              Uses a strong border with a clean background.
            </AniccaAlert>
          </div>
        }
        code={`<AniccaAlert variant="info" appearance="soft" title="Soft (default)">
  Uses a tinted background color matching the variant.
</AniccaAlert>

<AniccaAlert variant="info" appearance="outlined" title="Outlined">
  Uses a strong border with a clean background.
</AniccaAlert>`}
      />

      <SectionHeader id="dismissible">Dismissible</SectionHeader>
      <ComponentDemo
        title="Controlled dismissal"
        description="Pass onDismiss to show the × button. Control visibility with useState."
        centered={false}
        preview={
          <div className="flex flex-col gap-3 w-full">
            {visible ? (
              <AniccaAlert
                variant="info"
                title="Dismissible alert"
                onDismiss={() => setVisible(false)}
              >
                Click the × to dismiss this alert.
              </AniccaAlert>
            ) : (
              <p className="text-sm text-text-muted">Alert was dismissed.</p>
            )}
            <div>
              <AniccaButton size="sm" variant="outline" onClick={() => setVisible(true)}>
                Reset
              </AniccaButton>
            </div>
          </div>
        }
        code={`const [visible, setVisible] = useState(true)

{visible && (
  <AniccaAlert
    variant="info"
    title="Dismissible alert"
    onDismiss={() => setVisible(false)}
  >
    Click the × to dismiss this alert.
  </AniccaAlert>
)}

<AniccaButton size="sm" variant="outline" onClick={() => setVisible(true)}>
  Reset
</AniccaButton>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'variant',
            type: "'info' | 'success' | 'warning' | 'danger' | 'neutral'",
            default: "'info'",
            description: 'Semantic variant that controls color and default icon.',
          },
          {
            name: 'title',
            type: 'ReactNode',
            description: 'Bold title rendered above the description content.',
          },
          {
            name: 'appearance',
            type: "'soft' | 'outlined'",
            default: "'soft'",
            description: "Visual style. 'soft' uses a tinted background; 'outlined' uses a border.",
          },
          {
            name: 'onDismiss',
            type: '() => void',
            description: 'When provided, renders a dismiss × button and calls this handler on click.',
          },
          {
            name: 'icon',
            type: 'ReactNode | null',
            description: 'Override the default variant icon. Pass null to hide the icon entirely.',
          },
        ]}
      />
    </DocPage>
  )
}
