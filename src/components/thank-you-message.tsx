"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export function ThankYouMessage() {
  useEffect(() => {
    // Trigger confetti effect when component mounts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
          <CheckCircle className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl">Thank You!</CardTitle>
        <CardDescription className="text-white/70">You've successfully joined our waitlist</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="mb-4 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-white/10">
          <h3 className="text-lg font-bold mb-2">Exclusive Early Bird Offer</h3>
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            75% OFF
          </div>
          <p className="text-white/80">
            As one of our first waitlist members, you'll receive a 75% discount on your first month when we launch!
          </p>
        </div>
        <p className="text-sm text-white/70">We'll notify you when Dmme is ready to launch. Stay tuned for updates!</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => (window.location.href = "/")}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Back to Home
        </Button>
      </CardFooter>
    </Card>
  )
}
