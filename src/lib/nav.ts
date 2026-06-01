export interface NavItem {
  label: string
  icon?: string
  href: string
  children?: NavItem[]
}

export const navItems: NavItem[] = [
  { label: 'Getting Started', icon: 'home', href: '/' },
  { label: 'Theming', icon: 'palette', href: '/theming' },
  { label: 'Icons', icon: 'category', href: '/icons' },
  { label: 'Maps', icon: 'map', href: '/maps' },
  {
    label: 'Primitives', icon: 'widgets', href: '/primitives/button',
    children: [
      { label: 'Button', href: '/primitives/button' },
      { label: 'Input', href: '/primitives/input' },
      { label: 'Textarea', href: '/primitives/textarea' },
      { label: 'Select', href: '/primitives/select' },
      { label: 'Checkbox', href: '/primitives/checkbox' },
      { label: 'Radio', href: '/primitives/radio' },
      { label: 'Switch', href: '/primitives/switch' },
    ],
  },
  {
    label: 'Data Display', icon: 'table_chart', href: '/data/badge',
    children: [
      { label: 'Badge', href: '/data/badge' },
      { label: 'Avatar', href: '/data/avatar' },
      { label: 'Spinner', href: '/data/spinner' },
      { label: 'Skeleton', href: '/data/skeleton' },
      { label: 'Pagination', href: '/data/pagination' },
    ],
  },
  {
    label: 'Layout', icon: 'view_quilt', href: '/layout/card',
    children: [
      { label: 'Card', href: '/layout/card' },
      { label: 'Grid', href: '/layout/grid' },
      { label: 'Stack', href: '/layout/stack' },
      { label: 'Divider', href: '/layout/divider' },
    ],
  },
  {
    label: 'Feedback', icon: 'notifications', href: '/feedback/alert',
    children: [
      { label: 'Alert', href: '/feedback/alert' },
      { label: 'Toast', href: '/feedback/toast' },
      { label: 'Popup', href: '/feedback/popup' },
      { label: 'Tooltip', href: '/feedback/tooltip' },
      { label: 'Popover', href: '/feedback/popover' },
    ],
  },
  {
    label: 'Overlay', icon: 'layers', href: '/overlay/modal',
    children: [
      { label: 'Modal', href: '/overlay/modal' },
      { label: 'Drawer', href: '/overlay/drawer' },
      { label: 'Dropdown', href: '/overlay/dropdown' },
      { label: 'Menu', href: '/overlay/menu' },
      { label: 'Combobox', href: '/overlay/combobox' },
    ],
  },
  {
    label: 'Dashboard', icon: 'dashboard', href: '/dashboard/stat-card',
    children: [
      { label: 'Navbar', href: '/dashboard/navbar' },
      { label: 'StatCard', href: '/dashboard/stat-card' },
      { label: 'ChartWrapper', href: '/dashboard/chart-wrapper' },
      { label: 'DataTable', href: '/dashboard/data-table' },
      { label: 'Tabs', href: '/dashboard/tabs' },
      { label: 'ActivityFeed', href: '/dashboard/activity-feed' },
      { label: 'ProgressCard', href: '/dashboard/progress-card' },
      { label: 'Breadcrumb', href: '/dashboard/breadcrumb' },
    ],
  },
  {
    label: 'Auth', icon: 'lock', href: '/auth/auth-modal',
    children: [
      { label: 'AuthModal', href: '/auth/auth-modal' },
    ],
  },
  {
    label: 'Hooks', icon: 'settings_applications', href: '/hooks/use-anicca-form',
    children: [
      { label: 'useAniccaForm', href: '/hooks/use-anicca-form' },
      { label: 'useAniccaDate', href: '/hooks/use-anicca-date' },
      { label: 'useAniccaUtils', href: '/hooks/use-anicca-utils' },
      { label: 'useAniccaToast', href: '/hooks/use-anicca-toast' },
      { label: 'useAniccaPopup', href: '/hooks/use-anicca-popup' },
    ],
  },
]
