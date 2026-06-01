import React, { useState } from 'react'
import { useAniccaForm, AniccaInput, AniccaButton, AniccaAlert } from 'anicca-ui'
import { required, email, minLength } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

interface RegistrationValues extends Record<string, unknown> {
  name: string
  email: string
  password: string
}

function RegistrationFormDemo() {
  const [submitted, setSubmitted] = useState(false)

  const form = useAniccaForm<RegistrationValues>({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: {
      name: [required(), minLength(2)],
      email: [required(), email()],
      password: [required(), minLength(8)],
    },
    onSubmit: async () => {
      await new Promise((r) => setTimeout(r, 800))
      setSubmitted(true)
    },
  })

  if (submitted) {
    return (
      <div className="w-full max-w-sm space-y-3">
        <AniccaAlert variant="success" title="Registration successful!">
          Your account has been created. Welcome aboard!
        </AniccaAlert>
        <AniccaButton
          variant="ghost"
          size="sm"
          onClick={() => {
            setSubmitted(false)
            form.reset()
          }}
        >
          Reset demo
        </AniccaButton>
      </div>
    )
  }

  return (
    <form onSubmit={form.handleSubmit} className="w-full max-w-sm space-y-4">
      <AniccaInput
        label="Full name"
        placeholder="Jane Doe"
        value={form.values.name}
        onChange={form.handleChange('name')}
        onBlur={form.handleBlur('name')}
        error={form.touched.name ? form.errors.name : undefined}
        required
      />
      <AniccaInput
        label="Email"
        type="email"
        placeholder="jane@example.com"
        value={form.values.email}
        onChange={form.handleChange('email')}
        onBlur={form.handleBlur('email')}
        error={form.touched.email ? form.errors.email : undefined}
        required
      />
      <AniccaInput
        label="Password"
        type="password"
        placeholder="At least 8 characters"
        value={form.values.password}
        onChange={form.handleChange('password')}
        onBlur={form.handleBlur('password')}
        error={form.touched.password ? form.errors.password : undefined}
        required
      />
      <AniccaButton type="submit" disabled={form.isSubmitting} className="w-full">
        {form.isSubmitting ? 'Creating account…' : 'Create account'}
      </AniccaButton>
    </form>
  )
}

export default function UseAniccaFormPage() {
  return (
    <DocPage
      title="useAniccaForm"
      description="A comprehensive form state hook with per-field validation, touch tracking, async submission, and reset. No external dependencies."
      badge="Hooks"
      importLine="import { useAniccaForm, required, email, minLength } from 'anicca-ui'"
    >
      <SectionHeader id="demo">Live demo</SectionHeader>
      <ComponentDemo
        title="Registration form"
        description="Fill out the form and submit. Errors appear on blur. The submit button shows a loading state during the async handler."
        centered={false}
        preview={<RegistrationFormDemo />}
        code={`const form = useAniccaForm({
  initialValues: { name: '', email: '', password: '' },
  validationSchema: {
    name: [required(), minLength(2)],
    email: [required(), email()],
    password: [required(), minLength(8)],
  },
  onSubmit: async (values) => {
    await registerUser(values)
  },
})

<form onSubmit={form.handleSubmit}>
  <AniccaInput
    label="Full name"
    value={form.values.name}
    onChange={form.handleChange('name')}
    onBlur={form.handleBlur('name')}
    error={form.touched.name ? form.errors.name : undefined}
    required
  />
  <AniccaInput
    label="Email"
    type="email"
    value={form.values.email}
    onChange={form.handleChange('email')}
    onBlur={form.handleBlur('email')}
    error={form.touched.email ? form.errors.email : undefined}
    required
  />
  <AniccaInput
    label="Password"
    type="password"
    value={form.values.password}
    onChange={form.handleChange('password')}
    onBlur={form.handleBlur('password')}
    error={form.touched.password ? form.errors.password : undefined}
    required
  />
  <AniccaButton type="submit" disabled={form.isSubmitting}>
    {form.isSubmitting ? 'Saving…' : 'Submit'}
  </AniccaButton>
</form>`}
      />

      <SectionHeader id="api">Hook API</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'initialValues',
            type: 'T',
            required: true,
            description: 'Config: initial values for each form field.',
          },
          {
            name: 'validationSchema',
            type: 'Partial<Record<keyof T, ValidationRule[]>>',
            description: 'Config: per-field array of validation rules (required, email, minLength, etc.).',
          },
          {
            name: 'onSubmit',
            type: '(values: T) => void | Promise<void>',
            description: 'Config: called with valid values on form submit. Can be async.',
          },
          {
            name: 'values',
            type: 'T',
            description: 'Return: current field values object.',
          },
          {
            name: 'errors',
            type: 'Partial<Record<keyof T, string>>',
            description: 'Return: current validation error messages per field.',
          },
          {
            name: 'touched',
            type: 'Partial<Record<keyof T, boolean>>',
            description: 'Return: which fields the user has blurred.',
          },
          {
            name: 'isSubmitting',
            type: 'boolean',
            description: 'Return: true while the async onSubmit handler is running.',
          },
          {
            name: 'handleChange',
            type: '(field: keyof T) => ChangeEventHandler',
            description: 'Return: factory that returns a change handler for a field.',
          },
          {
            name: 'handleBlur',
            type: '(field: keyof T) => () => void',
            description: 'Return: factory that returns a blur handler for a field.',
          },
          {
            name: 'handleSubmit',
            type: '(e?: FormEvent) => Promise<void>',
            description: 'Return: validates all fields, then calls onSubmit if valid.',
          },
          {
            name: 'reset',
            type: '() => void',
            description: 'Return: resets values, errors, and touched state to initial.',
          },
        ]}
      />
    </DocPage>
  )
}
