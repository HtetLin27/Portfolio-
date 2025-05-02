"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Download } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "JobLanding Website",
    description: "A modern job platform that connects job seekers with employers across various industries.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    technologies: ["Vue 3", "Tailwind CSS", "GraphQL", "Apollo Client"],
    link: "https://betterjobs.co/",
    github: null,
    type: "job"
  },
  {
    title: "Applicant Tracking System",
    description:
      "A full-featured ATS that streamlines the hiring workflow for employers with a five-stage candidate pipeline.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    technologies: ["Vue 3", "Tailwind CSS", "GraphQL", "REST API"],
    link: "#",
    github: null,
    type: "job"
  },
  {
    title: "Performance Appraisal System",
    description:
      "A module enabling structured employee evaluations within an organisation with multi-round review capabilities.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
    technologies: ["Vue 3", "Nuxt.js", "Tailwind CSS", "GraphQL"],
    link: "#",
    github: null,
    type: "job"
  },
  {
    title: "Customer Management Tools",
    description:
      "A large-scale Customer Management System with modules for customer tracking, core data, reporting, and currency management.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
    technologies: ["Vue 3", "Nuxt.js 3", "Tailwind CSS", "Chart.js", "GraphQL"],
    link: "#",
    github: null,
    type: "job"
  },
  {
    title: "Expense Form Website",
    description: "A web-based Expense Management System for submitting, tracking, and approving expense requests.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Laravel"],
    link: "#",
    github: null,
    type: "job"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with features like product management, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    link: "https://your-ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce",
    type: "github"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, user authentication, and team features.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2070",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    link: "https://your-taskmanager-demo.com",
    github: "https://github.com/yourusername/taskmanager",
    type: "github"
  }
]

export default function Projects() {
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-6"></div>
            <a
              href="https://drive.google.com/file/d/1aKqQyrX7cVrFaxUzOaCVtH6Ay6EoxRS-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              <Download size={16} className="mr-2" />
              Download Resume
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      project.type === 'job' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {project.type === 'job' ? 'Work Project' : 'Personal Project'}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        Visit Project <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      >
                        View Code <Github size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
