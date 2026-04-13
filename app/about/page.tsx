import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Target, Users, Lightbulb, Shield, CheckCircle2, Building2, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

const values = [
  {
    letter: "I",
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying ahead of industry trends to deliver advanced training content and methodologies.",
  },
  {
    letter: "I",
    icon: Shield,
    title: "Integrity",
    description: "Maintaining the highest ethical standards in all our business practices and training delivery.",
  },
  {
    letter: "A",
    icon: Target,
    title: "Attainable",
    description: "Ensuring our training programs and learning goals remain highly accessible and achievable for all professionals.",
  },
]


const milestones = [
  { year: "2020", event: "Company established with a vision to transform professional training" },
  { year: "2024", event: "Company officially registered under SSM" },
  { year: "2025", event: "Achieved status as an HRDCorp registered training provider" },
  { year: "2026", event: "Became an official PECB training provider for ISO certifications" },
]

const certifications = [
  "HRDCorp Registered Training Provider",
  "Certified PCEB Training Provider",
  "Certified Accredited HRDCorp Trainer",
  "Certified CyberSecurity Educator Professional",
  "Malaysian Association for Training Providers (MATPRO) member"
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Neutral styling */}
      <ScrollReveal>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 border border-border/40 text-muted-foreground text-sm mb-6">
                <Building2 className="h-3.5 w-3.5" />
                About IIA Technology
              </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-6 leading-tight tracking-tight text-balance">
              Redefine Professional Development With Tech Education
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Since 2020, IIA Technology has been at the forefront of professional training 
              in Malaysia. We help organizations and individuals achieve their goals 
              through exceptional training programs.
            </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As an HRDCorp registered training provider, we are committed to delivering 
                high quality, practical training that creates a meaningful difference. Our team of expert 
                consultants brings together decades of industry experience across Cyber Security, 
                Information Technology, and Business Skills.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="outline" className="text-sm border-foreground/20 hover:bg-foreground hover:text-background transition-all">
                  <Link href="/consultants">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-sm text-muted-foreground">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg shadow-black/[0.03] border border-border/40">
                <Image
                  src="/images/about-team.jpg"
                  alt="IIA Technology team"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats floating card */}
              <div className="absolute -bottom-5 -right-5 bg-card border border-border/50 rounded-xl p-5 shadow-md shadow-black/[0.02]">
                <div className="grid grid-cols-2 gap-5">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-foreground">3</p>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-foreground">200+</p>
                    <p className="text-xs text-muted-foreground">Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Mission & Vision Section */}
      <ScrollReveal>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="relative">
              <Target className="absolute -top-6 -left-6 h-24 w-24 text-foreground/10 -z-10 rotate-12" />
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-foreground/20" />
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Our Mission</span>
              </div>
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-medium">
                To provide professionals and organizations with the knowledge and skills 
                needed to thrive in the digital age. We are dedicated to delivering practical, 
                highly effective training that creates measurable results and drives career advancement.
              </p>
            </div>
            
            <div className="relative">
              <Globe className="absolute -top-6 -left-6 h-24 w-24 text-foreground/10 -z-10 -rotate-12" />
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-foreground/20" />
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Our Vision</span>
              </div>
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-medium">
                To be Malaysia&apos;s leading professional training provider, recognized for 
                excellence in delivering transformative learning experiences that prepare 
                individuals and organizations for the challenges of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Values Section */}
      <ScrollReveal>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 tracking-tight text-balance">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values define who we are and how we deliver exceptional training experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 pt-8">
            {values.map((value) => (
              <div key={value.title} className="relative group">
                {/* Large background letter */}
                <span className="absolute -top-10 -left-6 text-[8rem] leading-none font-bold text-foreground/10 -z-10 group-hover:text-foreground/20 transition-colors duration-500 select-none">
                  {value.letter}
                </span>
                
                <div className="flex flex-col h-full pt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-muted/60 text-foreground/70">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground tracking-tight">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Timeline Section */}
      <ScrollReveal>
      <section className="py-20 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4 tracking-tight text-balance">
              Milestones Along the Way
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center gap-6 lg:gap-10 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 lg:ml-0 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-card border border-border/50 rounded-xl p-5 inline-block shadow-sm shadow-black/[0.01]">
                      <span className="text-xl font-semibold text-foreground">{milestone.year}</span>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 h-3 w-3 rounded-full bg-foreground/30 border-3 border-background" />
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Certifications Section */}
      <ScrollReveal>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2 tracking-widest uppercase">Certifications & Partnerships</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-5 tracking-tight text-balance">
                Recognized Excellence in Training
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our certifications and partnerships with leading technology companies ensure 
                that our training programs meet the highest industry standards and provide 
                participants with globally recognized credentials.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-foreground/50 shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/40 border border-border/50 rounded-2xl p-8">
              <Award className="h-12 w-12 mb-5 text-foreground/40" />
              <h3 className="text-xl font-semibold text-foreground mb-3">HRDCorp Registered</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                As a registered HRDCorp training provider, all our programs are fully 
                claimable under the HRDCorp levy. This means your organization can invest 
                in professional development while maximizing your training budget.
              </p>
              <Button asChild variant="outline" size="lg" className="text-sm border-foreground/20 hover:bg-foreground hover:text-background transition-all">
                <Link href="/contact">
                  Enquire About Funding
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* CTA Section - Neutral styling */}
      <ScrollReveal>
      <section className="py-20 bg-muted/20 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-5 tracking-tight text-balance">
            Ready to Partner With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re looking to upskill your team or advance your own career, 
            we&apos;re here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="outline" className="text-sm border-foreground/20 hover:bg-foreground hover:text-background transition-all">
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-sm text-muted-foreground">
              <Link href="/consultants">View Our Consultants</Link>
            </Button>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  )
}
