import React, { useState } from 'react'
import { AniccaModal, AniccaButton } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function BasicModalDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AniccaButton onClick={() => setOpen(true)}>Open Modal</AniccaButton>
      <AniccaModal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
        footer={
          <>
            <AniccaButton variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </AniccaButton>
            <AniccaButton onClick={() => setOpen(false)}>Confirm</AniccaButton>
          </>
        }
      >
        <p className="text-text-muted text-sm leading-relaxed">
          Are you sure you want to proceed? This action cannot be undone. Review your changes
          before confirming.
        </p>
      </AniccaModal>
    </>
  )
}

function LargeModalDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AniccaButton variant="outline" onClick={() => setOpen(true)}>
        Large Modal
      </AniccaButton>
      <AniccaModal
        open={open}
        onClose={() => setOpen(false)}
        title="Terms and Conditions"
        className="max-w-[680px]"
        footer={
          <>
            <AniccaButton variant="ghost" onClick={() => setOpen(false)}>
              Decline
            </AniccaButton>
            <AniccaButton onClick={() => setOpen(false)}>Accept &amp; Continue</AniccaButton>
          </>
        }
      >
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            By using this service, you agree to be bound by these terms. Please read carefully
            before proceeding.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
      </AniccaModal>
    </>
  )
}

export default function ModalPage() {
  return (
    <DocPage
      title="Modal"
      description="An accessible overlay dialog with backdrop blur and slide-up animation. Traps focus, prevents body scroll, and closes on Escape or backdrop click."
      badge="Overlay"
      importLine="import { AniccaModal } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic modal</SectionHeader>
      <ComponentDemo
        title="Confirm dialog"
        description="A standard controlled modal with title, body content, and footer actions."
        preview={<BasicModalDemo />}
        code={`const [open, setOpen] = useState(false)

<AniccaButton onClick={() => setOpen(true)}>Open Modal</AniccaButton>

<AniccaModal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  footer={
    <>
      <AniccaButton variant="ghost" onClick={() => setOpen(false)}>Cancel</AniccaButton>
      <AniccaButton onClick={() => setOpen(false)}>Confirm</AniccaButton>
    </>
  }
>
  <p>Are you sure you want to proceed? This action cannot be undone.</p>
</AniccaModal>`}
      />

      <SectionHeader id="large">Large modal</SectionHeader>
      <ComponentDemo
        title="Wide dialog"
        description="Override max-width via className to create larger modals for rich content."
        preview={<LargeModalDemo />}
        code={`<AniccaModal
  open={open}
  onClose={() => setOpen(false)}
  title="Terms and Conditions"
  className="max-w-[680px]"
  footer={
    <>
      <AniccaButton variant="ghost" onClick={() => setOpen(false)}>Decline</AniccaButton>
      <AniccaButton onClick={() => setOpen(false)}>Accept & Continue</AniccaButton>
    </>
  }
>
  {/* longer content */}
</AniccaModal>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'open',
            type: 'boolean',
            required: true,
            description: 'Controls whether the modal is visible.',
          },
          {
            name: 'onClose',
            type: '() => void',
            required: true,
            description: 'Called when the user presses Escape, clicks the × button, or clicks the backdrop.',
          },
          {
            name: 'title',
            type: 'string',
            description: 'Text rendered in the modal header. Also used as aria-label.',
          },
          {
            name: 'footer',
            type: 'ReactNode',
            description: 'Content rendered in the bottom action bar, typically buttons.',
          },
          {
            name: 'disableEscapeKey',
            type: 'boolean',
            default: 'false',
            description: 'Prevent the Escape key from closing the modal.',
          },
          {
            name: 'disableBackdropClick',
            type: 'boolean',
            default: 'false',
            description: 'Prevent clicking the backdrop from closing the modal.',
          },
        ]}
      />
    </DocPage>
  )
}
