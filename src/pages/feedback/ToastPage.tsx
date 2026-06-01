import React from 'react'
import { AniccaButton, useAniccaToast } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function ToastPage() {
  const toast = useAniccaToast()

  return (
    <DocPage
      title="Toast"
      description="Non-intrusive notification messages that appear at the edge of the screen and auto-dismiss. Powered by AniccaToastProvider and the useAniccaToast hook."
      badge="Feedback"
      importLine="import { useAniccaToast, AniccaToastProvider } from 'anicca-ui'"
    >
      <SectionHeader id="demo">Interactive Demo</SectionHeader>
      <ComponentDemo
        title="Fire toasts"
        description="Click any button to push a toast notification. The provider must wrap your app."
        centered={false}
        preview={
          <div className="flex flex-wrap gap-2">
            <AniccaButton
              variant="outline"
              onClick={() =>
                toast.push({
                  variant: 'info',
                  title: 'Info',
                  description: 'This is an info message',
                })
              }
            >
              Info Toast
            </AniccaButton>
            <AniccaButton
              variant="outline"
              onClick={() =>
                toast.push({
                  variant: 'success',
                  title: 'Success!',
                  description: 'Operation completed',
                })
              }
            >
              Success Toast
            </AniccaButton>
            <AniccaButton
              variant="outline"
              onClick={() =>
                toast.push({
                  variant: 'warning',
                  title: 'Warning',
                  description: 'Check your inputs',
                })
              }
            >
              Warning Toast
            </AniccaButton>
            <AniccaButton
              variant="outline"
              onClick={() =>
                toast.push({
                  variant: 'danger',
                  title: 'Error',
                  description: 'Something went wrong',
                })
              }
            >
              Danger Toast
            </AniccaButton>
            <AniccaButton
              variant="outline"
              onClick={() =>
                toast.push({
                  variant: 'info',
                  title: 'Update available',
                  action: { label: 'Refresh', onClick: () => {} },
                })
              }
            >
              With Action
            </AniccaButton>
          </div>
        }
        code={`const toast = useAniccaToast()

// Info
toast.push({ variant: 'info', title: 'Info', description: 'This is an info message' })

// Success
toast.push({ variant: 'success', title: 'Success!', description: 'Operation completed' })

// Warning
toast.push({ variant: 'warning', title: 'Warning', description: 'Check your inputs' })

// Danger
toast.push({ variant: 'danger', title: 'Error', description: 'Something went wrong' })

// With action button
toast.push({
  variant: 'info',
  title: 'Update available',
  action: { label: 'Refresh', onClick: () => window.location.reload() },
})`}
      />

      <SectionHeader id="setup">Setup</SectionHeader>
      <ComponentDemo
        title="Provider setup"
        description="Wrap your app root with AniccaToastProvider once. Configure position and duration globally."
        centered={false}
        preview={
          <div className="text-sm text-text-muted p-4 bg-surface-container rounded-lg">
            Wrap your app with <code className="text-primary font-mono">AniccaToastProvider</code> at the root level.
          </div>
        }
        code={`// main.tsx
import { AniccaToastProvider } from 'anicca-ui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AniccaToastProvider position="top-right" defaultDuration={4000}>
    <App />
  </AniccaToastProvider>
)`}
      />

      <SectionHeader id="props">Push options</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'variant',
            type: "'info' | 'success' | 'warning' | 'danger' | 'neutral'",
            default: "'neutral'",
            description: 'Semantic color of the left border accent on the toast.',
          },
          {
            name: 'title',
            type: 'ReactNode',
            description: 'Bold heading text rendered at the top of the toast.',
          },
          {
            name: 'description',
            type: 'ReactNode',
            description: 'Supporting text rendered below the title.',
          },
          {
            name: 'duration',
            type: 'number',
            default: '4000',
            description: 'Milliseconds before auto-dismiss. Pass 0 to require manual dismissal.',
          },
          {
            name: 'action',
            type: '{ label: string; onClick: () => void }',
            description: 'Optional action button rendered on the right side of the toast.',
          },
        ]}
      />
    </DocPage>
  )
}
