import React from 'react'
import { useAniccaToast, AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import SectionHeader from '../../components/SectionHeader'
import PropsTable from '../../components/PropsTable'

function ToastHookDemo() {
  const toast = useAniccaToast()

  return (
    <div className="flex flex-wrap gap-2">
      <AniccaButton
        variant="outline"
        onClick={() =>
          toast.push({ variant: 'success', title: 'Pushed!', description: 'Toast was added to the stack.' })
        }
      >
        push()
      </AniccaButton>
      <AniccaButton
        variant="outline"
        onClick={() => {
          const id = toast.push({
            variant: 'warning',
            title: 'Dismiss me',
            duration: 0,
            description: 'This toast will be dismissed programmatically.',
          })
          setTimeout(() => toast.dismiss(id), 2000)
        }}
      >
        dismiss() after 2s
      </AniccaButton>
      <AniccaButton
        variant="outline"
        onClick={() => {
          toast.push({ variant: 'info', title: 'Toast 1' })
          toast.push({ variant: 'success', title: 'Toast 2' })
          toast.push({ variant: 'warning', title: 'Toast 3' })
        }}
      >
        Push 3 toasts
      </AniccaButton>
      <AniccaButton
        variant="outline"
        onClick={() => toast.clear()}
      >
        clear() all
      </AniccaButton>
    </div>
  )
}

export default function UseAniccaToastPage() {
  return (
    <DocPage
      title="useAniccaToast"
      description="The hook that powers all toast notifications. Returns push, dismiss, and clear functions. Must be used inside AniccaToastProvider."
      badge="Hooks"
      importLine="import { useAniccaToast } from 'anicca-ui'"
    >
      <SectionHeader id="demo">Interactive demo</SectionHeader>
      <ComponentDemo
        title="Hook methods"
        description="Test each method: push a toast, auto-dismiss after 2 seconds, push multiple, and clear all."
        centered={false}
        preview={<ToastHookDemo />}
        code={`const toast = useAniccaToast()

// Push and get back the generated id
const id = toast.push({
  variant: 'success',
  title: 'Saved!',
  description: 'Your changes have been saved.',
})

// Dismiss a specific toast by id
toast.dismiss(id)

// Clear all active toasts at once
toast.clear()`}
      />

      <SectionHeader id="provider">Provider setup</SectionHeader>
      <ComponentDemo
        title="Wrapping your app"
        description="Place AniccaToastProvider once at the root. All nested components can then call useAniccaToast."
        centered={false}
        preview={
          <div className="text-sm text-text-muted p-4 bg-surface-container rounded-lg leading-relaxed">
            Wrap your app root. The provider renders the toast stack into a portal on{' '}
            <code className="text-primary font-mono">document.body</code>.
          </div>
        }
        code={`// main.tsx
import { AniccaToastProvider } from 'anicca-ui'

createRoot(document.getElementById('root')!).render(
  <AniccaToastProvider
    position="top-right"
    defaultDuration={4000}
    max={5}
  >
    <App />
  </AniccaToastProvider>
)

// Anywhere inside App:
function MyComponent() {
  const toast = useAniccaToast()

  return (
    <button onClick={() => toast.push({ title: 'Hello!', variant: 'info' })}>
      Say hello
    </button>
  )
}`}
      />

      <SectionHeader id="api">Return value API</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'push',
            type: '(options: ToastOptions) => string',
            description: 'Add a new toast. Returns the generated id string.',
          },
          {
            name: 'dismiss',
            type: '(id: string) => void',
            description: 'Remove a specific toast by its id.',
          },
          {
            name: 'clear',
            type: '() => void',
            description: 'Remove all active toasts immediately.',
          },
          {
            name: 'toasts',
            type: 'AniccaToast[]',
            description: 'Array of currently visible toast objects (for custom rendering).',
          },
        ]}
      />

      <SectionHeader id="push-options">push() options</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'variant',
            type: "'info' | 'success' | 'warning' | 'danger' | 'neutral'",
            default: "'neutral'",
            description: 'Semantic color applied to the left border accent.',
          },
          {
            name: 'title',
            type: 'ReactNode',
            description: 'Bold heading of the toast.',
          },
          {
            name: 'description',
            type: 'ReactNode',
            description: 'Supporting body text below the title.',
          },
          {
            name: 'duration',
            type: 'number',
            default: '4000',
            description: 'Auto-dismiss delay in milliseconds. 0 = never auto-dismiss.',
          },
          {
            name: 'action',
            type: '{ label: string; onClick: () => void }',
            description: 'Optional action button rendered on the right of the toast.',
          },
          {
            name: 'id',
            type: 'string',
            default: 'auto',
            description: 'Custom id. Defaults to an auto-incremented string.',
          },
        ]}
      />
    </DocPage>
  )
}
