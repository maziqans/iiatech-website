import type { Metadata } from "next"
import { Suspense } from "react" // 1. Added Suspense import
import { TrainerAccordion } from "@/components/trainer-accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Our Consultants | IIA Technology",
  description: "Meet our team of expert trainers and consultants at IIA Technology. Industry professionals with decades of combined experience.",
}

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen">
      {/* Header - Neutral white/grey styling */}
      <ScrollReveal>
      <section className="bg-muted/30 border-b border-border/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 tracking-tight">Our Consultants</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Meet our team of expert trainers who bring decades of industry experience 
            to deliver practical, impactful training programs.
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* Trainers List */}
      <ScrollReveal>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 2. Wrapped in Suspense to handle search params during build */}
          <Suspense fallback={<div className="text-center py-10 text-muted-foreground">Loading expert team...</div>}>
            <TrainerAccordion />
          </Suspense>
        </div>
      </section>
      </ScrollReveal>
    </div>
  )
}