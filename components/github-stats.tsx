"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function GithubStats() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const repositories = [
    {
      name: "data-science-toolkit",
      description: "A collection of reusable Python modules for data preprocessing, analysis, and visualization",
      stars: 124,
      forks: 45,
      language: "Python",
      url: "https://github.com/vizjourney/data-science-toolkit",
    },
    {
      name: "ml-model-deployment",
      description: "Templates and examples for deploying machine learning models in production environments",
      stars: 87,
      forks: 32,
      language: "Python",
      url: "https://github.com/vizjourney/ml-model-deployment",
    },
    {
      name: "visualization-templates",
      description: "Reusable templates for data visualization in Tableau, Power BI, and Python",
      stars: 76,
      forks: 28,
      language: "Jupyter Notebook",
      url: "https://github.com/vizjourney/visualization-templates",
    },
  ]

  return (
    <section id="github-stats" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 data-dots-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 bg-primary/5">
            Open Source
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading section-heading pb-4">
            GitHub Contributions
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my open-source projects and contributions on GitHub
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <Card className="h-full border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">GitHub Activity</h3>
                <div className="flex flex-col items-center">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=vizjourney&show_icons=true&theme=dark"
                    alt="GitHub Stats"
                    className="w-full max-w-2xl rounded-lg shadow-md mb-6"
                  />
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=vizjourney&theme=dark"
                    alt="GitHub Streak"
                    className="w-full max-w-2xl rounded-lg shadow-md"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <Card className="h-full border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Featured Repositories</h3>
                <div className="space-y-6">
                  {repositories.map((repo, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium flex items-center"
                        >
                          {repo.name}
                          <ExternalLink className="h-3.5 w-3.5 ml-1" />
                        </a>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span className="mr-3">⭐ {repo.stars}</span>
                          <span>🍴 {repo.forks}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{repo.description}</p>
                      <Badge variant="outline" className="bg-primary/5 text-primary text-xs">
                        {repo.language}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    onClick={() => window.open("https://github.com/vizjourney", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

