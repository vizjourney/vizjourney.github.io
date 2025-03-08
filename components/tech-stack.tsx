"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Server, BarChart, Cloud, Cpu } from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming & Query Languages",
      description: "Core languages for data analysis and processing",
      skills: [
        {
          name: "Python",
          level: 95,
          description: "Primary language for data analysis, ML model development, and automation",
        },
        { name: "SQL", level: 90, description: "Complex queries, database optimization, and data extraction" },
        { name: "R", level: 80, description: "Statistical analysis and specialized data visualization" },
        { name: "Bash/Shell", level: 85, description: "Automation, data processing, and system integration" },
      ],
    },
    dataTools: {
      icon: <BarChart className="h-6 w-6" />,
      title: "Data Analysis & Visualization",
      description: "Tools for processing, analyzing and visualizing data",
      skills: [
        { name: "Pandas", level: 95, description: "Data manipulation, cleaning, and exploratory analysis" },
        { name: "NumPy", level: 90, description: "Numerical computing and array operations" },
        { name: "Scikit-learn", level: 90, description: "Machine learning algorithms and model evaluation" },
        { name: "TensorFlow", level: 85, description: "Deep learning models and neural networks" },
        { name: "Tableau", level: 90, description: "Interactive dashboards and business intelligence" },
        { name: "Power BI", level: 85, description: "Data visualization and reporting" },
        { name: "Matplotlib/Seaborn", level: 90, description: "Custom data visualizations and statistical plots" },
      ],
    },
    cloud: {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & Infrastructure",
      description: "Cloud platforms and infrastructure tools",
      skills: [
        { name: "AWS", level: 85, description: "EC2, S3, Lambda, SageMaker, Redshift, and Glue" },
        { name: "Digital Ocean", level: 80, description: "Droplets, Spaces, and managed databases" },
        { name: "Google Cloud", level: 75, description: "BigQuery, Dataflow, and AI Platform" },
        { name: "Azure", level: 70, description: "Azure ML, Data Factory, and Synapse Analytics" },
        { name: "Terraform", level: 75, description: "Infrastructure as code and cloud provisioning" },
      ],
    },
    devOps: {
      icon: <Server className="h-6 w-6" />,
      title: "DevOps & Containers",
      description: "Tools for deployment, orchestration, and CI/CD",
      skills: [
        { name: "Docker", level: 90, description: "Containerization of data applications and services" },
        { name: "Kubernetes", level: 85, description: "Orchestration of containerized applications" },
        { name: "CI/CD", level: 80, description: "Automated testing and deployment pipelines" },
        { name: "Git", level: 95, description: "Version control and collaborative development" },
        { name: "Airflow", level: 85, description: "Workflow management and task scheduling" },
      ],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Database management and optimization",
      skills: [
        { name: "PostgreSQL", level: 90, description: "Relational database for structured data" },
        { name: "MySQL", level: 85, description: "Relational database for web applications" },
        { name: "MongoDB", level: 80, description: "NoSQL database for document storage" },
        { name: "Redis", level: 75, description: "In-memory data structure store and caching" },
        { name: "Elasticsearch", level: 80, description: "Search and analytics engine" },
        { name: "Snowflake", level: 85, description: "Cloud data warehouse for analytics" },
      ],
    },
    specialized: {
      icon: <Cpu className="h-6 w-6" />,
      title: "Specialized Tools",
      description: "Domain-specific tools and frameworks",
      skills: [
        { name: "Spark", level: 85, description: "Distributed computing for big data processing" },
        { name: "Kafka", level: 80, description: "Real-time data streaming and event processing" },
        { name: "dbt", level: 85, description: "Data transformation and modeling" },
        { name: "Jupyter", level: 95, description: "Interactive computing and data exploration" },
        { name: "Streamlit", level: 90, description: "Data app development and prototyping" },
        { name: "Grafana", level: 80, description: "Metrics visualization and monitoring" },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20 bg-muted/30 relative overflow-hidden">
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
            Technical Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading section-heading pb-4">My Tech Stack</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A comprehensive toolkit of technologies I use to build end-to-end data solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category], index) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-primary/10 ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="skill-bar-fill"
                              />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 4).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-primary/5 text-primary hover:bg-primary/10"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 4 && (
                        <Badge variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10">
                          +{category.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <p className="max-w-2xl mx-auto text-muted-foreground">
            My continuous learning approach ensures I stay current with the latest data technologies and methodologies,
            allowing me to deliver cutting-edge solutions to complex data challenges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

