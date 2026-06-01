import React from 'react'

interface PropRow {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

export default function PropsTable({ props }: { props: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-outline-variant/40 mb-8">
      <table className="w-full text-[0.8rem]">
        <thead>
          <tr className="bg-surface-container">
            <th className="text-left px-4 py-3 font-semibold text-text-muted">Prop</th>
            <th className="text-left px-4 py-3 font-semibold text-text-muted">Type</th>
            <th className="text-left px-4 py-3 font-semibold text-text-muted">Default</th>
            <th className="text-left px-4 py-3 font-semibold text-text-muted">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => (
            <tr
              key={p.name}
              className="border-t border-outline-variant/20 hover:bg-surface-muted/30 transition-colors"
            >
              <td className="px-4 py-3">
                <code className="text-primary font-mono font-medium">{p.name}</code>
                {p.required && <span className="ml-1 text-danger text-[0.68rem] font-bold">*</span>}
              </td>
              <td className="px-4 py-3">
                <code className="text-violet font-mono text-[0.75rem] bg-violet/10 px-1.5 py-0.5 rounded">
                  {p.type}
                </code>
              </td>
              <td className="px-4 py-3 text-text-muted font-mono text-[0.75rem]">
                {p.default ?? '-'}
              </td>
              <td className="px-4 py-3 text-text-muted">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
