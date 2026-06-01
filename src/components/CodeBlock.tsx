import React, { useEffect, useRef, useState } from 'react'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import { AniccaButton, useAniccaToast } from 'anicca-ui'

hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('tsx', typescript)
hljs.registerLanguage('xml', xml)

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const ref = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
  const { push } = useAniccaToast()

  useEffect(() => {
    if (ref.current) {
      ref.current.removeAttribute('data-highlighted')
      hljs.highlightElement(ref.current)
    }
  }, [code])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim())
    setCopied(true)
    push({ variant: 'success', title: 'Copied!', description: 'Code copied to clipboard.' })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-outline-variant/20">
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-white/5">
        <span className="text-[0.7rem] text-white/30 font-mono uppercase tracking-widest">{language}</span>
        <AniccaButton
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-white/50 hover:text-white/90 text-[0.72rem]"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </AniccaButton>
      </div>
      <pre className="overflow-x-auto p-5 text-[0.82rem] leading-relaxed m-0">
        <code ref={ref} className={`language-${language} hljs`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  )
}
