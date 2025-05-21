"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-800/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl text-purple-400 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text">Himanshu Singh</h1>
            <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
               GEN AI Enthusiast & <span className="gradient-text">FullStack Developer</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg">
              Ambitious Computer Science student with a foundation in programming, software development, and web
              technologies. Passionate about solving real-world challenges through innovative tech solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
                Contact Me
              </Button>

              <div className="flex items-center gap-4 ml-2">
                <Link
                  href="https://www.linkedin.com/in/himanshu-singh-b605aa307/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-purple-600/20 hover:text-purple-400"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-purple-600/20 hover:text-purple-400"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50 p-6 backdrop-blur-sm animate-float glow-border">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/30 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-800/30 rounded-full filter blur-xl"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="font-mono text-sm text-gray-300">
                      <div className="mb-2">
                        <span className="text-purple-400">const</span> <span className="text-green-400">developer</span>{" "}
                        = {"{"}
                      </div>
                      <div className="ml-4 mb-1">
                        <span className="text-purple-300">name:</span>{" "}
                        <span className="text-yellow-300">'Himanshu Singh'</span>,
                      </div>
                      <div className="ml-4 mb-1">
                        <span className="text-purple-300">education:</span>{" "}
                        <span className="text-yellow-300">'B.Tech CSE @ GLA University'</span>,
                      </div>
                      <div className="ml-4 mb-1">
                        <span className="text-purple-300">skills:</span> [
                        <span className="text-yellow-300">'React'</span>,{" "}
                        <span className="text-yellow-300">'Django'</span>,{" "}
                        <span className="text-yellow-300">'Python'</span>,{" "}
                        <span className="text-yellow-300">'Java'</span>],
                      </div>
                      <div className="ml-4 mb-1">
                        <span className="text-purple-300">interests:</span> [
                        <span className="text-yellow-300">'Web Dev'</span>,{" "}
                        <span className="text-yellow-300">'DSA'</span>,{" "}
                        <span className="text-yellow-300">'Boxing'</span>],
                      </div>
                      <div className="mb-2">{"}"}</div>
                    </div>
                  </div>

                  <div className="font-mono text-sm text-gray-300">
                    <div className="mb-2">
                      <span className="text-purple-400">function</span> <span className="text-blue-400">contactMe</span>
                      () {"{"}
                    </div>
                    <div className="ml-4 mb-1">
                      <span className="text-purple-400">return</span>{" "}
                      <span className="text-yellow-300">'himanshu.kshatriya0711@gmail.com'</span>
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
