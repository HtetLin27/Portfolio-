"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering - (Electronics and Communications Engineering)",
    specialization: "Computer Systems Networking and Telecommunications",
    institution: "Technology University",
    period: "Dec 2012 - Dec 2018",
  },
  {
    degree: "Cisco Certified Network Associate",
    specialization: "Computer Systems Networking and Telecommunications",
    institution: "Cisco Networking Academy",
    period: "Jun 2019 - Jan 2020",
  },
]

const certificates = [
  { name: "CCNA Certified", date: "Jan 2020" },
  { name: "Building Modern UIs with React Router v6", date: "Oct 2024" },
  { name: "React: Building Styles with CSS Modules", date: "Oct 2024" },
  { name: "React.js Essential Training", date: "Oct 2024" },
  { name: "React.js: Building an Interface", date: "Oct 2024" },
  { name: "CSS Essential Training", date: "Oct 2024" },
  { name: "Tailwind CSS 3 Essential Training", date: "Oct 2024" },
  { name: "React: Creating and Hosting a Full-Stack Site", date: "Oct 2024" },
  { name: "Node.js Essential Training", date: "Nov 2024" },
  { name: "Express Essentials: Build Powerful Web Apps with Node.js", date: "Nov 2024" },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="mr-2" /> Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.specialization}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      <p className="text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="mr-2" /> Certifications
              </h3>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <ul className="space-y-3">
                  {certificates.map((cert, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b border-gray-200 dark:border-gray-600 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{cert.name}</span>
                      <span className="text-gray-500 dark:text-gray-500 text-sm">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
