"use client"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">Htet Lin Ko</p>
            <p className="text-gray-400">Senior Web Front End Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full mb-4 transition-colors"
            >
              <ArrowUp size={20} />
            </button>

            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Htet Lin Ko. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
