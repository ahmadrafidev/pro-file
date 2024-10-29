import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"

export default function Layout({ children }) {
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
