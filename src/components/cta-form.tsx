"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToTrial } from "@/actions/subscribe"
// import { subscribeToTrial } from "@/actions/subscribe"
import { CheckCircle } from "lucide-react"

export function CTAForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("email", email)
      await subscribeToTrial(formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-400" size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank You for Joining!</h3>
        <p className="text-white/80">
          We've sent a confirmation email to your inbox. Check it out to complete your registration.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
        >
          {isSubmitting ? "Processing..." : "Try It Free"}
        </Button>
      </form>
      <p className="text-white/60 text-sm mt-4">14-day free trial. No credit card required.</p>
    </div>
  )
}
