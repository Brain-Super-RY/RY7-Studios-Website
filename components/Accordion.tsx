'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type AccordionItemProps = {
  title: string
  children: React.ReactNode
}

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="font-semibold text-lg text-white">{title}</span>
        <ChevronDown
          className={`w-6 h-6 text-primary transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pr-4 text-gray-400">{children}</div>
        </div>
      </div>
    </div>
  )
}

type AccordionProps = {
  children: React.ReactNode
}

export const Accordion = ({ children }: AccordionProps) => {
  return <div className="space-y-2">{children}</div>
} 