"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"

const trainingInterests = [
  { value: "cyber-security", label: "Cyber Security" },
  { value: "it", label: "IT" },
  { value: "ai", label: "AI" },
  { value: "general", label: "General" },
  { value: "multiple", label: "Multiple Areas" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
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
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
            />
          </Field>
          <Field>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
            />
          </Field>
        </div>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            required
          />
        </Field>

        <Field>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+60 12-345 6789"
          />
        </Field>

        <Field>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your Company Sdn Bhd"
          />
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
          <Input
            id="participants"
            name="participants"
            type="number"
            min="1"
            placeholder="10"
          />
        </Field>

        <Field>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your training needs..."
            rows={4}
            required
          />
        </Field>
      </FieldGroup>

      <div className="mt-6">
        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner className="mr-2" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  )
}
