"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Weather Teller App",
      description: "A React-based weather application that provides real-time weather information for any location.",
      technologies: ["React", "Weather API", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "TO-DO List",
      description: "A Django application for managing tasks with CRUD operations and user authentication.",
      technologies: ["Django", "Python", "Bootstrap"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "Grocery List Items",
      description: "A Django application for managing grocery items with CRUD operations.",
      technologies: ["Django", "Python", "SQLite"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "AI Chat-bot",
      description: "An intelligent chatbot built with Bot press for automated customer support.",
      technologies: ["Bot press", "NLP", "JavaScript"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "E-commerce Landing Pages",
      description: "Clones of Amazon and Flipkart landing pages with responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "AI Chat Bot with React",
      description: "A React-based AI chatbot with natural language processing capabilities.",
      technologies: ["React", "NLP API", "CSS"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React to showcase projects and skills.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
    {
      title: "Sonar Rock & Mine Prediction",
      description: "A machine learning model to predict whether an object is a rock or a mine based on sonar data.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      image: "/placeholder.svg?height=200&width=400",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-800/20 rounded-full filter blur-3xl"></div>
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
            My <span className="gradient-text">Projects</span>
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
            A collection of projects I've built to showcase my skills and experience in web development, machine
            learning, and software engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50 overflow-hidden card-hover h-full flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-purple-900/50 text-purple-300 border border-purple-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-900/30"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
