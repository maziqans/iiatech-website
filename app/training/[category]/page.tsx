import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

export default async function TrainingDetailsPage({ params }: PageProps) {
  const { category, slug } = await params

  return (
    <div className="min-h-screen py-32 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Training Details Placeholder</h1>
      <p className="text-muted-foreground mb-8">The routing for <strong>{slug}</strong> works perfectly! We can build the layout next.</p>
      
      <Link href={`/training/${category}`} className="inline-flex items-center text-primary hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Category
      </Link>
    </div>
  )
}