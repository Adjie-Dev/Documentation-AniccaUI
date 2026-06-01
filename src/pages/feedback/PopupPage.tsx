import React from 'react'
import { AniccaButton, useAniccaPopup } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function BasicDemo() {
  const popup = useAniccaPopup()
  return (
    <AniccaButton
      onClick={() =>
        popup.push({
          variant: 'info',
          title: 'Information',
          description: 'This is a centered popup notification.',
        })
      }
    >
      Show Info Popup
    </AniccaButton>
  )
}

function WithActionsDemo() {
  const popup = useAniccaPopup()
  return (
    <AniccaButton
      variant="outline"
      onClick={() =>
        popup.push({
          variant: 'warning',
          title: 'Confirm Delete',
          description: 'This action cannot be undone.',
          actions: [
            { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
            { label: 'Delete', onClick: () => {}, variant: 'danger' },
          ],
        })
      }
    >
      Confirm Action
    </AniccaButton>
  )
}

function AllVariantsDemo() {
  const popup = useAniccaPopup()
  const variants = ['info', 'success', 'warning', 'danger', 'neutral'] as const
  return (
    <div className="flex flex-wrap gap-2">
      {variants.map((v) => (
        <AniccaButton
          key={v}
          variant="outline"
          onClick={() =>
            popup.push({
              variant: v,
              title: v.charAt(0).toUpperCase() + v.slice(1),
              description: `This is a ${v} popup variant.`,
            })
          }
        >
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </AniccaButton>
      ))}
    </div>
  )
}

function AutoDismissDemo() {
  const popup = useAniccaPopup()
  return (
    <AniccaButton
      variant="outline"
      onClick={() =>
        popup.push({
          variant: 'success',
          title: 'Auto-dismiss',
          description: 'This popup will close automatically in 3 seconds.',
          duration: 3000,
        })
      }
    >
      Auto-dismiss (3s)
    </AniccaButton>
  )
}

export default function PopupPage() {
  return (
    <DocPage
      title="Popup"
      description="A centered modal popup system for important notifications and confirmations. Unlike Toast, which appears at the edge of the screen, Popup renders in the center of the viewport and demands user attention. Powered by AniccaPopupProvider and the useAniccaPopup hook."
      badge="Feedback"
      importLine="import { useAniccaPopup, AniccaPopupProvider } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        title="Info popup"
        description="Push a simple informational popup to the center of the screen."
        preview={<BasicDemo />}
        code={`const popup = useAniccaPopup()

popup.push({
  variant: 'info',
  title: 'Information',
  description: 'This is a centered popup notification.',
})`}
      />

      <SectionHeader id="with-actions">With Actions</SectionHeader>
      <ComponentDemo
        title="Confirmation dialog"
        description="Add action buttons to let the user respond to the popup before dismissing."
        preview={<WithActionsDemo />}
        code={`popup.push({
  variant: 'warning',
  title: 'Confirm Delete',
  description: 'This action cannot be undone.',
  actions: [
    { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
    { label: 'Delete', onClick: () => {}, variant: 'danger' },
  ],
})`}
      />

      <SectionHeader id="variants">All Variants</SectionHeader>
      <ComponentDemo
        title="Semantic variants"
        description="Five semantic color variants to match the intent of the notification."
        centered={false}
        preview={<AllVariantsDemo />}
        code={`popup.push({ variant: 'info',    title: 'Info',    description: 'Informational message.' })
popup.push({ variant: 'success', title: 'Success', description: 'Operation completed.' })
popup.push({ variant: 'warning', title: 'Warning', description: 'Proceed with caution.' })
popup.push({ variant: 'danger',  title: 'Danger',  description: 'Destructive or critical.' })
popup.push({ variant: 'neutral', title: 'Neutral', description: 'General purpose message.' })`}
      />

      <SectionHeader id="auto-dismiss">Auto-dismiss</SectionHeader>
      <ComponentDemo
        title="Timed popup"
        description="Pass a duration in milliseconds to automatically close the popup. Use 0 to keep it open until the user dismisses it manually."
        preview={<AutoDismissDemo />}
        code={`// Auto-closes after 3 seconds
popup.push({
  variant: 'success',
  title: 'Auto-dismiss',
  description: 'This popup will close automatically in 3 seconds.',
  duration: 3000,
})

// Stays until dismissed
popup.push({
  variant: 'warning',
  title: 'Persistent',
  description: 'Must be closed manually.',
  duration: 0,
})`}
      />

      <SectionHeader id="props">Push options</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'ReactNode',
            description: 'Heading text rendered at the top of the popup.',
          },
          {
            name: 'description',
            type: 'ReactNode',
            description: 'Supporting text rendered below the title.',
          },
          {
            name: 'variant',
            type: "'info' | 'success' | 'warning' | 'danger' | 'neutral'",
            default: "'neutral'",
            description: 'Semantic color variant applied to the popup icon and accent.',
          },
          {
            name: 'duration',
            type: 'number',
            default: '0',
            description: 'Milliseconds before auto-dismiss. Pass 0 to require manual dismissal.',
          },
          {
            name: 'actions',
            type: "Array<{ label: string; onClick: () => void; variant?: 'primary' | 'secondary' | 'danger' }>",
            description: 'Optional action buttons rendered at the bottom of the popup.',
          },
        ]}
      />
    </DocPage>
  )
}
