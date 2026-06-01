import React, { useState } from 'react'
import { useAniccaDate, AniccaInput } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import SectionHeader from '../../components/SectionHeader'
import PropsTable from '../../components/PropsTable'

function DateExplorer() {
  const [inputValue, setInputValue] = useState(new Date().toISOString().slice(0, 10))
  const { date, setDate, format, relative, diff, isValid } = useAniccaDate(inputValue)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setDate(e.target.value)
  }

  const today = new Date()
  const daysFromToday = date ? diff(today, 'days') : null

  return (
    <div className="w-full max-w-sm space-y-4">
      <AniccaInput
        label="Pick a date"
        type="date"
        value={inputValue}
        onChange={handleInput}
      />
      {isValid() && date ? (
        <div className="rounded-lg border border-outline-variant/30 bg-surface-container p-4 space-y-2 text-sm">
          <Row label="DD/MM/YYYY" value={format('DD/MM/YYYY')} />
          <Row label="Long format" value={format('MMMM DD, YYYY')} />
          <Row label="Relative" value={relative()} />
          <Row
            label="Days from today"
            value={
              daysFromToday === 0
                ? 'Today'
                : `${Math.abs(daysFromToday!)} day${Math.abs(daysFromToday!) !== 1 ? 's' : ''} ${
                    daysFromToday! > 0 ? 'in the future' : 'ago'
                  }`
            }
          />
        </div>
      ) : (
        <p className="text-sm text-text-muted">Select a valid date to see output.</p>
      )}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-text-muted shrink-0">{label}</span>
      <span className="font-mono text-text text-right">{value}</span>
    </div>
  )
}

export default function UseAniccaDatePage() {
  return (
    <DocPage
      title="useAniccaDate"
      description="A stateful date hook that provides formatting, relative time, arithmetic, and comparison operations, all without external dependencies."
      badge="Hooks"
      importLine="import { useAniccaDate } from 'anicca-ui'"
    >
      <SectionHeader id="demo">Interactive explorer</SectionHeader>
      <ComponentDemo
        title="Date explorer"
        description="Pick any date and see how the hook formats, relativizes, and compares it."
        centered={false}
        preview={<DateExplorer />}
        code={`const { date, setDate, format, relative, diff, isValid } = useAniccaDate('2025-01-15')

// Format with tokens
format('DD/MM/YYYY')        // "15/01/2025"
format('MMMM DD, YYYY')     // "January 15, 2025"

// Relative time
relative()                  // "6 months ago"

// Diff from today
diff(new Date(), 'days')    // -180

// Validation
isValid()                   // true`}
      />

      <SectionHeader id="api">Hook API</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'date',
            type: 'Date | null',
            description: 'Current date state.',
          },
          {
            name: 'setDate',
            type: '(date: Date | string | null) => void',
            description: 'Update the date state. Accepts a Date object, ISO string, or null.',
          },
          {
            name: 'format',
            type: "(format: string, locale?: 'id' | 'en') => string",
            description: "Format the date with tokens like 'DD/MM/YYYY' or 'MMMM DD, YYYY'.",
          },
          {
            name: 'relative',
            type: "(locale?: 'id' | 'en') => string",
            description: "Get a human-readable relative string like '3 hours ago' or 'in 2 days'.",
          },
          {
            name: 'diff',
            type: "(date2: Date | string, unit: 'days' | 'hours' | 'minutes' | 'seconds' | 'months' | 'years') => number",
            description: 'Compute the signed difference between the current date and date2.',
          },
          {
            name: 'add',
            type: "(amount: number, unit: 'days' | 'hours' | 'minutes' | 'months' | 'years') => Date",
            description: 'Return a new Date with the given amount added (does not mutate state).',
          },
          {
            name: 'isValid',
            type: '() => boolean',
            description: 'Return true if the current date is a valid Date object.',
          },
          {
            name: 'isBefore',
            type: '(date2: Date | string) => boolean',
            description: 'Return true if the current date is strictly before date2.',
          },
          {
            name: 'isAfter',
            type: '(date2: Date | string) => boolean',
            description: 'Return true if the current date is strictly after date2.',
          },
        ]}
      />
    </DocPage>
  )
}
