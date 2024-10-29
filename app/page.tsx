import Link from "next/link";
import Image from 'next/image';

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image alt="ProFile logo" src="/images/resume.png" width={40} height={40}/>
          <span className="text-3xl font-bold tracking-tighter">ProFile</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link className="text-lg font-medium hover:underline" href="/about">
            About
          </Link>
          <Link className="text-lg font-medium hover:underline" href="/pricing">
            Pricing
          </Link>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold">Join</Button>
      </nav>

      <main className="container mx-auto px-4 py-16 items-center justify-center flex-grow">
        <div className="flex flex-col gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Create Outstanding Resumes,
            <span className="block text-primary">within seconds.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stop spending hours crafting the perfect resume. 
            ProFile AI and proven templates transform your experience into an ATS-friendly resume. 
            <span className="block font-bold text-black text-xl"> No guesswork, just result.</span>
          </p>
        </div>
        <div className="flex flex-row space-x-6 items-center justify-center my-10">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base">Try Profile</Button>
          <Link className="text-lg font-medium hover:underline" href="/about">
            Learn More
          </Link>
        </div>
      </main>

      <footer className="container w-full mx-auto px-4 py-4 flex items-center justify-between">
        <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">
            Built by <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">Rafi</Link>.
        </p>
        <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} ProFile. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
