import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, FileText, CheckCircle2, BookOpen } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTrainingById, categoryLabels, type TrainingCategory } from "@/lib/data"

interface PageProps {
  searchParams: Promise<{ id?: string }>
}

export default async function TrainingDetailsPage({ searchParams }: PageProps) {
  // Read the 'id' directly from the URL
  const { id } = await searchParams
  
  if (!id) {
    notFound()
  }

  const training = getTrainingById(id)

  if (!training) {
    notFound()
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <ScrollReveal>
        <section className="bg-muted/30 border-b border-border/40 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href={`/training/${training.category}`}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {categoryLabels[training.category as TrainingCategory]}
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary" className="font-normal">
                {categoryLabels[training.category as TrainingCategory]}
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{training.duration}</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight text-balance">
              {training.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Enquire Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={training.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Brochure
                </a>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Details Content */}
      <ScrollReveal>
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Overview */}
            {(training.overview || training.description) && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4 tracking-tight">Training Overview</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
                  <p>{training.overview || training.description}</p>
                </div>
              </div>
            )}

            {/* Learning Outcomes */}
            {training.objectives && training.objectives.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">Learning Outcomes</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {training.objectives.map((objective, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-relaxed">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Course Content / Modules */}
            {training.modules && training.modules.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">Course Content</h2>
                <div className="space-y-3">
                  {training.modules.map((mod, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card hover:border-primary/20 transition-colors shadow-sm">
                      <div className="mt-0.5">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground/90">{mod}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}