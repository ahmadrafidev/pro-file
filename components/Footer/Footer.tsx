import Link from "next/link"

export function Footer() {
  return (
    <footer className="container w-full mx-auto px-4 py-4 flex items-center justify-between">
      <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">
        Built by{" "}
        <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">
          Rafi
        </Link>
        .
      </p>
      <p className="text-xs md:text-sm font-normal text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} ProFile. All rights reserved.
      </p>
    </footer>
  )
}
