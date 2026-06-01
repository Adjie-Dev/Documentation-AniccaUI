import React from 'react'
import { AniccaTextarea } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function TextareaPage() {
  return (
    <DocPage
      title="Textarea"
      description="Multi-line text input with label, helper/error states, auto-resize, and character counter."
      badge="Primitive"
      importLine="{ AniccaTextarea } from 'anicca-ui'"
    >

      {/* ── Basic ── */}
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        title="Default textarea"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaTextarea label="Message" placeholder="Write your message here…" rows={4} />
          </div>
        }
        code={`<AniccaTextarea label="Message" placeholder="Write your message here…" rows={4} />`}
      />

      {/* ── Error ── */}
      <SectionHeader id="error">Error State</SectionHeader>
      <ComponentDemo
        title="With error"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaTextarea
              label="Bio"
              placeholder="Tell us about yourself…"
              error="Bio must be at least 20 characters."
              defaultValue="Too short"
              rows={3}
            />
          </div>
        }
        code={`<AniccaTextarea
  label="Bio"
  placeholder="Tell us about yourself…"
  error="Bio must be at least 20 characters."
  rows={3}
/>`}
      />

      {/* ── Helper text ── */}
      <SectionHeader id="helper">With Helper</SectionHeader>
      <ComponentDemo
        title="Helper text and character count"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaTextarea
              label="Description"
              placeholder="Describe your project…"
              helper="Markdown is supported."
              rows={4}
            />
          </div>
        }
        code={`<AniccaTextarea
  label="Description"
  placeholder="Describe your project…"
  helper="Markdown is supported."
  rows={4}
/>`}
      />

      {/* ── Disabled ── */}
      <SectionHeader id="disabled">Disabled</SectionHeader>
      <ComponentDemo
        title="Disabled state"
        centered={false}
        preview={
          <div className="w-full max-w-sm">
            <AniccaTextarea
              label="Notes"
              value="This field is read-only and cannot be edited."
              disabled
              rows={3}
              onChange={() => {}}
            />
          </div>
        }
        code={`<AniccaTextarea
  label="Notes"
  value="This field is read-only."
  disabled
  rows={3}
/>`}
      />

      {/* ── Props ── */}
      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'label',       type: 'string',     description: 'Label rendered above the textarea.' },
          { name: 'helper',      type: 'string',     description: 'Helper text shown below.' },
          { name: 'error',       type: 'string',     description: 'Error message; replaces helper and applies error styling.' },
          { name: 'autoResize',  type: 'boolean',  default: 'false', description: 'Auto-grow height to fit content.' },
          { name: 'maxHeight',   type: 'number',     description: 'Maximum height in px when autoResize is enabled.' },
          { name: 'showCount',   type: 'boolean',  default: 'false', description: 'Show character count; pairs with maxLength.' },
          { name: 'disabled',    type: 'boolean',  default: 'false', description: 'Disable the textarea.' },
          { name: 'required',    type: 'boolean',  default: 'false', description: 'Required indicator and aria attribute.' },
        ]}
      />
    </DocPage>
  )
}
