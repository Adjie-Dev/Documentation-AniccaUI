import React from 'react'
import { AniccaDataTable, AniccaBadge } from 'anicca-ui'
import type { AniccaColumn } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const users: User[] = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'inactive' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Viewer', status: 'active' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'Editor', status: 'pending' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'active' },
  { id: 6, name: 'Frank Wilson', email: 'frank@example.com', role: 'Viewer', status: 'inactive' },
  { id: 7, name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'active' },
  { id: 8, name: 'Henry Martinez', email: 'henry@example.com', role: 'Viewer', status: 'pending' },
  { id: 9, name: 'Iris Taylor', email: 'iris@example.com', role: 'Editor', status: 'active' },
  { id: 10, name: 'Jack Anderson', email: 'jack@example.com', role: 'Admin', status: 'active' },
]

const columns: AniccaColumn<User>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status',
    label: 'Status',
    render: (v) => (
      <AniccaBadge
        variant={v === 'active' ? 'success' : v === 'pending' ? 'warning' : 'neutral'}
        appearance="soft"
        size="sm"
      >
        {String(v)}
      </AniccaBadge>
    ),
  },
]

export default function DataTablePage() {
  return (
    <DocPage
      title="DataTable"
      description="A full-featured data table with built-in search filtering, column sorting, and pagination. Zero dependencies beyond React."
      badge="Dashboard"
      importLine="import { AniccaDataTable } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        title="Users table"
        description="10 rows with sortable columns, search filtering enabled, and 5 rows per page."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaDataTable
              data={users}
              columns={columns}
              searchable
              pageSize={5}
            />
          </div>
        }
        code={`interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

const columns: AniccaColumn<User>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status',
    label: 'Status',
    render: (v) => (
      <AniccaBadge
        variant={v === 'active' ? 'success' : v === 'pending' ? 'warning' : 'neutral'}
        appearance="soft"
        size="sm"
      >
        {String(v)}
      </AniccaBadge>
    ),
  },
]

<AniccaDataTable data={users} columns={columns} searchable pageSize={5} />`}
      />

      <SectionHeader id="page-size">Custom pageSize</SectionHeader>
      <ComponentDemo
        title="3 rows per page"
        description="Change the pageSize prop to control how many rows appear per page."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaDataTable
              data={users}
              columns={columns}
              searchable
              pageSize={3}
            />
          </div>
        }
        code={`<AniccaDataTable data={users} columns={columns} searchable pageSize={3} />`}
      />

      <SectionHeader id="no-search">Search disabled</SectionHeader>
      <ComponentDemo
        title="No search bar"
        description="Set searchable={false} to hide the search input above the table."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaDataTable
              data={users}
              columns={columns}
              searchable={false}
              pageSize={5}
            />
          </div>
        }
        code={`<AniccaDataTable data={users} columns={columns} searchable={false} pageSize={5} />`}
      />

      <SectionHeader id="loading">Loading state</SectionHeader>
      <ComponentDemo
        title="Empty / loading"
        description="Pass an empty data array and a custom emptyMessage label to represent a loading state while data fetches."
        centered={false}
        preview={
          <div className="w-full">
            <AniccaDataTable
              data={[]}
              columns={columns}
              searchable
              pageSize={5}
              labels={{ emptyMessage: 'Loading data...' }}
            />
          </div>
        }
        code={`<AniccaDataTable
  data={[]}
  columns={columns}
  searchable
  pageSize={5}
  labels={{ emptyMessage: 'Loading data...' }}
/>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'data',
            type: 'T[]',
            required: true,
            description: 'Array of row objects. The generic type T is inferred from data.',
          },
          {
            name: 'columns',
            type: 'AniccaColumn<T>[]',
            required: true,
            description: 'Column definitions. Each column: { key, label, sortable?, render?, width? }.',
          },
          {
            name: 'searchable',
            type: 'boolean',
            default: 'true',
            description: 'Show the search input above the table.',
          },
          {
            name: 'searchPlaceholder',
            type: 'string',
            description: 'Placeholder text for the search input.',
          },
          {
            name: 'pageSize',
            type: 'number',
            default: '5',
            description: 'Number of rows per page.',
          },
          {
            name: 'labels',
            type: 'AniccaDataTableLabels',
            description: 'Override built-in strings such as emptyMessage and searchPlaceholder.',
          },
          {
            name: 'className',
            type: 'string',
            description: 'Additional classes applied to the table container.',
          },
        ]}
      />

      <SectionHeader id="column-props">AniccaColumn props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'key',
            type: 'keyof T & string',
            required: true,
            description: 'The property name on the row object used to read this column value.',
          },
          {
            name: 'label',
            type: 'string',
            required: true,
            description: 'Header text shown in the column heading.',
          },
          {
            name: 'sortable',
            type: 'boolean',
            default: 'false',
            description: 'Enables click-to-sort on this column header.',
          },
          {
            name: 'render',
            type: '(value: T[keyof T], row: T) => ReactNode',
            description: 'Custom render function for the cell. Receives the raw value and the full row object.',
          },
          {
            name: 'width',
            type: 'string',
            description: 'CSS width value applied to the column (e.g. "120px", "20%").',
          },
        ]}
      />
    </DocPage>
  )
}
