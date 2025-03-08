"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"

export default function Certifications() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      date: "May 2023",
      description: "Expertise in AWS data analytics services including Kinesis, Redshift, EMR, Athena, and QuickSight.",
      link: "https://aws.amazon.com/certification/certified-data-analytics-specialty/",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Professional Data Engineer",
      issuer: "Google Cloud",
      date: "January 2023",
      description:
        "Designing, building, and maintaining data processing systems with a focus on security, reliability, and scalability.",
      link: "https://cloud.google.com/certification/data-engineer",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "October 2022",
      description: "Building and training neural networks for computer vision, NLP, and time series forecasting.",
      link: "https://www.tensorflow.org/certificate",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "July 2022",
      description: "Implementing and running machine learning workloads on Azure Machine Learning.",
      link: "https://learn.microsoft.com/en-us/certifications/azure-data-scientist/",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "March 2022",
      description: "Creating and publishing visualizations, dashboards, and stories with Tableau Desktop.",
      link: "https://www.tableau.com/learn/certification/desktop-specialist",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      name: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "November 2021",
      description:
        "Comprehensive data science training covering Python, SQL, data analysis, visualization, machine learning, and deep learning.",
      link: "https://www.ibm.com/training/badge/data-science-professional-certificate",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-muted/30 relative overflow-hidden">
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
            Credentials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading section-heading pb-4">Certifications</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Professional certifications validating my expertise in data science and analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="h-full card-hover border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 flex items-center"
                      >
                        View Certificate
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

