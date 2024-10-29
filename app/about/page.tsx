import { Button } from "@/components/ui/button"
import Link from "next/link"

import Layout from '@/components/Layout/Layout';


export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About ProFile</h1>
      </div>
      <main className="container mx-auto px-4">
        <section className="max-w-3xl mx-auto space-y-8">
          <p className="text-xl">
            We&apos;ve all been there – switching between multiple resume files, adjusting formats for different positions, and spending hours tweaking layouts instead of focusing on what matters: 
            <span className="font-bold"> showcasing your experience.</span>
          </p>
          <p className="text-xl">
            That&apos;s why I created ProFile. 
            One platform where you can store your experience and instantly generate perfectly formatted resumes for any role. 
            No more juggling files or wrestling with formatting – simply add your experience, let our AI handle the rest.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild className="text-xl">
              <Link href="/login">Get started!</Link>
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  )
}