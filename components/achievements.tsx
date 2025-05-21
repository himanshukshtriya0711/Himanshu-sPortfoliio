"use client"

import { motion } from "framer-motion"
import { Award, Medal, Trophy, Flag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Achievements() {
  const achievements = [
    {
      title: "Bronze Medal",
      description: "UP State Boxing Championship",
      icon: <Medal className="h-6 w-6 text-purple-400" />,
      color: "from-amber-600/20 to-amber-900/40",
    },
    {
      title: "Open-National Boxing Tournament",
      description: "Participated in tournament held at Rohtak",
      icon: <Trophy className="h-6 w-6 text-purple-400" />,
      color: "from-purple-600/20 to-purple-900/40",
    },
    {
      title: "Senior Sports Captain",
      description: "Leadership role at School",
      icon: <Flag className="h-6 w-6 text-purple-400" />,
      color: "from-blue-600/20 to-blue-900/40",
    },
    {
      title: "9th Position",
      description: "8km Cross Country race held at Agra",
      icon: <Award className="h-6 w-6 text-purple-400" />,
      color: "from-green-600/20 to-green-900/40",
    },
    {
      title: "District Level Medals",
      description: "20 Gold, 5 Silver, and 2 Bronze medals",
      icon: <Medal className="h-6 w-6 text-purple-400" />,
      color: "from-yellow-600/20 to-yellow-900/40",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-black/50 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-800/20 rounded-full filter blur-3xl"></div>
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
            My <span className="gradient-text">Achievements</span>
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
            Recognitions and accomplishments in sports and leadership roles that demonstrate my dedication and
            competitive spirit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${achievement.color} border border-purple-900/50 card-hover h-full`}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <div>
                    <CardTitle>{achievement.title}</CardTitle>
                    <CardDescription className="text-gray-400">{achievement.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">
                    This achievement demonstrates my dedication, perseverance, and ability to excel in competitive
                    environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-purple-900/40 to-black border border-purple-900/50 rounded-xl p-6 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Sports & Leadership</h3>
              <p className="text-gray-400 max-w-lg">
                My background in sports has instilled in me the values of discipline, teamwork, and perseverance. These
                qualities translate directly to my approach to software development and problem-solving.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-purple-400" />
              </div>
              <div className="w-20 h-20 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Medal className="h-10 w-10 text-purple-400" />
              </div>
              <div className="w-20 h-20 bg-purple-900/50 rounded-full flex items-center justify-center">
                <Flag className="h-10 w-10 text-purple-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
