"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart2, Database, BrainCircuit, TrendingUp } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "3", label: "Industry Domains" },
    { value: "12+", label: "Data Tools" },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 data-grid-pattern opacity-10"></div>
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading section-heading pb-4">My Journey</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Transforming data into insights and solutions that drive business value and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Data Professional with Domain Expertise</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                I'm a passionate data professional with a proven track record in transforming complex data challenges
                into actionable insights and innovative solutions. Currently working as an E-commerce Executive, I
                leverage data-driven approaches to optimize operations and drive business growth.
              </p>
              <p>
                My expertise spans across multiple domains including{" "}
                <span className="text-foreground font-medium">Logistics</span>,
                <span className="text-foreground font-medium"> E-commerce</span>,
                <span className="text-foreground font-medium"> Insurance</span>, and the
                <span className="text-foreground font-medium"> Financial Sector</span>, allowing me to bring diverse
                perspectives to data problems.
              </p>
              <p>
                I specialize in end-to-end data solutions, from data collection and processing to advanced analytics,
                machine learning model development, and creating intuitive data visualizations that tell compelling
                stories.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card className="card-hover border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full">
                      <BarChart2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Data Analysis & Visualization</h4>
                      <p className="text-muted-foreground">
                        Transforming raw data into actionable insights through statistical analysis and creating
                        compelling visualizations that communicate complex findings clearly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card className="card-hover border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-3 rounded-full">
                      <BrainCircuit className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Machine Learning & AI</h4>
                      <p className="text-muted-foreground">
                        Developing predictive models and implementing machine learning solutions to solve complex
                        business problems and automate decision-making processes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card className="card-hover border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-3 rounded-full">
                      <Database className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Data Engineering</h4>
                      <p className="text-muted-foreground">
                        Building robust data pipelines and infrastructure to collect, process, and store data
                        efficiently, ensuring data quality and accessibility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={fadeIn}
            >
              <Card className="card-hover border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Business Intelligence</h4>
                      <p className="text-muted-foreground">
                        Translating data insights into strategic business recommendations, helping organizations make
                        data-driven decisions that improve performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

