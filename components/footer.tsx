"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="py-12 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 data-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold">
              <span className="text-primary">Gourav</span>
              <span className="text-secondary">Chandra</span>
            </p>
            <p className="text-muted-foreground mt-2 max-w-md">
              Transforming data into insights and innovative solutions
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/vizjourney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gouravchandra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.kaggle.com/hydravi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Kaggle Profile"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">© {currentYear} Gourav Chandra. All rights reserved.</p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="mt-8 pt-8 border-t border-muted-foreground/10 text-center"
        >
          <p className="text-xs text-muted-foreground">Designed and developed with passion for data and analytics</p>
        </motion.div>
      </div>
    </footer>
  )
}

