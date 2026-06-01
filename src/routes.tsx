import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AniccaSpinner } from 'anicca-ui'

const Fallback = () => (
  <div className="flex items-center justify-center h-64">
    <AniccaSpinner size="lg" />
  </div>
)

const w = (fn: () => Promise<{ default: React.ComponentType }>) => {
  const Comp = lazy(fn)
  return (
    <Suspense fallback={<Fallback />}>
      <Comp />
    </Suspense>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={w(() => import('./pages/GettingStarted'))} />
      <Route path="/theming" element={w(() => import('./pages/Theming'))} />
      <Route path="/icons" element={w(() => import('./pages/IconsPage'))} />
      <Route path="/maps" element={w(() => import('./pages/MapsPage'))} />

      {/* Primitives */}
      <Route path="/primitives/button" element={w(() => import('./pages/primitives/ButtonPage'))} />
      <Route path="/primitives/input" element={w(() => import('./pages/primitives/InputPage'))} />
      <Route path="/primitives/textarea" element={w(() => import('./pages/primitives/TextareaPage'))} />
      <Route path="/primitives/select" element={w(() => import('./pages/primitives/SelectPage'))} />
      <Route path="/primitives/checkbox" element={w(() => import('./pages/primitives/CheckboxPage'))} />
      <Route path="/primitives/radio" element={w(() => import('./pages/primitives/RadioPage'))} />
      <Route path="/primitives/switch" element={w(() => import('./pages/primitives/SwitchPage'))} />

      {/* Data Display */}
      <Route path="/data/badge" element={w(() => import('./pages/data/BadgePage'))} />
      <Route path="/data/avatar" element={w(() => import('./pages/data/AvatarPage'))} />
      <Route path="/data/spinner" element={w(() => import('./pages/data/SpinnerPage'))} />
      <Route path="/data/skeleton" element={w(() => import('./pages/data/SkeletonPage'))} />
      <Route path="/data/pagination" element={w(() => import('./pages/data/PaginationPage'))} />

      {/* Layout */}
      <Route path="/layout/card" element={w(() => import('./pages/layout/CardPage'))} />
      <Route path="/layout/stack" element={w(() => import('./pages/layout/StackPage'))} />
      <Route path="/layout/grid" element={w(() => import('./pages/layout/GridPage'))} />
      <Route path="/layout/divider" element={w(() => import('./pages/layout/DividerPage'))} />

      {/* Feedback */}
      <Route path="/feedback/alert" element={w(() => import('./pages/feedback/AlertPage'))} />
      <Route path="/feedback/toast" element={w(() => import('./pages/feedback/ToastPage'))} />
      <Route path="/feedback/popup" element={w(() => import('./pages/feedback/PopupPage'))} />
      <Route path="/feedback/tooltip" element={w(() => import('./pages/feedback/TooltipPage'))} />
      <Route path="/feedback/popover" element={w(() => import('./pages/feedback/PopoverPage'))} />

      {/* Overlay */}
      <Route path="/overlay/modal" element={w(() => import('./pages/overlay/ModalPage'))} />
      <Route path="/overlay/drawer" element={w(() => import('./pages/overlay/DrawerPage'))} />
      <Route path="/overlay/dropdown" element={w(() => import('./pages/overlay/DropdownPage'))} />
      <Route path="/overlay/menu" element={w(() => import('./pages/overlay/MenuPage'))} />
      <Route path="/overlay/combobox" element={w(() => import('./pages/overlay/ComboboxPage'))} />

      {/* Dashboard */}
      <Route path="/dashboard/navbar" element={w(() => import('./pages/dashboard/NavbarPage'))} />
      <Route path="/dashboard/stat-card" element={w(() => import('./pages/dashboard/StatCardPage'))} />
      <Route path="/dashboard/chart-wrapper" element={w(() => import('./pages/dashboard/ChartWrapperPage'))} />
      <Route path="/dashboard/data-table" element={w(() => import('./pages/dashboard/DataTablePage'))} />
      <Route path="/dashboard/tabs" element={w(() => import('./pages/dashboard/TabsPage'))} />
      <Route path="/dashboard/activity-feed" element={w(() => import('./pages/dashboard/ActivityFeedPage'))} />
      <Route path="/dashboard/progress-card" element={w(() => import('./pages/dashboard/ProgressCardPage'))} />
      <Route path="/dashboard/breadcrumb" element={w(() => import('./pages/dashboard/BreadcrumbPage'))} />

      {/* Auth */}
      <Route path="/auth/auth-modal" element={w(() => import('./pages/auth/AuthModalPage'))} />

      {/* Hooks */}
      <Route path="/hooks/use-anicca-form" element={w(() => import('./pages/hooks/UseAniccaFormPage'))} />
      <Route path="/hooks/use-anicca-date" element={w(() => import('./pages/hooks/UseAniccaDatePage'))} />
      <Route path="/hooks/use-anicca-utils" element={w(() => import('./pages/hooks/UseAniccaUtilsPage'))} />
      <Route path="/hooks/use-anicca-toast" element={w(() => import('./pages/hooks/UseAniccaToastPage'))} />
      <Route path="/hooks/use-anicca-popup" element={w(() => import('./pages/hooks/UseAniccaPopupPage'))} />

      <Route path="*" element={w(() => import('./pages/GettingStarted'))} />
    </Routes>
  )
}
