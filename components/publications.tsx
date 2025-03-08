"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Calendar, ExternalLink } from "lucide-react"

export default function Publications() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const publications = [
    {
      id: 1,
      title: "Optimizing Last-Mile Delivery Routes Using Machine Learning",
      publisher: "Journal of Supply Chain Management",
      date: "June 2023",
      description:
        "A comprehensive study on applying machine learning algorithms to optimize last-mile delivery routes in urban environments, resulting in significant cost savings and improved delivery times.",
      link: "https://vizjourney.com/publications/last-mile-delivery",
      tags: ["Logistics", "Machine Learning", "Optimization"],
    },
    {
      id: 2,
      title: "Predictive Analytics for E-commerce Customer Behavior",
      publisher: "International Conference on Data Science",
      date: "March 2023",
      description:
        "Research paper presenting a novel approach to predicting customer behavior in e-commerce platforms using ensemble learning techniques and behavioral pattern recognition.",
      link: "https://vizjourney.com/publications/ecommerce-analytics",
      tags: ["E-commerce", "Predictive Analytics", "Customer Behavior"],
    },
    {
      id: 3,
      title: "Blockchain-Based Supply Chain Traceability: A Case Study",
      publisher: "IEEE Blockchain Conference",
      date: "November 2022",
      description:
        "Case study examining the implementation of blockchain technology for end-to-end supply chain traceability in the pharmaceutical industry, addressing challenges and benefits.",
      link: "https://vizjourney.com/publications/blockchain-supply-chain",
      tags: ["Blockchain", "Supply Chain", "Traceability"],
    },
    {
      id: 4,
      title: "Anomaly Detection in Financial Transactions Using Deep Learning",
      publisher: "Journal of Financial Data Science",
      date: "August 2022",
      description:
        "Research on applying deep learning techniques for detecting anomalies in financial transactions, with a focus on reducing false positives while maintaining high detection rates.",
      link: "https://vizjourney.com/publications/financial-anomaly-detection",
      tags: ["Finance", "Deep Learning", "Anomaly Detection"],
    },
  ]

  return (
    <section id="publications" className="py-20 relative overflow-hidden">
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
            Research
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading section-heading pb-4">Publications</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Research papers and articles I've published in the field of data science and analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
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
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{pub.publisher}</p>
                      <div className="flex items-center text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{pub.date}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="bg-primary/5 text-primary text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>

                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 flex items-center"
                      >
                        Read Publication
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

