import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Clock, Target, Users, Check, Star, Crown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="container mx-auto px-4 flex-grow">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-white to-zinc-100 rounded-3xl -z-10" />
          
          <div className="flex flex-col gap-8 text-center py-10 px-8">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                AI-Powered Resume Builder
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              Create Outstanding 
              <span className="block text-gray-800">
                Resumes in Seconds
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
              Stop spending hours crafting the perfect resume. ProFile combines AI and proven templates 
              to transform your experience into an ATS-friendly resume.
            </p>

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-lg font-semibold border border-green-200">
                <Zap className="h-5 w-5" />
                No guesswork, just results.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8">
              <Link href="/form">
                <Button 
                  size="lg" 
                  className="group bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Building Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <div className="text-xl font-semibold text-gray-500 flex items-center gap-2">
                <span>No credit card required</span>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm text-gray-500 mb-4">Trusted by job seekers worldwide</p>
              <div className="flex justify-center items-center gap-8 text-gray-400">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Resumes<br/>Generated</div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">ATS<br/>Pass Rate</div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="text-2xl font-bold text-gray-900">24hrs</div>
                <div className="text-sm text-gray-600">Average<br/>Time Saved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem/Solution Section */}
        <section className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-gray-900 mb-6">
              Why ProFile?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We solved the biggest pain points in resume creation so you can focus on landing your dream job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                The Old Way
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Switching between multiple resume files, adjusting formats for different positions, 
                and spending hours tweaking layouts instead of focusing on showcasing your experience.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-gray-400" />
                  <span className="font-semibold text-gray-600">Hours wasted on formatting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-gray-400" />
                  <span className="font-semibold text-gray-600">Multiple file versions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-gray-400" />
                  <span className="font-semibold text-gray-600">ATS rejection anxiety</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-900 p-8 rounded-2xl text-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-green-400" />
                  <span className="font-semibold">AI-powered optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-green-400" />
                  <span className="font-semibold">Single source of truth</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-green-400" />
                  <span className="font-semibold">Instant generation</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                The ProFile Way
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                One platform where you store your experience and instantly generate perfectly formatted 
                resumes for any role. No more juggling files or wrestling with formatting.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50 -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="h-4 w-4" />
                Simple, Transparent Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pay only for what you use. No monthly subscriptions, credits never expire.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto mb-16">
              {[
                {
                  name: "Starter Pack",
                  credits: 25,
                  price: "$5",
                  originalPrice: "$8",
                  description: "Perfect for individuals just getting started",
                  features: [
                    "Generate 10 ATS-optimized resumes",
                    "Access to 5+ professional templates",
                    "Basic customization options",
                    "Email support within 24 hours",
                    "PDF download & sharing",
                  ],
                  cta: "Get Started",
                  highlighted: false,
                  savings: "Save $3",
                  icon: Zap,
                },
                {
                  name: "Professional Pack",
                  credits: 75,
                  price: "$10",
                  originalPrice: "$15",
                  description: "For serious job seekers who need more power",
                  features: [
                    "Generate 30 ATS-optimized resumes",
                    "Access to 15+ premium templates",
                    "Advanced AI customization",
                    "Priority email support (2 hours)",
                    "Multiple format exports (PDF, DOCX)",
                    "Resume scoring & optimization tips",
                    "Cover letter generation",
                  ],
                  cta: "Go Professional",
                  highlighted: true,
                  savings: "Save $5",
                  icon: Crown,
                },
              ].map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`relative ${
                    plan.highlighted 
                      ? "border-2 border-gray-900 shadow-2xl scale-105 bg-white" 
                      : "border border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gray-900 text-white px-4 py-1 text-sm font-semibold">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-full ${plan.highlighted ? "bg-gray-100" : "bg-gray-50"}`}>
                        <plan.icon className={`h-8 w-8 ${plan.highlighted ? "text-gray-900" : "text-gray-600"}`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">{plan.description}</CardDescription>
                    
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <div className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </div>
                      <div className="text-left">
                        <div className="text-lg text-gray-400 line-through">{plan.originalPrice}</div>
                        <div className="text-sm font-semibold text-green-600">{plan.savings}</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mt-2">
                      {plan.credits} credits • No expiration
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-6">
                    <Button 
                      className={`w-full group ${
                        plan.highlighted 
                          ? "bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1" 
                          : "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-white"
                      } py-3 text-lg font-semibold rounded-xl transition-all duration-300`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Credits?</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
                    <Zap className="h-8 w-8 text-gray-700" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">No Monthly Fees</h4>
                  <p className="text-gray-600">Pay only for what you use. Credits never expire.</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
                    <Star className="h-8 w-8 text-gray-700" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Instant Results</h4>
                  <p className="text-gray-600">Generate professional resumes in seconds.</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-md">
                    <Crown className="h-8 w-8 text-gray-700" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Premium Quality</h4>
                  <p className="text-gray-600">AI-powered optimization that gets results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Last CTA Section */}
        <section className="py-32 md:py-60 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl tracking-tight font-bold text-gray-900 mb-4">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join 1000+ professionals who&apos;ve streamlined their resume creation process and landed their dream jobs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/form">
                <Button 
                  size="lg" 
                  className="group bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Building Your Resume
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
              <span>✓ No credit card required</span>
              <span>✓ Get your first resume in 5 minutes</span>
              <span>✓ 30-day money-back guarantee</span>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
