"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { trainings, categoryLabels, type TrainingCategory } from "@/lib/data"

export function TrainingSearch() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Search through all trainings regardless of category
  const filteredTrainings = trainings.filter(t => 
    t.title.toLowerCase().includes(query.toLowerCase()) || 
    t.description.toLowerCase().includes(query.toLowerCase())
  )

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={wrapperRef} className="relative max-w-xl w-full mt-8">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          type="text"
          placeholder="Search all training programs..."
          className="pl-11 h-12 text-base rounded-full bg-background border-border/60 shadow-sm focus-visible:ring-primary/20"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-xl shadow-lg overflow-hidden z-50">
          {filteredTrainings.length > 0 ? (
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filteredTrainings.map(training => (
                <Link 
                  key={training.id} 
                  href={`/training-details?id=${training.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 hover:bg-muted/50 transition-colors gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{training.title}</p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{training.description}</p>
                  </div>
                  <Badge variant="secondary" className="shrink-0 text-[10px] font-normal">
                    {categoryLabels[training.category as TrainingCategory]}
                  </Badge>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No training programs found for &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  )
}