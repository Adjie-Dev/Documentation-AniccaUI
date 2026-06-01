import React, { useState } from 'react'
import { AniccaPagination } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function PaginationDemo() {
  const [page, setPage] = useState(1)
  const totalPages = 10

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-sm text-text-muted font-medium">
        Page <span className="text-on-surface font-bold">{page}</span> of {totalPages}
      </p>
      <AniccaPagination
        page={page}
        pageCount={totalPages}
        onPageChange={setPage}
      />
    </div>
  )
}

export default function PaginationPage() {
  return (
    <DocPage
      title="Pagination"
      description="A controlled navigation component for splitting content across multiple pages. Supports ellipsis truncation and configurable visible page count."
      badge="Navigation"
      importLine="{ AniccaPagination } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic Usage</SectionHeader>
      <ComponentDemo
        title="Controlled Pagination"
        description="Manage the current page with useState. The component calls onPageChange whenever the user navigates."
        centered={false}
        preview={<PaginationDemo />}
        code={`function PaginationDemo() {
  const [page, setPage] = useState(1)

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-text-muted">
        Page <span className="font-bold">{page}</span> of 10
      </p>
      <AniccaPagination
        page={page}
        pageCount={10}
        onPageChange={setPage}
      />
    </div>
  )
}`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'currentPage',
            type: 'number',
            required: true,
            description: 'The currently active page (1-based index).',
          },
          {
            name: 'totalPages',
            type: 'number',
            required: true,
            description: 'Total number of pages available.',
          },
          {
            name: 'onPageChange',
            type: '(page: number) => void',
            required: true,
            description: 'Callback invoked with the new page number when the user navigates.',
          },
          {
            name: 'maxVisible',
            type: 'number',
            default: '5',
            description: 'Maximum number of page buttons to show before collapsing to ellipsis.',
          },
        ]}
      />
    </DocPage>
  )
}
