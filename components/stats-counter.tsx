"use client"

import { useEffect, useState, useRef } from "react"

interface Stat {
  numericValue: number
  suffix: string
  label: string
}

interface StatsCounterProps {
  stats: Stat[]
}

export function StatsCounter({ stats }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="stats" className="py-16 border-y border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 lg:justify-between">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} isVisible={isVisible} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ stat, isVisible, delay }: { stat: Stat; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000 // 2 seconds
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (ease-out cubic) for the "slot machine" slowing down effect
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * stat.numericValue))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(stat.numericValue)
      }
    }

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isVisible, stat.numericValue, delay])

  return (
    <div 
      className={`text-center transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
        {count}{stat.suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
    </div>
  )
}