import Link from "next/link"
import { Button } from "@/components/ui/button"
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-16 items-center justify-center flex-grow">
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Create Outstanding Resumes,
            <span className="block text-primary">within seconds.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stop spending hours crafting the perfect resume. 
            ProFile combines AI and proven templates to transform your experience into an ATS-friendly resume. 
            <span className="block font-bold text-black text-xl">No guesswork, just results.</span>
          </p>
        </div>
        <div className="flex flex-row space-x-8 items-center justify-center my-10">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg">Try ProFile</Button>
          <Link className="text-lg font-medium hover:underline" href="/about">
            Learn More
          </Link>
        </div>
      </main>
    </Layout>
  )
}
