import React, { useState } from 'react'
import { AniccaAuthModal, AniccaButton, AniccaCard, AniccaBadge } from 'anicca-ui'
import type { AniccaAuthModalMode } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'
import CodeBlock from '../../components/CodeBlock'

function AuthModalDemo() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<AniccaAuthModalMode>('signin')

  const openIn = (m: AniccaAuthModalMode) => {
    setMode(m)
    setOpen(true)
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <AniccaButton variant="primary" onClick={() => openIn('signin')}>
          Sign In
        </AniccaButton>
        <AniccaButton variant="outline" onClick={() => openIn('signup')}>
          Sign Up
        </AniccaButton>
        <AniccaButton variant="ghost" onClick={() => openIn('recover')}>
          Recover Password
        </AniccaButton>
      </div>
      <AniccaAuthModal
        open={open}
        onClose={() => setOpen(false)}
        mode={mode}
        onModeChange={setMode}
        onSubmit={(data) => {
          console.log('submit', data)
          setOpen(false)
        }}
        onGoogle={() => {}}
        onFacebook={() => {}}
        onApple={() => {}}
      />
    </>
  )
}

function ErrorDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AniccaButton variant="outline" onClick={() => setOpen(true)}>
        Open with error
      </AniccaButton>
      <AniccaAuthModal
        open={open}
        onClose={() => setOpen(false)}
        mode="signin"
        error="Invalid credentials. Please check your email and password."
        onSubmit={() => {}}
      />
    </>
  )
}

function LoadingDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AniccaButton variant="outline" onClick={() => setOpen(true)}>
        Open loading state
      </AniccaButton>
      <AniccaAuthModal
        open={open}
        onClose={() => setOpen(false)}
        mode="signin"
        loading
        onSubmit={() => {}}
      />
    </>
  )
}

function I18nDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AniccaButton variant="outline" onClick={() => setOpen(true)}>
        Buka Modal (Indonesia)
      </AniccaButton>
      <AniccaAuthModal
        open={open}
        onClose={() => setOpen(false)}
        mode="signin"
        onSubmit={() => setOpen(false)}
        onGoogle={() => {}}
        labels={{
          signinTitle: 'Masuk',
          signinSubtitle: 'Masuk ke akun Anda',
          emailLabel: 'Email',
          emailPlaceholder: 'nama@email.com',
          passwordLabel: 'Kata Sandi',
          passwordPlaceholder: 'Minimal 8 karakter',
          signinCta: 'Masuk',
          forgotPassword: 'Lupa kata sandi?',
          toSignup: 'Belum punya akun? Daftar',
          divider: 'atau lanjutkan dengan',
        }}
      />
    </>
  )
}

export default function AuthModalPage() {
  return (
    <DocPage
      title="AuthModal"
      description="Multi-mode authentication dialog supporting sign-in, sign-up, and password recovery. Built-in form validation, OAuth provider buttons, error banners, loading state, and full i18n support."
      badge="Auth"
      importLine="{ AniccaAuthModal } from 'anicca-ui'"
    >

      {/* Mode overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {[
          { mode: 'Sign In', fields: 'Email + Password', badge: 'primary' },
          { mode: 'Sign Up', fields: 'Name + Email + Password', badge: 'success' },
          { mode: 'Recover', fields: 'Email only', badge: 'warning' },
        ].map((m) => (
          <AniccaCard key={m.mode} variant="outlined" className="p-4">
            <AniccaBadge variant={m.badge as 'primary' | 'success' | 'warning'} appearance="soft" size="sm" className="mb-2">
              {m.mode}
            </AniccaBadge>
            <p className="text-sm text-text-muted">{m.fields}</p>
          </AniccaCard>
        ))}
      </div>

      <SectionHeader id="demo">Interactive Demo</SectionHeader>
      <ComponentDemo
        description="Each button opens the modal in a different mode. Switch modes using the links inside the modal. Social OAuth buttons (Google, Facebook, Apple) are enabled."
        preview={<AuthModalDemo />}
        code={`const [open, setOpen] = useState(false)
const [mode, setMode] = useState<'signin' | 'signup' | 'recover'>('signin')

const openIn = (m: 'signin' | 'signup' | 'recover') => {
  setMode(m)
  setOpen(true)
}

<AniccaButton onClick={() => openIn('signin')}>Sign In</AniccaButton>
<AniccaButton onClick={() => openIn('signup')}>Sign Up</AniccaButton>
<AniccaButton onClick={() => openIn('recover')}>Recover</AniccaButton>

<AniccaAuthModal
  open={open}
  onClose={() => setOpen(false)}
  mode={mode}
  onModeChange={setMode}
  onSubmit={(data) => {
    // data: { mode, email, password?, name? }
    await authenticate(data)
    setOpen(false)
  }}
  onGoogle={() => signInWithGoogle()}
  onFacebook={() => signInWithFacebook()}
  onApple={() => signInWithApple()}
/>`}
      />

      <SectionHeader id="error">Error State</SectionHeader>
      <ComponentDemo
        description="Pass the error prop to show a red banner inside the modal. Used for server-side auth failures."
        preview={<ErrorDemo />}
        code={`<AniccaAuthModal
  open={open}
  onClose={() => setOpen(false)}
  mode="signin"
  error="Invalid credentials. Please check your email and password."
  onSubmit={() => {}}
/>`}
      />

      <SectionHeader id="loading">Loading State</SectionHeader>
      <ComponentDemo
        description="Set loading while the async onSubmit handler is running. Form inputs and the submit button are disabled automatically."
        preview={<LoadingDemo />}
        code={`const [open, setOpen] = useState(false)
const [loading, setLoading] = useState(false)

<AniccaAuthModal
  open={open}
  onClose={() => setOpen(false)}
  mode="signin"
  loading={loading}
  onSubmit={async (data) => {
    setLoading(true)
    await signIn(data.email, data.password!)
    setLoading(false)
    setOpen(false)
  }}
/>`}
      />

      <SectionHeader id="i18n">Custom Labels (i18n)</SectionHeader>
      <ComponentDemo
        description="Override any user-visible string via the labels prop. Keys not provided fall back to English defaults."
        preview={<I18nDemo />}
        code={`<AniccaAuthModal
  open={open}
  onClose={() => setOpen(false)}
  mode="signin"
  onSubmit={() => {}}
  labels={{
    signinTitle: 'Masuk',
    signinSubtitle: 'Masuk ke akun Anda',
    emailLabel: 'Email',
    emailPlaceholder: 'nama@email.com',
    passwordLabel: 'Kata Sandi',
    passwordPlaceholder: 'Minimal 8 karakter',
    signinCta: 'Masuk',
    forgotPassword: 'Lupa kata sandi?',
    toSignup: 'Belum punya akun? Daftar',
    divider: 'atau lanjutkan dengan',
  }}
/>`}
      />

      <SectionHeader id="submit-data">Submit Data Shape</SectionHeader>
      <CodeBlock
        language="tsx"
        code={`// onSubmit receives AniccaAuthModalSubmitData:
interface AniccaAuthModalSubmitData {
  mode: 'signin' | 'signup' | 'recover'
  email: string
  password?: string  // undefined in recover mode
  name?: string      // only present in signup mode
}

// Example handler:
onSubmit={async (data) => {
  if (data.mode === 'signin') {
    await signIn(data.email, data.password!)
  } else if (data.mode === 'signup') {
    await createAccount(data.name!, data.email, data.password!)
  } else {
    await sendRecoveryEmail(data.email)
  }
}}`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'open',              type: 'boolean',                                      required: true,  description: 'Controls modal visibility.' },
          { name: 'onClose',           type: '() => void',                                   required: true,  description: 'Called on backdrop click, Escape, or X button.' },
          { name: 'onSubmit',          type: '(data: AniccaAuthModalSubmitData) => void | Promise<void>', required: true, description: 'Called with form data on submit. Can be async.' },
          { name: 'mode',              type: "'signin' | 'signup' | 'recover'",              default: "'signin'", description: 'Which form is active.' },
          { name: 'onModeChange',      type: "(mode: AniccaAuthModalMode) => void",          description: 'Called when user clicks a mode-switch link inside the modal.' },
          { name: 'onGoogle',          type: '() => void',                                   description: 'Show Google button and call on click. Hidden if not provided.' },
          { name: 'onFacebook',        type: '() => void',                                   description: 'Show Facebook button and call on click. Hidden if not provided.' },
          { name: 'onApple',           type: '() => void',                                   description: 'Show Apple button and call on click. Hidden if not provided.' },
          { name: 'loading',           type: 'boolean',                                      default: 'false', description: 'Shows spinner, disables form while true.' },
          { name: 'error',             type: 'string',                                       description: 'Red error banner shown inside the modal.' },
          { name: 'labels',            type: 'AniccaAuthModalLabels',                        description: 'Override any user-visible string. See Labels Reference below.' },
          { name: 'disableEscapeKey',  type: 'boolean',                                      default: 'false', description: 'Prevent Escape key from closing.' },
          { name: 'disableBackdropClick', type: 'boolean',                                   default: 'false', description: 'Prevent backdrop click from closing.' },
        ]}
      />

      <SectionHeader id="labels">Labels Reference</SectionHeader>
      <p className="text-sm text-text-muted mb-4">
        All keys are optional. Unset keys fall back to English defaults.
      </p>
      <PropsTable
        props={[
          { name: 'signinTitle',       type: 'string', default: '"Welcome back"',          description: 'Sign-in modal heading.' },
          { name: 'signupTitle',       type: 'string', default: '"Create account"',        description: 'Sign-up modal heading.' },
          { name: 'recoverTitle',      type: 'string', default: '"Reset password"',        description: 'Recovery modal heading.' },
          { name: 'signinSubtitle',    type: 'string', default: '"Sign in to continue"',   description: 'Sign-in subtitle.' },
          { name: 'signupSubtitle',    type: 'string', default: '"Start your journey"',    description: 'Sign-up subtitle.' },
          { name: 'recoverSubtitle',   type: 'string', default: '"Enter your email"',      description: 'Recovery subtitle.' },
          { name: 'nameLabel',         type: 'string', default: '"Full name"',             description: 'Name field label (sign-up only).' },
          { name: 'emailLabel',        type: 'string', default: '"Email"',                 description: 'Email field label.' },
          { name: 'passwordLabel',     type: 'string', default: '"Password"',              description: 'Password field label.' },
          { name: 'signinCta',         type: 'string', default: '"Sign in"',               description: 'Sign-in submit button.' },
          { name: 'signupCta',         type: 'string', default: '"Create account"',        description: 'Sign-up submit button.' },
          { name: 'recoverCta',        type: 'string', default: '"Send reset link"',       description: 'Recovery submit button.' },
          { name: 'forgotPassword',    type: 'string', default: '"Forgot password?"',      description: 'Forgot password link.' },
          { name: 'divider',           type: 'string', default: '"or continue with"',      description: 'Social OAuth divider text.' },
          { name: 'toSignup',          type: 'string', default: '"Create an account"',     description: 'Link to switch to sign-up.' },
          { name: 'toSignin',          type: 'string', default: '"Sign in instead"',       description: 'Link to switch to sign-in.' },
          { name: 'toRecover',         type: 'string', default: '"Forgot your password?"', description: 'Link to switch to recovery.' },
        ]}
      />
    </DocPage>
  )
}
