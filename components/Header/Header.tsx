import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <Link className="flex items-center space-x-1" href="/">
        <Image alt="ProFile logo" src="/images/resume.png" width={40} height={40} />
        <span className="text-3xl font-bold tracking-tighter">ProFile</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-4 text-gray-600">
        <Link className="text-lg font-medium hover:underline" href="/about">
          About
        </Link>
        <Link className="text-lg font-medium hover:underline" href="/pricing">
          Pricing
        </Link>
      </nav>
      <Link passHref href="/api/auth/login">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-semibold">
          Join
        </Button>
      </Link>
    </header>
  )
}
