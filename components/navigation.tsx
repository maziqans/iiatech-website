"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const trainingCategories = [
  { label: "Cyber Security", href: "/training/cyber-security" },
  { label: "Information Technology", href: "/training/it" },
  { label: "General", href: "/training/general" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    clearCloseTimeout()
    closeTimeoutRef.current = setTimeout(() => {
      setTrainingDropdownOpen(false)
    }, 200)
  }, [clearCloseTimeout])

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        clearCloseTimeout()
        setTrainingDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [clearCloseTimeout])

  // Cleanup on unmount
  useEffect(() => {
    return () => clearCloseTimeout()
  }, [clearCloseTimeout])

  const handleDropdownEnter = () => {
    clearCloseTimeout()
    setTrainingDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    scheduleClose()
  }

  // Check saved theme on load, default to light for new users
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image 
              src="/trainer-images/iia-logo.png" 
              alt="IIA Technology Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto object-contain rounded-sm"
            />
            <span className="text-lg font-medium text-foreground tracking-tight">
              IIA Technology
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>

            {/* Training Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button 
                onClick={() => setTrainingDropdownOpen(!trainingDropdownOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Training
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    trainingDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Menu with invisible bridge */}
              <div 
                className={cn(
                  "absolute top-full left-0 transition-all duration-200 ease-out",
                  trainingDropdownOpen 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                )}
              >
                {/* Invisible bridge to prevent gap */}
                <div className="h-2 w-full" />
                <div className="w-52 bg-card border border-border/60 rounded-lg shadow-lg shadow-black/[0.03] py-2 overflow-hidden">
                  {trainingCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      onClick={() => setTrainingDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/consultants"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Consultants
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button - Neutral styling */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button asChild size="sm" variant="outline" className="shadow-none border-border hover:bg-muted">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              className="p-2 hover:bg-muted/50 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-[400px] pb-4" : "max-h-0"
        )}>
          <div className="flex flex-col gap-1 pt-2">
            <Link
              href="/"
              className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Training Menu */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setTrainingDropdownOpen(!trainingDropdownOpen)}
              >
                Training
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    trainingDropdownOpen && "rotate-180"
                  )}
                />
              </button>
              <div className={cn(
                "overflow-hidden transition-all duration-200 ease-out",
                trainingDropdownOpen ? "max-h-48" : "max-h-0"
              )}>
                <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border/60 pl-4">
                  {trainingCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/consultants"
              className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Consultants
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            <div className="px-4 pt-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
