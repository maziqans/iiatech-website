import type { Metadata } from "next"
import { TrainerAccordion } from "@/components/trainer-accordion"

export const metadata: Metadata = {
  title: "Our Consultants | IIA Technology",
  description: "Meet our team of expert trainers and consultants at IIA Technology. Industry professionals with decades of combined experience.",
}

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen">
      {/* Header - Neutral white/grey styling */}
      <section className="bg-muted/30 border-b border-border/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 tracking-tight">Our Consultants</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Meet our team of expert trainers who bring decades of industry experience 
            to deliver practical, impactful training programs.
          </p>
        </div>
      </section>

      {/* Trainers List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TrainerAccordion />
        </div>
      </section>
    </div>
  )
}
