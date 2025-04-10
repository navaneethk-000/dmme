import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageSquare, Filter, BarChart3, Zap, CheckCheck } from "lucide-react"
import { CTAForm } from "@/components/cta-form"
import Header from "@/components/header"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Header/>
      
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute top-0 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 border-purple-400/30 bg-purple-400/10 text-purple-200">
            Simplify Your Influencer Life
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            All Your Collab DMs.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              One Inbox.
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Dmme helps you manage, sort, and reply to brand inquiries across platforms—effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
              <Link href="#cta">Try It Free</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

          {/* Dashboard Preview */}
          {/* <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-purple-950/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="border-b border-white/10 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm text-white/60">Dmme Dashboard</div>
                <div></div>
              </div>
              <div className="p-4">
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Dmme Dashboard Preview"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-black/20 backdrop-blur-lg" id="problem">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-pink-400/30 bg-pink-400/10 text-pink-200">
              The Problem
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Too Many DMs. Too Little Time?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              As your influence grows, so does the chaos in your inbox. We've got the solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pain Point 1 */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <MessageSquare className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">Brand deals getting lost in your Insta DMs?</h3>
                <p className="text-gray-300">
                  Stop missing opportunities because they're buried under hundreds of messages.
                </p>
              </CardContent>
            </Card>

            {/* Pain Point 2 */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                  <Filter className="text-pink-400" size={24} />
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">Hard to track who reached out and when?</h3>
                <p className="text-gray-300 ">
                  No more scrolling through endless DMs trying to remember which brand contacted you last week.
                </p>
              </CardContent>
            </Card>

            {/* Pain Point 3 */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">Managing collabs with 10 open chats?</h3>
                <p className="text-gray-300">
                  Simplify your workflow by centralizing all your collaboration conversations in one place.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-indigo-400/30 bg-indigo-400/10 text-indigo-200">
              The Solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Collab Command Center</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Take control of your brand collaborations with powerful tools designed for creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-16 items-center">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"> */}
            {/* <div>
              <div className="bg-purple-950/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <img src="/placeholder.svg?height=600&width=800" alt="Centralized DM Dashboard" className="w-full" />
              </div>
            </div> */}
            {/* <div className="space-y-8"> */}
            <div className="flex flex-col md:flex-row" >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Centralized DM Dashboard</h3>
                <p className="text-white/70">
                  Connect Instagram, TikTok, Twitter, and more. All your messages in one unified inbox.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Filter className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Auto-sorting Messages</h3>
                <p className="text-white/70">
                  AI automatically categorizes messages by brand type, collaboration potential, and urgency.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Quick Reply Templates</h3>
                <p className="text-white/70">
                  Respond faster with customizable templates for different types of brand inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Analytics on Responses</h3>
                <p className="text-white/70">
                  Track response rates, collaboration conversions, and identify your most valuable partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black/20 backdrop-blur-lg" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-purple-400/30 bg-purple-400/10 text-purple-200">
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Get started in minutes with these three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full backdrop-blur-sm">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Connect Your Socials</h3>
                  <p className="text-white/70 mb-4">
                    Link your Instagram, TikTok, Twitter, and other social accounts with just a few clicks.
                  </p>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Connect Social Accounts"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full backdrop-blur-sm">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Set Your Collab Preferences</h3>
                  <p className="text-white/70 mb-4">
                    Define your brand values, collaboration rates, and the types of partnerships you're interested in.
                  </p>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Set Collaboration Preferences"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full backdrop-blur-sm">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Manage Inquiries Like a Pro</h3>
                  <p className="text-white/70 mb-4">
                    Start receiving organized DMs in your Dmme dashboard and respond efficiently.
                  </p>
                  <img
                    src="/placeholder.svg?height=200&width=300"
                    alt="Manage Inquiries"
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-pink-400/30 bg-pink-400/10 text-pink-200">
              Simple Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">One Plan. All Features.</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              No complicated tiers. Just one affordable plan with everything you need.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-white/10 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                MOST POPULAR
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white">Unlimited Plan</h3>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                    $5
                  </span>
                  <span className="text-white mb-1">/ month</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-300 shrink-0 mt-1" size={20} />
                    <span className="text-white">Unlimited DMs across all platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-300 shrink-0 mt-1" size={20} />
                    <span className="text-white">AI-powered message sorting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-300 shrink-0 mt-1" size={20} />
                    <span className="text-white">Custom reply templates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-300 shrink-0 mt-1" size={20} />
                    <span className="text-white">Analytics dashboard</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-purple-300 shrink-0 mt-1" size={20} />
                    <span className="text-white">Priority support</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                >
                  <Link href="#cta">Get Started</Link>
                </Button>

                <p className="text-center text-white/60 text-sm mt-4">
                  No credit card required to start your free trial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-lg" id="cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Hundreds of Creators Getting Their Inboxes in Control
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Start your free trial today and experience the difference of a streamlined collaboration workflow.
            </p>

            <CTAForm />

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <CheckCheck className="text-green-400" size={20} />
                <span className="text-white/80">Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCheck className="text-green-400" size={20} />
                <span className="text-white/80">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCheck className="text-green-400" size={20} />
                <span className="text-white/80">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
