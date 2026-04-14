import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Monitor, Briefcase, Award, Users, BookOpen, CheckCircle2, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCounter } from "@/components/stats-counter"
import { ScrollReveal } from "@/components/scroll-reveal"

const trainingCategories = [
  {
    title: "Cyber Security",
    description: "Protect your organization with highly recognized security training programs.",
    icon: Shield,
    href: "/training/cyber-security",
    bgImage: "/images/cybersec-back.jpg",
  },
  {
    title: "Information Technology",
    description: "Master cloud computing, DevOps, and enterprise Information Technology infrastructure.",
    icon: Monitor,
    href: "/training/it",
    bgImage: "/images/it-back.jpg",
  },
  {
    title: "General",
    description: "Essential business skills including project management and analysis.",
    icon: Briefcase,
    href: "/training/general",
    bgImage: "/images/business-back.jpg",
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
    description: "Learn from industry veterans with extensive practical experience",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Practical exercises and case studies for immediate application",
  },
  {
    icon: Target,
    title: "Customized Programs",
    description: "Training tailored to your organization&apos;s specific needs",
  },
]

const stats = [
  { numericValue: 200, suffix: "+", label: "Professionals Trained" },
  { numericValue: 15, suffix: "", label: "Training Programs" },
  { numericValue: 5, suffix: "", label: "Expert Consultants" },
  { numericValue: 3, suffix: "", label: "Years Experience" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ScrollReveal>
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-6 mb-6">
                <Image src="/images/iia-logo_page-0001.png" alt="IIA Technology Logo" width={120} height={120} className="object-contain h-20 w-auto" priority />
                <Image src="/images/hrdc-claim.webp" alt="HRDCorp Claimable" width={240} height={120} className="object-contain h-20 w-auto" priority />
                <Image src="/images/hrdc-tp.png" alt="HRDCorp Training Provider" width={240} height={120} className="object-contain h-20 w-auto" priority />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 border border-border/40 text-muted-foreground text-sm mb-6">
                <Award className="h-3.5 w-3.5" />
                HRDCorp Registered Training Provider
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] text-foreground mb-6 tracking-tight text-balance">
                Expert Training for Professional Excellence
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                IIA Technology delivers exceptional professional training in Cyber Security, 
                Information Technology, and Business Skills. Transform your team with our programs that are fully claimable under HRDCorp.
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
      </ScrollReveal>

      {/* Animated Stats Section */}
      <StatsCounter stats={stats} />

      {/* Training Categories Section */}
      <ScrollReveal>
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {trainingCategories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <Card className="relative h-full overflow-hidden border-border/50 hover:border-border/80 hover:shadow-md transition-all duration-300 bg-card min-h-[320px] flex flex-col">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{ backgroundImage: `url('${category.bgImage}')` }}
                  />
                  <div className="absolute inset-0 bg-background/95 group-hover:bg-black/75 transition-colors duration-500 z-0" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <CardHeader className="pb-3 flex-grow">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/60 mb-6 group-hover:bg-white/20 transition-colors">
                        <category.icon className="h-6 w-6 text-foreground/70 group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-medium group-hover:text-white transition-colors">{category.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-gray-200 transition-colors">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto pt-4">
                      <div className="inline-flex items-center text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                        Explore Programs
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Why Choose Us Section */}
      <ScrollReveal>
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
                We specialize in delivering highly effective training programs designed to equip 
                professionals with the skills needed to excel in the rapidly evolving 
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
      </ScrollReveal>

      {/* CTA Section - Neutral styling */}
      <ScrollReveal>
      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-5 tracking-tight text-balance">
            Ready to Transform Your Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your training needs and discover how our 
              training programs, which are fully claimable under HRDCorp, can benefit your organization.
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
      </ScrollReveal>
    </div>
  )
}
