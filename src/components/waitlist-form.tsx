"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitToWaitlist } from "@/actions/waitlist"
import { ThankYouMessage } from "./thank-you-message"

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [price, setPrice] = useState("")
  const [currency, setCurrency] = useState("USD")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      // Add price and currency to form data
      formData.append("price", price)
      formData.append("currency", currency)

      await submitToWaitlist(formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return <ThankYouMessage />
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          Email <span className="text-pink-400">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className="space-y-3">
        <Label className="text-white">How much would you pay for this tool per month?</Label>
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              type="number"
              min="0"
              step="0.01"
              placeholder="Enter amount"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full"
            />
          </div>
          <div className="w-32">
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD ($)</SelectItem>
                <SelectItem value="EUR">EUR (€)</SelectItem>
                <SelectItem value="GBP">GBP (£)</SelectItem>
                <SelectItem value="JPY">JPY (¥)</SelectItem>
                <SelectItem value="CAD">CAD (C$)</SelectItem>
                <SelectItem value="AUD">AUD (A$)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 border-0"
      >
        {isSubmitting ? "Joining waitlist..." : "Join the waitlist"}
      </Button>

      <p className="text-xs text-white/60 text-center">
        By joining, you'll be the first to know when we launch and receive exclusive early access.
      </p>
    </form>
  )
}
