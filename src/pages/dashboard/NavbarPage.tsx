import React from 'react'
import { AniccaNavbar } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function NavbarPage() {
  return (
    <DocPage
      title="Navbar"
      description="A sticky glassmorphism top navigation bar with built-in support for a title, logo, user identity, and right-side action slots. Designed to sit at the top of a dashboard layout."
      badge="Dashboard"
      importLine="import { AniccaNavbar } from 'anicca-ui'"
    >
      <SectionHeader id="basic">Basic</SectionHeader>
      <ComponentDemo
        title="Title only"
        description="The simplest usage: just a page title inside the navbar."
        centered={false}
        preview={
          <div className="rounded-xl border border-outline-variant/40 overflow-hidden">
            <AniccaNavbar title="Dashboard" />
          </div>
        }
        code={`<AniccaNavbar title="Dashboard" />`}
      />

      <SectionHeader id="with-user">With User</SectionHeader>
      <ComponentDemo
        title="User identity"
        description="Pass a user object to display gradient avatar initials alongside the user name and optional role."
        centered={false}
        preview={
          <div className="rounded-xl border border-outline-variant/40 overflow-hidden">
            <AniccaNavbar
              title="Dashboard"
              user={{ name: 'Sarah Connor', role: 'Administrator' }}
            />
          </div>
        }
        code={`<AniccaNavbar
  title="Dashboard"
  user={{ name: 'Sarah Connor', role: 'Administrator' }}
/>`}
      />

      <SectionHeader id="with-actions">With Actions</SectionHeader>
      <ComponentDemo
        title="Right-side action slot"
        description="Render any content in the actions slot. Icon buttons work well here."
        centered={false}
        preview={
          <div className="rounded-xl border border-outline-variant/40 overflow-hidden">
            <AniccaNavbar
              title="Dashboard"
              actions={
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      search
                    </span>
                  </button>
                  <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      notifications
                    </span>
                  </button>
                </div>
              }
            />
          </div>
        }
        code={`<AniccaNavbar
  title="Dashboard"
  actions={
    <div className="flex items-center gap-1">
      <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
      </button>
      <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
      </button>
    </div>
  }
/>`}
      />

      <SectionHeader id="with-logo">With Logo</SectionHeader>
      <ComponentDemo
        title="Custom logo"
        description="Supply any ReactNode as the logo prop. It appears on the left side of the navbar."
        centered={false}
        preview={
          <div className="rounded-xl border border-outline-variant/40 overflow-hidden">
            <AniccaNavbar
              title="Dashboard"
              logo={
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-on-primary">B</span>
                  </div>
                  <span className="text-sm font-semibold text-text">Brand</span>
                </div>
              }
            />
          </div>
        }
        code={`<AniccaNavbar
  title="Dashboard"
  logo={
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
        <span className="text-xs font-bold text-on-primary">B</span>
      </div>
      <span className="text-sm font-semibold text-text">Brand</span>
    </div>
  }
/>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'title',
            type: 'string',
            description: 'Page title displayed in the center or left area of the navbar.',
          },
          {
            name: 'logo',
            type: 'ReactNode',
            description: 'Logo element rendered on the far left of the navbar.',
          },
          {
            name: 'actions',
            type: 'ReactNode',
            description: 'Content rendered on the right side of the navbar, such as icon buttons.',
          },
          {
            name: 'user',
            type: '{ name: string; avatar?: string; role?: string }',
            description:
              'User identity object. Displays a gradient avatar with initials derived from name, the user name, and an optional role label.',
          },
          {
            name: 'onMenuToggle',
            type: '() => void',
            description: 'Callback fired when the hamburger menu button is clicked.',
          },
          {
            name: 'labels',
            type: "{ toggleMenu?: string }",
            description: 'Override the accessible label for the menu toggle button.',
          },
        ]}
      />
    </DocPage>
  )
}
