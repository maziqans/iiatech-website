"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

const trainingInterests = [
  { value: "cyber-security", label: "Cyber Security" },
  { value: "it", label: "Information Technology" },
  { value: "general", label: "General" },
  { value: "multiple", label: "Multiple Areas" },
]

export function ContactForm() {
  const [activeTab, setActiveTab] = useState<"message" | "consultant">("message")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("subject", activeTab === "message" ? "New Contact Message" : "New Consultant Application")

    // Replace the string below with your actual Web3Forms access key
    formData.append("access_key", "97e97a70-f728-4b89-9890-3bde382e1931")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
      } else {
        console.error("Form submission failed", data)
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Tabs Switcher */}
      <div className="flex gap-2 border-b border-border/40 mb-6">
        <button
          type="button"
          onClick={() => {
            setActiveTab("message")
            setIsSubmitted(false)
          }}
          className={cn(
            "px-4 py-3 text-sm font-medium transition-colors relative",
            activeTab === "message"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Send Message
          {activeTab === "message" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
          )}
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("consultant")
            setIsSubmitted(false)
          }}
          className={cn(
            "px-4 py-3 text-sm font-medium transition-colors relative",
            activeTab === "consultant"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Be a Consultant
          {activeTab === "consultant" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full" />
          )}
        </button>
      </div>

      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto mb-4">
            <svg
              className="h-8 w-8 text-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            We&apos;ve received your {activeTab === "message" ? "message" : "application"} and will get back to you soon.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another {activeTab === "message" ? "Message" : "Application"}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required />
              </Field>
              <Field>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required />
              </Field>
            </div>

            <Field>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </Field>

            <Field>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" required />
            </Field>

            {activeTab === "message" ? (
              <>
                <Field>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" />
                </Field>

                <Field>
                  <Label htmlFor="interest">Training Interest</Label>
                  <Select name="interest" required>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Select a training area" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainingInterests.map((interest) => (
                        <SelectItem key={interest.value} value={interest.value}>
                          {interest.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Input id="participants" name="participants" type="number" min="1" placeholder="10" />
                </Field>

                <Field>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your training needs..." rows={4} required />
                </Field>
              </>
            ) : (
              <>
                <Field>
                  <Label htmlFor="expertise">Area of Expertise</Label>
                  <Input id="expertise" name="expertise" placeholder="e.g., Cyber Security, Software Engineering" required />
                </Field>

                <Field>
                  <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                  <Input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
                </Field>

                <Field>
                  <Label htmlFor="message">Why do you want to join us?</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your experience and why you'd be a great fit..." rows={4} required />
                </Field>
              </>
            )}
          </FieldGroup>

          <div className="mt-6">
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2" />
                  Sending...
                </>
              ) : (
                activeTab === "message" ? "Send Message" : "Submit Application"
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
