"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link className="group flex items-center space-x-3 hover:opacity-80 transition-opacity" href="/">
            <div className="relative">
              <Image 
                alt="ProFile logo" 
                src="/images/resume.png" 
                width={44} 
                height={44} 
                className="group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <span className="text-3xl font-bold tracking-tight text-gray-900">
              ProFile
            </span>
          </Link>

          {/* CTA Button */}
          <Link href="/api/auth/login">
            <Button 
              size="lg" 
              className="group bg-gray-900 hover:bg-gray-800 text-white px-5 text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
