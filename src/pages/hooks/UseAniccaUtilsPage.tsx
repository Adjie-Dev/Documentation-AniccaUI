import React, { useState, useEffect, useRef } from 'react'
import { useAniccaUtils, AniccaInput, AniccaButton, AniccaAlert } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import SectionHeader from '../../components/SectionHeader'
import PropsTable from '../../components/PropsTable'

function DebounceDemo() {
  const { debounce } = useAniccaUtils()
  const [raw, setRaw] = useState('')
  const [debounced, setDebounced] = useState('')

  const debouncedSet = useRef(debounce((val: string) => setDebounced(val), 300)).current

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaw(e.target.value)
    debouncedSet(e.target.value)
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <AniccaInput label="Type something" value={raw} onChange={handleChange} placeholder="Type fast…" />
      <p className="text-sm text-text-muted">
        Debounced value (300ms):{' '}
        <span className="font-mono font-semibold text-text">{debounced || ''}</span>
      </p>
    </div>
  )
}

function SlugifyDemo() {
  const { slugify } = useAniccaUtils()
  const [input, setInput] = useState('Hello World from anicca-ui!')

  return (
    <div className="w-full max-w-sm space-y-2">
      <AniccaInput
        label="Input text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to slugify"
      />
      <p className="text-sm text-text-muted">
        Slug:{' '}
        <span className="font-mono font-semibold text-text">{slugify(input) || ''}</span>
      </p>
    </div>
  )
}

function TruncateDemo() {
  const { truncate } = useAniccaUtils()
  const [input, setInput] = useState('This is a long sentence that will be truncated at 20 characters.')

  return (
    <div className="w-full max-w-sm space-y-2">
      <AniccaInput
        label="Input text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to truncate"
      />
      <p className="text-sm text-text-muted">
        Truncated at 20 chars:{' '}
        <span className="font-mono font-semibold text-text">{truncate(input, 20)}</span>
      </p>
    </div>
  )
}

function CopyDemo() {
  const { copyToClipboard } = useAniccaUtils()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await copyToClipboard('Hello from anicca-ui!')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-2">
      <AniccaButton onClick={handleCopy} variant={copied ? 'primary' : 'outline'}>
        {copied ? 'Copied!' : 'Copy to clipboard'}
      </AniccaButton>
      <p className="text-xs text-text-muted">Copies: "Hello from anicca-ui!"</p>
    </div>
  )
}

export default function UseAniccaUtilsPage() {
  return (
    <DocPage
      title="useAniccaUtils"
      description="A memoized bag of utility functions including debounce, throttle, slugify, truncate, clipboard, deep clone, and more."
      badge="Hooks"
      importLine="import { useAniccaUtils } from 'anicca-ui'"
    >
      <SectionHeader id="debounce">Debounce</SectionHeader>
      <ComponentDemo
        title="Debounced input"
        description="Type quickly, the debounced value only updates 300ms after you stop typing."
        centered={false}
        preview={<DebounceDemo />}
        code={`const { debounce } = useAniccaUtils()

// Create once with useRef to avoid re-creating on every render
const debouncedSearch = useRef(debounce((val: string) => {
  setSearchQuery(val)
}, 300)).current`}
      />

      <SectionHeader id="slugify">Slugify</SectionHeader>
      <ComponentDemo
        title="String to slug"
        description="Converts any string to a URL-safe lowercase slug."
        centered={false}
        preview={<SlugifyDemo />}
        code={`const { slugify } = useAniccaUtils()

slugify('Hello World!')        // "hello-world"
slugify('React & TypeScript')  // "react-typescript"`}
      />

      <SectionHeader id="truncate">Truncate</SectionHeader>
      <ComponentDemo
        title="Truncate string"
        description="Clips a string at the given character limit and appends '…'."
        centered={false}
        preview={<TruncateDemo />}
        code={`const { truncate } = useAniccaUtils()

truncate('Hello World!', 8)    // "Hello Wo…"
truncate('Short', 20)          // "Short"`}
      />

      <SectionHeader id="clipboard">Copy to clipboard</SectionHeader>
      <ComponentDemo
        title="Clipboard API"
        description="Copies text to the user's clipboard using the Clipboard API."
        preview={<CopyDemo />}
        code={`const { copyToClipboard } = useAniccaUtils()

await copyToClipboard('Hello from anicca-ui!')
// text is now in the user's clipboard`}
      />

      <SectionHeader id="api">Full API</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'debounce',
            type: '(fn: Function, delay: number) => Function',
            description: 'Returns a debounced version of fn that delays invocation by delay ms.',
          },
          {
            name: 'throttle',
            type: '(fn: Function, limit: number) => Function',
            description: 'Returns a throttled version of fn that fires at most once per limit ms.',
          },
          {
            name: 'slugify',
            type: '(str: string) => string',
            description: 'Converts a string to a lowercase, hyphenated URL slug.',
          },
          {
            name: 'truncate',
            type: '(str: string, maxLength: number) => string',
            description: "Clips str to maxLength characters and appends '…' if truncated.",
          },
          {
            name: 'copyToClipboard',
            type: '(text: string) => Promise<void>',
            description: "Writes text to the user's clipboard via the Clipboard API.",
          },
          {
            name: 'capitalize',
            type: '(str: string) => string',
            description: 'Capitalizes the first letter of a string.',
          },
          {
            name: 'deepClone',
            type: '<T>(obj: T) => T',
            description: 'Returns a deep clone of an object (structuredClone or JSON fallback).',
          },
          {
            name: 'groupBy',
            type: '<T>(arr: T[], key: keyof T) => Record<string, T[]>',
            description: 'Groups an array of objects by a key.',
          },
          {
            name: 'uniqueBy',
            type: '<T>(arr: T[], key: keyof T) => T[]',
            description: 'Removes duplicate objects from an array by a key.',
          },
        ]}
      />
    </DocPage>
  )
}
