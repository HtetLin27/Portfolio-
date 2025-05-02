"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      } 
    },
  }

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      } 
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
          </motion.div>

          <div className="mb-16">
            <motion.h3 
              variants={itemVariants} 
              className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              Technologies & Tools
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {/* HTML */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"/>
                      <path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z"/>
                      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"/>
                      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"/>
                    </svg>
                  </motion.div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      variants={circleVariants}
                      className="text-orange-500 stroke-current"
                      strokeWidth="3"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">HTML5</span>
              </motion.div>

              {/* CSS */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"/>
                      <path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"/>
                      <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"/>
                      <path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"/>
                      <path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"/>
                      <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"/>
                    </svg>
                  </motion.div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      variants={circleVariants}
                      className="text-blue-500 stroke-current"
                      strokeWidth="3"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">CSS</span>
              </motion.div>

              {/* JavaScript */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
                      <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"/>
                    </svg>
                  </motion.div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      variants={circleVariants}
                      className="text-yellow-500 stroke-current"
                      strokeWidth="3"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">JavaScript</span>
              </motion.div>

              {/* React */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <g fill="#61DAFB">
                        <circle cx="64" cy="64" r="11.4"/>
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4"/>
                      </g>
                    </svg>
                  </motion.div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      variants={circleVariants}
                      className="text-cyan-500 stroke-current"
                      strokeWidth="3"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">React</span>
              </motion.div>

              {/* Vue */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"/>
                      <path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"/>
                      <path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"/>
                    </svg>
                  </motion.div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      variants={circleVariants}
                      className="text-emerald-500 stroke-current"
                      strokeWidth="3"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Vue.js</span>
              </motion.div>

              {/* Tailwind CSS */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"/>
                    </svg>
                  </motion.div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      variants={circleVariants}
                      className="text-sky-500 stroke-current"
                      strokeWidth="3"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Tailwind CSS</span>
              </motion.div>

              {/* TypeScript */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/>
                      <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"/>
                    </svg>
                  </motion.div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      variants={circleVariants}
                      className="text-blue-600 stroke-current"
                      strokeWidth="3"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">TypeScript</span>
              </motion.div>

              {/* Node.js */}
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3">
                  <motion.div 
                    variants={iconVariants}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
                      <path fill="#43853d" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"/>
                      <path fill="#43853d" d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072"/>
                      <path fill="#43853d" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.

I apologize for the issue with the code. Let me provide a more concise version of the Skills component with icons:\

\
