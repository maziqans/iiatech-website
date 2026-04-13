import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Monitor, Brain, Briefcase, Award, Users, BookOpen, CheckCircle2, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const trainingCategories = [
  {
    title: "Cyber Security",
    description: "Protect your organization with industry-leading security training programs.",
    icon: Shield,
    href: "/training/cyber-security",
  },
  {
    title: "IT",
    description: "Master cloud computing, DevOps, and enterprise IT infrastructure.",
    icon: Monitor,
    href: "/training/it",
  },
  {
    title: "AI",
    description: "Unlock the power of artificial intelligence and machine learning.",
    icon: Brain,
    href: "/training/ai",
  },
  {
    title: "General",
    description: "Essential business skills including project management and analysis.",
    icon: Briefcase,
    href: "/training/general",
  },
]

const features = [
  {
    icon: Award,
    title: "HRDCorp Certified",
    description: "All programs are fully claimable under HRDCorp levy",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from industry veterans with real-world experience",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Hands-on exercises and case studies for immediate application",
  },
  {
    icon: Target,
    title: "Customized Programs",
    description: "Training tailored to your organization&apos;s specific needs",
  },
]

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "50+", label: "Training Programs" },
  { value: "8", label: "Expert Consultants" },
  { value: "15+", label: "Years Experience" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 border border-border/40 text-muted-foreground text-sm mb-6">
                <Award className="h-3.5 w-3.5" />
                HRDCorp Registered Training Provider
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] text-foreground mb-6 tracking-tight text-balance">
                Empowering Professionals Through Expert Training
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                IIA Technology delivers world-class professional training in Cyber Security, 
                IT, AI, and Business Skills. Transform your team with our HRDCorp-claimable programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" variant="outline" className="text-sm border-foreground/20 hover:bg-foreground hover:text-background transition-all">
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-sm text-muted-foreground">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl shadow-black/[0.03] border border-border/40">
                <Image
                  src="/images/hero-training.jpg"
                  alt="Professional training environment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border/50 rounded-xl p-4 shadow-md shadow-black/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-foreground/70" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">100% Claimable</p>
                    <p className="text-xs text-muted-foreground">Under HRDCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Simple horizontal row */}
      <section id="stats" className="py-16 border-y border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 lg:justify-between">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Categories Section */}
      <section id="training" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Our Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 tracking-tight text-balance">
              Comprehensive Training Programs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose from our diverse range of professional training programs designed 
              to elevate your team&apos;s capabilities and drive organizational success.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {trainingCategories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <Card className="h-full border-border/50 hover:border-border/80 hover:shadow-sm transition-all duration-200 bg-card/50">
                  <CardHeader className="pb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted/60 mb-4 group-hover:bg-muted transition-colors">
                      <category.icon className="h-5 w-5 text-foreground/60 group-hover:text-foreground/80 transition-colors" />
                    </div>
                    <CardTitle className="text-lg font-medium">{category.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="inline-flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Explore Programs
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="features" className="py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6 tracking-tight text-balance">
                Your Trusted Partner in Professional Development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                IIA Technology is a premier training provider registered with HRDCorp Malaysia. 
                We specialize in delivering high-impact training programs designed to equip 
                professionals with the skills needed to excel in today&apos;s rapidly evolving 
                technology landscape.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-5">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/70">
                      <feature.icon className="h-5 w-5 text-foreground/60" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-0.5">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-black/[0.03] border border-border/40">
                <Image
                  src="/images/about-team.jpg"
                  alt="IIA Technology team of expert consultants"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-card border border-border/50 rounded-xl p-4 shadow-md shadow-black/[0.02] max-w-[180px]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                    <Award className="h-4 w-4 text-foreground/70" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">HRDCorp</p>
                    <p className="text-xs text-muted-foreground">Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Neutral styling */}
      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-5 tracking-tight text-balance">
            Ready to Transform Your Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your training needs and discover how our 
            HRDCorp-claimable programs can benefit your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="outline" className="text-sm border-foreground/20 hover:bg-foreground hover:text-background transition-all">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-sm text-muted-foreground">
              <Link href="/consultants">Meet Our Consultants</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
