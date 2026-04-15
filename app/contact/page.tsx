import type { Metadata } from "next"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Contact Us | IIA Technology",
  description: "Get in touch with IIA Technology to discuss your training needs. We offer professional training programs that are fully claimable under HRDCorp.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header - Neutral white/grey styling */}
      <ScrollReveal>
      <section className="bg-muted/30 border-b border-border/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 tracking-tight">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ready to elevate your team&apos;s skills? Get in touch with us to discuss 
            your training requirements.
          </p>
        </div>
      </section>
      </ScrollReveal>

      {/* Contact Section */}
      <ScrollReveal>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/70 shrink-0">
                    <Mail className="h-5 w-5 text-foreground/60" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">admin@iiatech.com.my</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/70 shrink-0">
                    <Phone className="h-5 w-5 text-foreground/60" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+60 3-3292 9219</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/70 shrink-0">
                    <MapPin className="h-5 w-5 text-foreground/60" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      18-03A & 18-05, Pusat Perdagangan,<br />
                      Plaza Azalea 10, Persiaran Bandar Raya,<br />
                       Seksyen 14, 40000 Shah Alam, Selangor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-muted/40 border border-border/40 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-1">
                  HRDCorp Registered
                </p>
                <p className="text-xs text-muted-foreground">
                  All our training programs are claimable under HRDCorp levy.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border/50 rounded-lg p-6 sm:p-8 shadow-sm shadow-black/[0.02] pt-6 sm:pt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  )
}
