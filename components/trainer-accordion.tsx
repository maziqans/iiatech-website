"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ChevronDown, User, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { trainers, getTrainingById, categoryLabels, type TrainingCategory } from "@/lib/data"

export function TrainerAccordion() {
  const searchParams = useSearchParams()
  const [openTrainers, setOpenTrainers] = useState<string[]>([])

  useEffect(() => {
    const trainerId = searchParams.get("trainer")
    if (trainerId) {
      setOpenTrainers([trainerId])
      // Scroll to the trainer after a short delay
      setTimeout(() => {
        const element = document.getElementById(`trainer-${trainerId}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [searchParams])

  const toggleTrainer = (trainerId: string) => {
    setOpenTrainers((prev) =>
      prev.includes(trainerId)
        ? prev.filter((id) => id !== trainerId)
        : [...prev, trainerId]
    )
  }

  return (
    <div className="space-y-3">
      {trainers.map((trainer) => {
        const isOpen = openTrainers.includes(trainer.id)
        const trainerTrainings = trainer.trainings
          .map((id) => getTrainingById(id))
          .filter(Boolean)

        return (
          <div
            key={trainer.id}
            id={`trainer-${trainer.id}`}
            className="border border-border/60 rounded-xl overflow-hidden bg-card shadow-sm"
          >
            {/* Trainer Header */}
            <button
              onClick={() => toggleTrainer(trainer.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted/80">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {trainer.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{trainer.title}</p>
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            {/* Trainer Details */}
            <div
              className={cn(
                "grid transition-all duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 border-t border-border/40 pt-5">
                  {/* Bio */}
                  <div className="mb-5">
                    <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wider mb-2">
                      Biography
                    </h4>
                    <p className="text-foreground/90 leading-relaxed text-sm">{trainer.bio}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-5">
                    <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wider mb-2.5">
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="font-normal text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Trainings Offered - Now with links to training pages */}
                  <div>
                    <h4 className="font-medium text-xs text-muted-foreground uppercase tracking-wider mb-2.5">
                      Training Programs
                    </h4>
                    <div className="space-y-2">
                      {trainerTrainings.map((training) => {
                        if (!training) return null
                        return (
                        <a
                            key={training.id}
                          href={training.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                            className="group flex items-center justify-between p-3.5 bg-muted/40 hover:bg-muted/70 rounded-lg transition-colors"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                {training.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                {training.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 ml-3 shrink-0">
                              <Badge variant="outline" className="text-xs font-normal">
                                {categoryLabels[training.category as TrainingCategory]}
                              </Badge>
                            <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                        </a>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
