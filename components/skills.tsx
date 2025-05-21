"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server, Layers, Cpu, BrainCircuit, Palette } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code2 className="h-6 w-6 text-purple-400" />,
      items: ["Python", "Java", "C", "JavaScript"],
    },
    {
      category: "Web Development",
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      items: ["HTML", "CSS", "React", "Django"],
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6 text-purple-400" />,
      items: ["MySQL"],
    },
    {
      category: "Tools & Technologies",
      icon: <Cpu className="h-6 w-6 text-purple-400" />,
      items: ["Bot press"],
    },
    {
      category: "Problem Solving",
      icon: <BrainCircuit className="h-6 w-6 text-purple-400" />,
      items: ["Data Structures", "Algorithms"],
    },
    {
      category: "UI/UX",
      icon: <Palette className="h-6 w-6 text-purple-400" />,
      items: ["Responsive Design"],
    },
    {
      category: "Backend",
      icon: <Server className="h-6 w-6 text-purple-400" />,
      items: ["Django", "RESTful APIs"],
    },
    {
      category: "Architecture",
      icon: <Layers className="h-6 w-6 text-purple-400" />,
      items: ["MVC Pattern"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black/50 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-800/20 rounded-full filter blur-3xl"></div>
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
            Technical <span className="gradient-text">Skills</span>
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
            Skilled in various programming languages and technologies with a focus on web development and
            problem-solving.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50 rounded-xl p-6 backdrop-blur-sm card-hover"
            >
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
