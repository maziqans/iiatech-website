import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, User, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { 
  getTrainingsByCategory, 
  getTrainerById, 
  categoryLabels, 
  type TrainingCategory 
} from "@/lib/data"

const validCategories = ["cyber-security", "it", "general"]

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params
  
  if (!validCategories.includes(category)) {
    return { title: "Not Found" }
  }
  
  const categoryLabel = categoryLabels[category as TrainingCategory]
  
  return {
    title: `${categoryLabel} Training | IIA Technology`,
    description: `Professional ${categoryLabel} training programs by IIA Technology, a HRDCorp registered training provider in Malaysia.`,
  }
}

export default async function TrainingCategoryPage({ params }: PageProps) {
  const { category } = await params
  
  if (!validCategories.includes(category)) {
    notFound()
  }

  const trainings = getTrainingsByCategory(category as TrainingCategory)
  const categoryLabel = categoryLabels[category as TrainingCategory]

  return (
    <div className="min-h-screen">
      {/* Header - Neutral white/grey styling */}
      <ScrollReveal>
      <section className="bg-muted/30 border-b border-border/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 tracking-tight">{categoryLabel} Training</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our comprehensive {categoryLabel.toLowerCase()} training programs delivered by 
            industry experts. All programs are fully claimable under HRDCorp.
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* Training List */}
      <ScrollReveal>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {trainings.map((training) => {
              const trainer = getTrainerById(training.trainerId)
              
              return (
                <Card key={training.id} className="group hover:shadow-md transition-shadow border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge variant="secondary" className="mb-3 font-normal">
                          {categoryLabel}
                        </Badge>
                        <CardTitle className="text-xl">{training.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {training.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{training.duration}</span>
                      </div>
                      {trainer && (
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <Link
                            href={`/consultants?trainer=${trainer.id}`}
                            className="hover:text-foreground transition-colors underline underline-offset-4"
                          >
                            {trainer.name}
                          </Link>
                        </div>
                      )}
                    </div>
                    <a
                      href={training.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-foreground w-full sm:w-auto"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Brochure
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {trainings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No training programs available in this category.</p>
            </div>
          )}
        </div>
      </section>
      </ScrollReveal>

      {/* CTA Section - Neutral styling */}
      <ScrollReveal>
      <section className="py-16 bg-muted/20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            Interested in {categoryLabel} Training?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us to learn more about our training programs and how we can 
            customize them to meet your organization&apos;s needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-foreground/20 bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </div>
  )
}
