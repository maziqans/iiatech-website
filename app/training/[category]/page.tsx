import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { 
  getTrainingsByCategory, 
  categoryLabels, 
  type TrainingCategory 
} from "@/lib/data"
import { TrainingSearch } from "@/components/training-search"

const validCategories = ["cyber-security", "it", "general"]

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return validCategories.map((category) => ({
    category,
  }))
}

export default async function TrainingCategoryPage({ params }: PageProps) {
  const { category } = await params

  if (!validCategories.includes(category)) {
    notFound()
  }

  const trainings = getTrainingsByCategory(category as TrainingCategory)
  const categoryLabel = categoryLabels[category as TrainingCategory]

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <ScrollReveal>
      <section className="bg-muted/30 border-b border-border/40 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#training"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Programs
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight text-balance">
            {categoryLabel} Training
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explore our comprehensive {categoryLabel.toLowerCase()} training programs delivered by 
            industry experts. All programs are fully claimable under HRDCorp.
          </p>
          <TrainingSearch />
        </div>
      </section>
      </ScrollReveal>

      {/* Trainings List */}
      <ScrollReveal>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {trainings.map((training) => {
              
              return (
                <Card key={training.id} id={training.id} className="relative group hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/30 hover:border-primary/50 transition-all duration-300 border-border/50 scroll-mt-24 flex flex-col overflow-hidden hover:-translate-y-1 cursor-pointer">
                  <Link href={`/training-details?id=${training.id}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View details for {training.title}</span>
                  </Link>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 relative">
                      <div className="pr-12">
                        <Badge variant="secondary" className="mb-3 font-normal">
                          {categoryLabels[training.category as TrainingCategory]}
                        </Badge>
                        <CardTitle className="text-xl mb-2 leading-tight group-hover:text-primary transition-colors">{training.title}</CardTitle>
                        <CardDescription className="text-base">{training.description}</CardDescription>
                      </div>
                      <div className="absolute top-0 right-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-0">
                        <div className="bg-primary/10 text-primary p-2.5 rounded-full">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{training.duration}</span>
                      </div>
                    </div>
                    <a
                      href={training.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-foreground w-full sm:w-auto"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View Brochure
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  )
}