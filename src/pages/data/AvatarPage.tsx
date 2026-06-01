import React from 'react'
import { AniccaAvatar, AniccaAvatarGroup } from 'anicca-ui'
import DocPage from '../../components/DocPage'
import ComponentDemo from '../../components/ComponentDemo'
import PropsTable from '../../components/PropsTable'
import SectionHeader from '../../components/SectionHeader'

export default function AvatarPage() {
  return (
    <DocPage
      title="Avatar"
      description="Displays a user's profile image with intelligent fallback to initials. Supports shapes, sizes, status indicators, and grouped stacking."
      badge="Data Display"
      importLine="{ AniccaAvatar, AniccaAvatarGroup } from 'anicca-ui'"
    >
      <SectionHeader id="initials">Initials Fallback</SectionHeader>
      <ComponentDemo
        title="Name-based Initials"
        description="When no image src is provided, AniccaAvatar derives initials from the name prop."
        preview={<AniccaAvatar name="John Doe" />}
        code={`<AniccaAvatar name="John Doe" />`}
      />

      <SectionHeader id="shapes">Shapes</SectionHeader>
      <ComponentDemo
        title="Shape Variants"
        description="Three border-radius styles: circle, rounded, and square."
        preview={
          <div className="flex items-center gap-4">
            <AniccaAvatar name="Circle" shape="circle" />
            <AniccaAvatar name="Rounded" shape="rounded" />
            <AniccaAvatar name="Square" shape="square" />
          </div>
        }
        code={`<AniccaAvatar name="Circle" shape="circle" />
<AniccaAvatar name="Rounded" shape="rounded" />
<AniccaAvatar name="Square" shape="square" />`}
      />

      <SectionHeader id="sizes">Sizes</SectionHeader>
      <ComponentDemo
        title="Size Scale"
        description="Five sizes from xs to xl."
        preview={
          <div className="flex items-end gap-3">
            <AniccaAvatar name="XS" size="xs" />
            <AniccaAvatar name="SM" size="sm" />
            <AniccaAvatar name="MD" size="md" />
            <AniccaAvatar name="LG" size="lg" />
            <AniccaAvatar name="XL" size="xl" />
          </div>
        }
        code={`<AniccaAvatar name="XS" size="xs" />
<AniccaAvatar name="SM" size="sm" />
<AniccaAvatar name="MD" size="md" />
<AniccaAvatar name="LG" size="lg" />
<AniccaAvatar name="XL" size="xl" />`}
      />

      <SectionHeader id="status">Status Indicators</SectionHeader>
      <ComponentDemo
        title="Presence Status"
        description="Display online presence with colored status badges."
        preview={
          <div className="flex items-center gap-4">
            <AniccaAvatar name="Online" status="online" />
            <AniccaAvatar name="Busy" status="busy" />
            <AniccaAvatar name="Away" status="away" />
            <AniccaAvatar name="Offline" status="offline" />
          </div>
        }
        code={`<AniccaAvatar name="Online" status="online" />
<AniccaAvatar name="Busy" status="busy" />
<AniccaAvatar name="Away" status="away" />
<AniccaAvatar name="Offline" status="offline" />`}
      />

      <SectionHeader id="group">Avatar Group</SectionHeader>
      <ComponentDemo
        title="AniccaAvatarGroup"
        description="Stack multiple avatars with an overflow count when they exceed the max prop."
        preview={
          <AniccaAvatarGroup max={3}>
            <AniccaAvatar name="Alice Kim" />
            <AniccaAvatar name="Bob Torres" />
            <AniccaAvatar name="Carol White" />
            <AniccaAvatar name="David Lee" />
          </AniccaAvatarGroup>
        }
        code={`<AniccaAvatarGroup max={3}>
  <AniccaAvatar name="Alice Kim" />
  <AniccaAvatar name="Bob Torres" />
  <AniccaAvatar name="Carol White" />
  <AniccaAvatar name="David Lee" />
</AniccaAvatarGroup>`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          {
            name: 'src',
            type: 'string',
            description: 'URL of the avatar image. Falls back to initials if omitted or fails to load.',
          },
          {
            name: 'alt',
            type: 'string',
            description: 'Accessible alt text for the image.',
          },
          {
            name: 'name',
            type: 'string',
            description: 'Full name used to generate initials when no image is available.',
          },
          {
            name: 'size',
            type: '"xs" | "sm" | "md" | "lg" | "xl"',
            default: '"md"',
            description: 'Controls the diameter of the avatar.',
          },
          {
            name: 'shape',
            type: '"circle" | "rounded" | "square"',
            default: '"circle"',
            description: 'Border-radius style of the avatar.',
          },
          {
            name: 'status',
            type: '"online" | "busy" | "away" | "offline"',
            description: 'When set, renders a colored presence indicator badge.',
          },
        ]}
      />
    </DocPage>
  )
}
