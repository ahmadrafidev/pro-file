import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import Layout from '@/components/Layout/Layout';

export default function PricingPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Pricing</h1>
        <p className="mt-4 text-lg text-gray-600">
          Purchase credits to generate ATS-optimized resumes and access additional features on ProFile.
        </p>
      </div>

      <main className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              name: "Starter Pack",
              credits: 25,
              price: "$5",
              description: "For individuals just getting started",
              features: ["10 ATS-optimized resumes", "Basic templates", "Email support"],
              cta: "Purchase 25 Credits",
              highlighted: false,
            },
            {
              name: "Professional Pack",
              credits: 75,
              price: "$10",
              description: "For job seekers who need more",
              features: ["30 ATS-optimized resumes", "Premium templates", "Priority email support"],
              cta: "Purchase 75 Credits",
              highlighted: true,
            },
          ].map((plan) => (
            <Card key={plan.name} className={plan.highlighted ? "border-primary shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">
                  {plan.price}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </Layout>
  )
}
