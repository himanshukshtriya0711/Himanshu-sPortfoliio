"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold gradient-text">
          Himanshu Singh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
            About Me
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">
            Projects
          </Link>
          <Link href="#achievements" className="text-gray-300 hover:text-purple-400 transition-colors">
            Achievements
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Resume</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-purple-900/50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link
              href="#skills"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="#achievements"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              Achievements
            </Link>
            <Link
              href="#contact"
              className="text-gray-300 hover:text-purple-400 transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">Resume</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
