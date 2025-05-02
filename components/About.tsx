"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download } from "lucide-react"
import Link from "next/link"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert mx-auto">
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Seeking a challenging role as a Senior Web Frontend Developer, where I can leverage my expertise and
              interpersonal skills to contribute to the success of a company focused on delivering exceptional customer
              satisfaction and experience.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I am confident in collaborating with cross-functional teams and working independently to achieve project
              goals. Currently employed as a Senior Web Frontend Developer at Better HR Company, Cambodia.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              With extensive experience in Vue.js, React, and modern frontend technologies, I specialize in building
              responsive, user-friendly interfaces and complex web applications. My background in networking and
              engineering provides me with a unique perspective on technical problem-solving and system architecture.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">5+</span>
              <span className="text-gray-600 dark:text-gray-400">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">20+</span>
              <span className="text-gray-600 dark:text-gray-400">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">10+</span>
              <span className="text-gray-600 dark:text-gray-400">Technologies</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <Link
              href="/resume-htet-lin-ko.pdf"
              download
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors"
            >
              <Download size={16} />
              Download Full Resume
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
