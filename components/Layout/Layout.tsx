import { ReactNode } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4">
        <Header />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
