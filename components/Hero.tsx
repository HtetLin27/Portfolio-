"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">Htet Lin Ko</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-8">
              Senior Web Front End Developer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <Link
              href="https://linkedin.com/in/htet-lin-ko-411b02204"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/HtetLin27"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:htetlinko.dev@gmail.com"
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              href="#about"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              View My Work
              <ArrowDown size={16} />
            </Link>

            <Link
              href="https://drive.google.com/file/d/1aKqQyrX7cVrFaxUzOaCVtH6Ay6EoxRS-/view?usp=drive_link"
              download
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors"
            >
              Download Resume
              <Download size={16} />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ArrowDown className="text-white/70" />
      </motion.div>
    </section>
  )
}
