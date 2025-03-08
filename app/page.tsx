import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import GithubStats from "@/components/github-stats"
import Publications from "@/components/publications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Certifications from "@/components/certifications"

export const metadata: Metadata = {
  title: "Gourav Chandra | Data Professional",
  description: "Portfolio of Gourav Chandra - Data Scientist, ML Engineer, and Analytics Expert",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certifications />
        <Publications />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

