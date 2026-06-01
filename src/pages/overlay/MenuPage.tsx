import React from 'react'
import {
  AniccaMenu,
  AniccaMenuItem,
  AniccaMenuDivider,
  AniccaMenuLabel,
  AniccaDropdown,
  AniccaButton,
} from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

function Ms({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
      {name}
    </span>
  )
}

export default function MenuPage() {
  return (
    <DocPage
      title="Menu"
      description="A compound set of components for building accessible menu lists. AniccaMenu is the container, AniccaMenuItem the interactive row, AniccaMenuDivider the separator, and AniccaMenuLabel the section heading. Use them standalone or inside AniccaDropdown."
      badge="Overlay"
      importLine="import { AniccaMenu, AniccaMenuItem, AniccaMenuDivider, AniccaMenuLabel } from 'anicca-ui'"
    >
      <SectionHeader id="standalone">Standalone menu</SectionHeader>
      <ComponentDemo
        title="Full-featured menu"
        description="AniccaMenu can be used without a dropdown - render it directly wherever you need a menu list."
        centered={false}
        preview={
          <div className="w-52 border border-outline-variant/40 rounded-xl overflow-hidden bg-surface">
            <AniccaMenu>
              <AniccaMenuLabel>Account</AniccaMenuLabel>
              <AniccaMenuItem leftIcon={<Ms name="person" />}>Profile</AniccaMenuItem>
              <AniccaMenuItem leftIcon={<Ms name="settings" />}>Settings</AniccaMenuItem>
              <AniccaMenuDivider />
              <AniccaMenuLabel>Actions</AniccaMenuLabel>
              <AniccaMenuItem leftIcon={<Ms name="download" />} shortcut="Cmd S">
                Export
              </AniccaMenuItem>
              <AniccaMenuItem destructive leftIcon={<Ms name="delete" />}>
                Delete
              </AniccaMenuItem>
            </AniccaMenu>
          </div>
        }
        code={`<AniccaMenu>
  <AniccaMenuLabel>Account</AniccaMenuLabel>
  <AniccaMenuItem
    leftIcon={<span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person</span>}
  >
    Profile
  </AniccaMenuItem>
  <AniccaMenuItem
    leftIcon={<span className="material-symbols-outlined" style={{ fontSize: '16px' }}>settings</span>}
  >
    Settings
  </AniccaMenuItem>
  <AniccaMenuDivider />
  <AniccaMenuLabel>Actions</AniccaMenuLabel>
  <AniccaMenuItem
    leftIcon={<span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>}
    shortcut="Cmd S"
  >
    Export
  </AniccaMenuItem>
  <AniccaMenuItem
    destructive
    leftIcon={<span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>}
  >
    Delete
  </AniccaMenuItem>
</AniccaMenu>`}
      />

      <SectionHeader id="in-dropdown">Inside Dropdown</SectionHeader>
      <ComponentDemo
        title="Dropdown with menu"
        description="Pair AniccaMenu with AniccaDropdown to create a floating context menu anchored to any trigger."
        preview={
          <AniccaDropdown
            content={
              <AniccaMenu>
                <AniccaMenuLabel>File</AniccaMenuLabel>
                <AniccaMenuItem leftIcon={<Ms name="edit" />}>Edit</AniccaMenuItem>
                <AniccaMenuItem leftIcon={<Ms name="content_copy" />} shortcut="Cmd D">
                  Duplicate
                </AniccaMenuItem>
                <AniccaMenuDivider />
                <AniccaMenuItem destructive leftIcon={<Ms name="delete" />}>
                  Delete
                </AniccaMenuItem>
              </AniccaMenu>
            }
          >
            <AniccaButton variant="outline">Open Menu</AniccaButton>
          </AniccaDropdown>
        }
        code={`<AniccaDropdown
  content={
    <AniccaMenu>
      <AniccaMenuLabel>File</AniccaMenuLabel>
      <AniccaMenuItem
        leftIcon={<span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>}
      >
        Edit
      </AniccaMenuItem>
      <AniccaMenuItem
        leftIcon={<span className="material-symbols-outlined" style={{ fontSize: '16px' }}>content_copy</span>}
        shortcut="Cmd D"
      >
        Duplicate
      </AniccaMenuItem>
      <AniccaMenuDivider />
      <AniccaMenuItem
        destructive
        leftIcon={<span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>}
      >
        Delete
      </AniccaMenuItem>
    </AniccaMenu>
  }
>
  <AniccaButton variant="outline">Open Menu</AniccaButton>
</AniccaDropdown>`}
      />

      <SectionHeader id="props">AniccaMenuItem props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'leftIcon',
            type: 'ReactNode',
            description: 'Icon element rendered to the left of the menu item label.',
          },
          {
            name: 'rightIcon',
            type: 'ReactNode',
            description: 'Icon element rendered to the right of the menu item label.',
          },
          {
            name: 'destructive',
            type: 'boolean',
            default: 'false',
            description: 'When true, renders the item in a danger/red color to indicate a destructive action.',
          },
          {
            name: 'shortcut',
            type: 'string',
            description: 'Keyboard shortcut label rendered on the right side of the item.',
          },
        ]}
      />
    </DocPage>
  )
}
