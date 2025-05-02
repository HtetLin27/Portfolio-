"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Senior Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    period: "Nov 2023 - Present",
    description: [
      "Developed and maintained core features for betterjobs.co, a modern job platform that connects job seekers with employers across various industries.",
      "Built dynamic and responsive UI components using Vue 3 and Tailwind CSS, ensuring a smooth and intuitive user experience across devices.",
      "Implemented frontend logic for job listings, search and filter features, job applications, user registration/login, and company profile management.",
      "Integrated GraphQL (Apollo Client) and REST APIs (via Axios) to fetch, update, and manage real-time data for jobs, users, and applications.",
      "Developed the frontend of a full-featured Applicant Tracking System (ATS) that streamlines the hiring workflow for employers.",
      "Developed the frontend of the Performance Appraisal module, enabling structured employee evaluations within an organisation.",
      "Set up the project architecture and frontend environment for a large-scale Customer Management System using Vue 3 and Nuxt.js 3.",
    ],
  },
  {
    title: "Junior Web Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    period: "Sep 2022 - Nov 2023",
    description: [
      "Assisted in the development of user interfaces for websites, focusing on responsive design and user experience.",
      "Participated in code reviews and contributed to maintaining high code quality standards for front-end applications.",
      "Collaborated with senior developers to implement interactive features using HTML, CSS, JavaScript, and front-end frameworks.",
      "Developed and maintained documentation for front-end processes and best practices to support team knowledge sharing.",
      "Utilized version control systems, such as Git, to manage changes in front-end code and collaborate effectively with the development team.",
      "Assisted in integrating APIs and third-party services into front-end applications, improving functionality and user interaction.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Freelance",
    location: "",
    period: "Jan 2022 - Sep 2022",
    description: [
      "Worked on various web development projects for clients.",
      "Designed and developed responsive websites using modern frontend technologies.",
    ],
  },
  {
    title: "Network Engineer",
    company: "Frontiir",
    location: "Mandalay, Myanmar",
    period: "Jan 2019 - Feb 2022",
    description: [
      "Team Leader, Customer Relationship Management (CRM)",
      "Worked with Switching, Routing protocols",
      "Implemented Wireless networking, Gigabit-Capable passive optical network (GPON)",
      "Managed Point to Point, Point to multipoint, WLAN, Survey Design",
      "Worked with FTTH, RF planning, Link Budget, NOC",
    ],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </motion.div>

          <div className="relative border-l-2 border-gray-300 dark:border-gray-700 ml-3 md:ml-6 pl-8 md:pl-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-12 relative">
                <div className="absolute -left-[41px] md:-left-[47px] top-0 w-8 h-8 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center">
                  <Briefcase size={16} className="text-gray-600 dark:text-gray-400" />
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1 mb-4">
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {exp.company}
                      {exp.location && `, ${exp.location}`}
                    </div>
                    <div className="text-gray-500 dark:text-gray-500 mt-1 sm:mt-0">{exp.period}</div>
                  </div>

                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
