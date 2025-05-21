"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Code, User } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-800/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-purple-600 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Ambitious B.Tech Computer Science student with a foundation in programming, software development, and a
            passion for creating innovative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">B.Tech Computer Science</h4>
                  <p className="text-gray-400">GLA University | 2022 - Present</p>
                  <p className="text-purple-400">77.1% in first year</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Intermediate (PCM)</h4>
                  <p className="text-gray-400">CBSE Board | 2023</p>
                  <p className="text-purple-400">72%</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">High School</h4>
                  <p className="text-gray-400">CBSE Board | 2021</p>
                  <p className="text-purple-400">86%</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Domain Skills</h4>
                  <p className="text-gray-400">Web Development</p>
                  <p className="text-gray-400">Data Structures & Algorithms</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Interpersonal Skills</h4>
                  <p className="text-gray-400">Problem Solving</p>
                  <p className="text-gray-400">Team Working & Collaboration</p>
                  <p className="text-gray-400">People Management & Decision Making</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Sports</h4>
                  <p className="text-gray-400">Boxing</p>
                  <p className="text-gray-400">Athletics</p>
                  <p className="text-gray-400">Leadership</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
