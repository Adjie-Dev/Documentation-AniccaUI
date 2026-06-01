import 'maplibre-gl/dist/maplibre-gl.css'
import React, { useState, useEffect, useRef } from 'react'
import type { Map as MaplibreMap } from 'maplibre-gl'
import { AniccaSpinner } from 'anicca-ui'
import DocPage from '../components/DocPage'
import SectionHeader from '../components/SectionHeader'
import CodeBlock from '../components/CodeBlock'
import PropsTable from '../components/PropsTable'

function useDarkMode() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains('dark'))
    )
    obs.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])
  return dark
}

const MAP_STYLE = {
  version: 8 as const,
  sources: {
    osm: {
      type: 'raster' as const,
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    },
  },
  layers: [{ id: 'osm-tiles', type: 'raster' as const, source: 'osm' }],
}

type MarkerDef = { lat: number; lng: number; color: string; title: string; meta: string }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addMarkers(mgl: any, map: MaplibreMap, markers: MarkerDef[]) {
  markers.forEach((m) => {
    const el = document.createElement('span')
    el.className = 'material-symbols-outlined'
    el.style.cssText = [
      'font-size:34px',
      `color:${m.color}`,
      "font-variation-settings:'FILL' 1",
      'cursor:pointer',
      'display:block',
      'line-height:1',
      'filter:drop-shadow(0 2px 5px rgba(0,0,0,0.45))',
      'transition:transform 0.15s ease',
    ].join(';')
    el.textContent = 'location_on'
    el.onmouseenter = () => { el.style.transform = 'scale(1.25)' }
    el.onmouseleave = () => { el.style.transform = 'scale(1)' }

    const popup = new mgl.Popup({ offset: 28, closeButton: false }).setHTML(
      `<strong style="font-size:13px">${m.title}</strong><br><span style="font-size:11px;opacity:0.7">${m.meta}</span>`
    )

    new mgl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat([m.lng, m.lat])
      .setPopup(popup)
      .addTo(map)
  })
}

type MapStatus = 'loading' | 'ready' | 'error'

function MapLibreMap({
  lat, lng, zoom, dark, markers,
}: {
  lat: number; lng: number; zoom: number; dark: boolean; markers: MarkerDef[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MaplibreMap | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mglRef = useRef<any>(null)
  const isMount = useRef(true)

  const [status, setStatus] = useState<MapStatus>('loading')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    if (!containerRef.current) return
    let destroyed = false

    import('maplibre-gl')
      .then(({ default: mgl }) => {
        if (destroyed || !containerRef.current) return
        mglRef.current = mgl

        const map = new mgl.Map({
          container: containerRef.current,
          style: MAP_STYLE,
          center: [lng, lat],
          zoom,
          attributionControl: false,
        })

        mapRef.current = map

        map.on('load', () => {
          if (destroyed) return
          addMarkers(mgl, map, markers)
          setStatus('ready')
        })

        map.on('error', (e) => {
          if (!destroyed) {
            setStatus('error')
            setErrMsg(e.error?.message ?? String(e.error))
          }
        })
      })
      .catch((err) => {
        if (!destroyed) {
          setStatus('error')
          setErrMsg(String(err))
        }
      })

    return () => {
      destroyed = true
      mapRef.current?.remove()
      mapRef.current = null
      mglRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isMount.current) { isMount.current = false; return }
    const map = mapRef.current
    if (!map) return
    const doFly = () =>
      map.flyTo({ center: [lng, lat], zoom, speed: 1.2, curve: 1.5, essential: true })
    if (map.isStyleLoaded()) doFly()
    else map.once('style.load', doFly)
  }, [lat, lng, zoom])

  return (
    <div className="relative h-[340px] rounded-xl overflow-hidden border border-outline-variant/20">
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{
          filter: dark ? 'invert(92%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' : 'none',
          transition: 'filter 0.4s ease',
        }}
      />
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-container-low">
          <AniccaSpinner size="md" />
        </div>
      )}
      {status === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-container-low gap-3 p-6">
          <span className="material-symbols-outlined text-[36px] text-danger">map_off</span>
          <p className="text-sm font-semibold text-on-surface">Map failed to load</p>
          {errMsg && (
            <p className="text-[11px] text-text-muted text-center break-all max-w-xs">{errMsg}</p>
          )}
        </div>
      )}
    </div>
  )
}

const OFFICES = [
  { title: 'Denpasar',  meta: 'HQ · 240 staff',    color: '#4648d4', lat: -8.65,  lng: 115.22, zoom: 11 },
  { title: 'Jakarta',   meta: 'Branch · 120 staff', color: '#10b981', lat: -6.21,  lng: 106.85, zoom: 11 },
  { title: 'Singapore', meta: 'R&D · 45 staff',     color: '#d97706', lat: 1.35,   lng: 103.82, zoom: 11 },
  { title: 'Tokyo',     meta: 'Partner · 30 staff', color: '#ef4444', lat: 35.68,  lng: 139.69, zoom: 11 },
]

function OfficeDemo() {
  const dark = useDarkMode()
  const [active, setActive] = useState(OFFICES[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <MapLibreMap lat={active.lat} lng={active.lng} zoom={active.zoom} dark={dark} markers={OFFICES} />
      </div>
      <div className="border border-outline-variant/40 rounded-xl p-4 bg-surface">
        <p className="text-sm font-semibold text-on-surface mb-3">Offices</p>
        <div className="flex flex-col gap-2">
          {OFFICES.map((o) => {
            const isActive = o.title === active.title
            return (
              <button
                key={o.title}
                onClick={() => setActive(o)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition-all ${
                  isActive
                    ? 'border-primary/40 bg-primary/10'
                    : 'border-outline-variant/30 hover:bg-surface-container'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[20px] flex-shrink-0"
                  style={{ color: o.color, fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-on-surface truncate">{o.title}</p>
                  <p className="text-[11px] text-text-muted truncate">{o.meta}</p>
                </div>
                {isActive && (
                  <span className="ml-auto material-symbols-outlined text-[14px] text-primary flex-shrink-0">
                    my_location
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const COUNTRIES = [
  { title: 'United States', meta: '82% of sales', pct: 82, color: '#4648d4', lat: 37.09,  lng: -95.71, zoom: 4 },
  { title: 'Indonesia',     meta: '64% of sales', pct: 64, color: '#10b981', lat: -0.79,  lng: 113.92, zoom: 4 },
  { title: 'Germany',       meta: '47% of sales', pct: 47, color: '#d97706', lat: 51.17,  lng: 10.45,  zoom: 5 },
  { title: 'Japan',         meta: '38% of sales', pct: 38, color: '#ef4444', lat: 36.20,  lng: 138.25, zoom: 5 },
  { title: 'Brazil',        meta: '25% of sales', pct: 25, color: '#64748b', lat: -14.24, lng: -51.93, zoom: 4 },
]

function SalesDemo() {
  const dark = useDarkMode()
  const [active, setActive] = useState(COUNTRIES[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <MapLibreMap lat={active.lat} lng={active.lng} zoom={active.zoom} dark={dark} markers={COUNTRIES} />
      </div>
      <div className="border border-outline-variant/40 rounded-xl p-4 bg-surface">
        <p className="text-sm font-semibold text-on-surface mb-3">Top countries</p>
        <div className="flex flex-col gap-3">
          {COUNTRIES.map((c) => {
            const isActive = c.title === active.title
            return (
              <button
                key={c.title}
                onClick={() => setActive(c)}
                className={`w-full text-left p-2 rounded-lg transition-all ${
                  isActive ? 'bg-primary/10' : 'hover:bg-surface-container'
                }`}
              >
                <div className="flex justify-between text-sm mb-1.5">
                  <span className={`font-medium ${isActive ? 'text-primary' : 'text-on-surface'}`}>
                    {c.title}
                  </span>
                  <span className="font-bold tabular-nums text-on-surface">{c.pct}%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${c.pct}%`, background: c.color }}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function MapsPage() {
  return (
    <DocPage
      title="Maps"
      description="MapLibre-GL integration with anicca-ui. Open source, no API key required. Uses OpenStreetMap raster tiles and respects dark mode via CSS filter inversion."
      badge="Integration"
    >
      <SectionHeader id="install">Installation</SectionHeader>
      <CodeBlock
        language="bash"
        code={`npm install maplibre-gl\nnpm install --save-dev @types/maplibre-gl`}
      />

      <SectionHeader id="offices">Office Locations</SectionHeader>
      <p className="text-sm text-text-muted mb-4">
        Click an office to fly the map to that location. Click a marker on the map to open a popup.
      </p>
      <div className="mb-8">
        <OfficeDemo />
      </div>

      <SectionHeader id="sales">Sales by Region</SectionHeader>
      <p className="text-sm text-text-muted mb-4">
        Click a country to navigate the map. Progress bars show relative sales percentage.
      </p>
      <div className="mb-8">
        <SalesDemo />
      </div>

      <SectionHeader id="dark-mode">Dark Mode</SectionHeader>
      <p className="text-sm text-text-muted mb-4">
        Toggle dark mode in the navbar. OSM raster tiles do not have a dark variant so CSS filter
        inversion is applied to the container div.
      </p>
      <CodeBlock
        language="tsx"
        code={`<div
  ref={containerRef}
  style={{
    filter: dark
      ? 'invert(92%) hue-rotate(180deg) brightness(0.9) contrast(0.9)'
      : 'none',
    transition: 'filter 0.4s ease',
  }}
/>`}
      />

      <SectionHeader id="component">Full Component</SectionHeader>
      <CodeBlock
        language="tsx"
        code={`import 'maplibre-gl/dist/maplibre-gl.css'
import { useState, useEffect, useRef } from 'react'
import type { Map as MaplibreMap } from 'maplibre-gl'

const MAP_STYLE = {
  version: 8 as const,
  sources: {
    osm: {
      type: 'raster' as const,
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
    },
  },
  layers: [{ id: 'osm-tiles', type: 'raster' as const, source: 'osm' }],
}

type MarkerDef = { lat: number; lng: number; color: string; title: string; meta: string }

export function MapLibreMap({
  lat, lng, zoom, dark, markers = [],
}: {
  lat: number; lng: number; zoom: number; dark: boolean; markers?: MarkerDef[]
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MaplibreMap | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    let destroyed = false

    import('maplibre-gl').then(({ default: mgl }) => {
      if (destroyed || !containerRef.current) return

      const map = new mgl.Map({
        container: containerRef.current,
        style: MAP_STYLE,
        center: [lng, lat],
        zoom,
        attributionControl: false,
      })

      mapRef.current = map
      map.on('load', () => {
        if (destroyed) return
        markers.forEach((m) => {
          const el = document.createElement('span')
          el.className = 'material-symbols-outlined'
          el.style.cssText = \`font-size:34px;color:\${m.color};font-variation-settings:'FILL' 1;cursor:pointer\`
          el.textContent = 'location_on'

          new mgl.Marker({ element: el, anchor: 'bottom' })
            .setLngLat([m.lng, m.lat])
            .setPopup(new mgl.Popup({ offset: 28 }).setHTML(\`<strong>\${m.title}</strong><br>\${m.meta}\`))
            .addTo(map)
        })
      })
    })

    return () => {
      destroyed = true
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, []) // eslint-disable-line

  return (
    <div
      ref={containerRef}
      className="w-full h-[340px] rounded-xl"
      style={{
        filter: dark
          ? 'invert(92%) hue-rotate(180deg) brightness(0.9) contrast(0.9)'
          : 'none',
      }}
    />
  )
}`}
      />

      <SectionHeader id="props">Props</SectionHeader>
      <PropsTable
        props={[
          { name: 'lat',     type: 'number',      required: true,  description: 'Latitude for center and flyTo.' },
          { name: 'lng',     type: 'number',      required: true,  description: 'Longitude for center and flyTo.' },
          { name: 'zoom',    type: 'number',      required: true,  description: 'Zoom level (1 = world, 15 = street level).' },
          { name: 'dark',    type: 'boolean',     default: 'false', description: 'Apply CSS filter to invert tiles for dark mode.' },
          { name: 'markers', type: 'MarkerDef[]', default: '[]',   description: 'Pins to render on the map.' },
        ]}
      />

      <SectionHeader id="markerdef" sub>MarkerDef</SectionHeader>
      <PropsTable
        props={[
          { name: 'lat',   type: 'number', required: true, description: 'Marker latitude.' },
          { name: 'lng',   type: 'number', required: true, description: 'Marker longitude.' },
          { name: 'title', type: 'string', required: true, description: 'Bold heading in the popup.' },
          { name: 'meta',  type: 'string', required: true, description: 'Secondary line in the popup.' },
          { name: 'color', type: 'string', required: true, description: 'CSS color for the location_on icon.' },
        ]}
      />
    </DocPage>
  )
}
