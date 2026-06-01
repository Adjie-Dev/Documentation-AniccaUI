import React, { useState } from 'react'
import { useAniccaPopup, AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import SectionHeader from '../../components/SectionHeader'
import PropsTable from '../../components/PropsTable'

function BasicPushDemo() {
  const popup = useAniccaPopup()
  return (
    <AniccaButton
      onClick={() =>
        popup.push({
          variant: 'info',
          title: 'Hello',
          description: 'This is a popup.',
        })
      }
    >
      Show Popup
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
          title: 'Confirm',
          description: 'Are you sure you want to proceed? This action cannot be undone.',
          actions: [
            { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
            { label: 'Confirm', onClick: () => {}, variant: 'primary' },
          ],
        })
      }
    >
      Show confirmation
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
          size="sm"
          onClick={() =>
            popup.push({
              variant: v,
              title: `${v.charAt(0).toUpperCase() + v.slice(1)} popup`,
              description: `This is a popup with variant "${v}".`,
            })
          }
        >
          {v}
        </AniccaButton>
      ))}
    </div>
  )
}

function DismissByIdDemo() {
  const popup = useAniccaPopup()
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <div className="flex flex-wrap items-center gap-3">
      <AniccaButton
        onClick={() => {
          const id = popup.push({
            variant: 'info',
            title: 'Persistent popup',
            description: 'This popup stays open until you dismiss it using the button below.',
            duration: 0,
          })
          setActiveId(id)
        }}
      >
        Push popup
      </AniccaButton>
      <AniccaButton
        variant="outline"
        disabled={!activeId}
        onClick={() => {
          if (activeId) {
            popup.dismiss(activeId)
            setActiveId(null)
          }
        }}
      >
        Dismiss by id
      </AniccaButton>
    </div>
  )
}

export default function UseAniccaPopupPage() {
  return (
    <DocPage
      title="useAniccaPopup"
      description="The hook that triggers center-modal popups. Returns push, dismiss, and clear functions. Must be used inside AniccaPopupProvider."
      badge="Hooks"
      importLine="import { useAniccaPopup } from 'anicca-ui'"
    >
      <SectionHeader id="setup">Provider setup</SectionHeader>
      <ComponentDemo
        title="Wrap your app"
        description="Place AniccaPopupProvider once at the root. All nested components can then call useAniccaPopup."
        centered={false}
        preview={
          <div className="text-sm text-text-muted p-4 bg-surface-container rounded-lg leading-relaxed">
            Wrap your app root with <code className="text-primary font-mono">AniccaPopupProvider</code>. The provider
            renders popup modals into a portal on{' '}
            <code className="text-primary font-mono">document.body</code>.
          </div>
        }
        code={`// main.tsx
import { AniccaPopupProvider } from 'anicca-ui'

createRoot(document.getElementById('root')!).render(
  <AniccaPopupProvider>
    <App />
  </AniccaPopupProvider>
)

// Anywhere inside App:
function MyComponent() {
  const popup = useAniccaPopup()

  return (
    <button onClick={() => popup.push({ title: 'Hello!', variant: 'info', description: 'This is a popup.' })}>
      Open popup
    </button>
  )
}`}
      />

      <SectionHeader id="basic">Basic push</SectionHeader>
      <ComponentDemo
        title="Show a popup"
        description="Call push with a title, description, and variant to display a centered modal popup."
        preview={<BasicPushDemo />}
        code={`const popup = useAniccaPopup()

popup.push({
  variant: 'info',
  title: 'Hello',
  description: 'This is a popup.',
})`}
      />

      <SectionHeader id="actions">With actions</SectionHeader>
      <ComponentDemo
        title="Confirmation dialog"
        description="Pass an actions array to render primary and secondary action buttons at the bottom of the popup."
        preview={<WithActionsDemo />}
        code={`popup.push({
  variant: 'warning',
  title: 'Confirm',
  description: 'Are you sure you want to proceed? This action cannot be undone.',
  actions: [
    { label: 'Cancel', onClick: () => {}, variant: 'secondary' },
    { label: 'Confirm', onClick: () => {}, variant: 'primary' },
  ],
})`}
      />

      <SectionHeader id="variants">All variants</SectionHeader>
      <ComponentDemo
        title="Variant showcase"
        description="Five semantic variants are available: info, success, warning, danger, and neutral."
        preview={<AllVariantsDemo />}
        code={`popup.push({ variant: 'info',    title: 'Info popup',    description: 'Variant info.' })
popup.push({ variant: 'success', title: 'Success popup', description: 'Variant success.' })
popup.push({ variant: 'warning', title: 'Warning popup', description: 'Variant warning.' })
popup.push({ variant: 'danger',  title: 'Danger popup',  description: 'Variant danger.' })
popup.push({ variant: 'neutral', title: 'Neutral popup', description: 'Variant neutral.' })`}
      />

      <SectionHeader id="dismiss-by-id">Dismiss by id</SectionHeader>
      <ComponentDemo
        title="Programmatic dismiss"
        description="push returns the generated id string. Store it to dismiss that specific popup later without user interaction."
        preview={<DismissByIdDemo />}
        code={`const popup = useAniccaPopup()
const [activeId, setActiveId] = useState<string | null>(null)

// Push a persistent popup (duration: 0 = never auto-dismiss)
const id = popup.push({
  variant: 'info',
  title: 'Persistent popup',
  description: 'This popup stays open until dismissed programmatically.',
  duration: 0,
})
setActiveId(id)

// Dismiss it by id
popup.dismiss(id)`}
      />

      <SectionHeader id="api">Return value API</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'push',
            type: '(options: PopupOptions) => string',
            description: 'Display a new popup. Returns the generated id string.',
          },
          {
            name: 'dismiss',
            type: '(id: string) => void',
            description: 'Close a specific popup by its id.',
          },
          {
            name: 'clear',
            type: '() => void',
            description: 'Close all active popups immediately.',
          },
        ]}
      />

      <SectionHeader id="push-options">push() options</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'ReactNode',
            required: true,
            description: 'Bold heading shown at the top of the popup.',
          },
          {
            name: 'description',
            type: 'ReactNode',
            description: 'Supporting body text below the title.',
          },
          {
            name: 'variant',
            type: "'info' | 'success' | 'warning' | 'danger' | 'neutral'",
            default: "'neutral'",
            description: 'Semantic color applied to the popup icon and accent.',
          },
          {
            name: 'duration',
            type: 'number',
            description: 'Auto-dismiss delay in milliseconds. Set to 0 to keep the popup open until dismissed manually.',
          },
          {
            name: 'actions',
            type: 'PopupAction[]',
            description: 'Array of action buttons rendered at the bottom of the popup.',
          },
        ]}
      />

      <SectionHeader id="action-props">PopupAction props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'label',
            type: 'string',
            required: true,
            description: 'Button label text.',
          },
          {
            name: 'onClick',
            type: '() => void',
            required: true,
            description: 'Handler called when the action button is clicked.',
          },
          {
            name: 'variant',
            type: "'primary' | 'secondary'",
            default: "'secondary'",
            description: 'Visual style of the action button.',
          },
        ]}
      />
    </DocPage>
  )
}
