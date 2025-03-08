"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown, ArrowRight } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)
  const [filter, setFilter] = useState("all")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Logistics Optimization Platform",
      shortDescription: "End-to-end logistics analytics and optimization platform.",
      description: "Comprehensive logistics analytics platform with real-time tracking and optimization algorithms.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Pandas", "Tableau", "PostgreSQL", "AWS"],
      category: "logistics",
      features: [
        "Real-time delivery tracking with geospatial visualization",
        "Predictive ETA model with 94% accuracy",
        "Route optimization reducing delivery times by 18%",
        "Inventory forecasting with seasonal adjustment",
        "Interactive KPI dashboard for operations management",
      ],
      demoLink: "https://vizjourney.com/projects/logistics",
      githubLink: "https://github.com/vizjourney/logistics-optimization",
      fullDescription:
        "This comprehensive logistics optimization platform revolutionized supply chain operations for a retail distribution network. Built with Python and deployed on AWS, it integrates real-time GPS data, historical performance metrics, and machine learning algorithms to optimize delivery routes and predict potential delays. The solution includes a Tableau dashboard for operations teams and a PostgreSQL database for data warehousing. Key achievements include an 18% reduction in delivery times, 12% decrease in fuel costs, and 94% accuracy in ETA predictions. The platform processes over 50,000 delivery data points daily and has been instrumental in improving customer satisfaction scores by 22%.",
      results: [
        "18% reduction in average delivery times",
        "12% decrease in overall logistics costs",
        "22% improvement in customer satisfaction scores",
        "94% accuracy in ETA predictions",
        "Successful handling of 30% volume increase during peak seasons",
      ],
      technologies: {
        "Data Processing": ["Python", "Pandas", "NumPy", "GeoPandas"],
        "Machine Learning": ["Scikit-learn", "Prophet", "TensorFlow"],
        Visualization: ["Tableau", "Matplotlib", "Plotly"],
        Infrastructure: ["AWS EC2", "S3", "Lambda", "PostgreSQL", "Docker"],
      },
    },
    {
      id: 2,
      title: "E-commerce Customer Analytics",
      shortDescription: "Advanced customer segmentation and behavior analysis platform.",
      description: "Data-driven customer segmentation and behavior analysis for e-commerce platforms.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Scikit-learn", "Power BI", "PostgreSQL", "AWS"],
      category: "ecommerce",
      features: [
        "Customer segmentation using ML clustering algorithms",
        "Purchase pattern analysis with association rules",
        "Churn prediction model with 88% accuracy",
        "Personalized product recommendation engine",
        "Marketing campaign effectiveness dashboard",
      ],
      demoLink: "https://vizjourney.com/projects/ecommerce",
      githubLink: "https://github.com/vizjourney/ecommerce-analytics",
      fullDescription:
        "This e-commerce analytics platform provides deep insights into customer behavior for online retail operations. The solution implements advanced machine learning algorithms to segment customers based on purchasing patterns, browsing behavior, and demographic data. The platform includes a churn prediction model that identifies at-risk customers with 88% accuracy, allowing for targeted retention campaigns. The recommendation engine uses collaborative filtering and content-based approaches to suggest products, resulting in a 34% increase in cross-selling revenue. The Power BI dashboard provides marketing teams with real-time insights into campaign performance and customer lifetime value metrics.",
      results: [
        "34% increase in cross-selling revenue",
        "28% improvement in marketing campaign ROI",
        "22% reduction in customer acquisition costs",
        "15% decrease in customer churn rate",
        "41% increase in repeat purchase rate for targeted segments",
      ],
      technologies: {
        "Data Processing": ["Python", "Pandas", "SQL", "dbt"],
        "Machine Learning": ["Scikit-learn", "K-means", "Random Forest", "XGBoost"],
        Visualization: ["Power BI", "Plotly", "Seaborn"],
        Infrastructure: ["AWS Redshift", "S3", "EC2", "PostgreSQL", "Airflow"],
      },
    },
    {
      id: 3,
      title: "Financial Risk Assessment System",
      shortDescription: "ML-powered financial risk analysis and prediction platform.",
      description: "Machine learning model for financial risk assessment and credit scoring.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "NumPy", "AWS", "Docker"],
      category: "finance",
      features: [
        "Credit risk scoring with gradient boosting models",
        "Fraud detection using anomaly detection algorithms",
        "Investment risk analysis with Monte Carlo simulations",
        "Market trend prediction with time series analysis",
        "Automated risk reporting and alerting system",
      ],
      demoLink: "https://vizjourney.com/projects/finance",
      githubLink: "https://github.com/vizjourney/financial-risk",
      fullDescription:
        "This financial risk assessment system was developed for financial services to evaluate credit risk and detect potential fraud. The platform uses ensemble machine learning models to analyze customer financial data, transaction history, and market conditions to generate accurate risk scores. The fraud detection component employs anomaly detection algorithms that have successfully identified fraudulent transactions worth over $2.3M in the first year of deployment. The investment risk module uses Monte Carlo simulations to model potential market scenarios and their impact on investment portfolios. Deployed on AWS with Docker containers, the system processes over 100,000 transactions daily with sub-second response times for real-time risk assessment.",
      results: [
        "92% accuracy in predicting credit defaults",
        "$2.3M in fraudulent transactions prevented",
        "25% reduction in manual risk assessment workload",
        "18% improvement in investment portfolio performance",
        "35% faster loan approval process",
      ],
      technologies: {
        "Data Processing": ["Python", "Pandas", "NumPy", "SQL"],
        "Machine Learning": ["TensorFlow", "XGBoost", "Isolation Forest", "LSTM"],
        Visualization: ["Plotly", "Matplotlib", "Dash"],
        Infrastructure: ["AWS SageMaker", "Lambda", "Docker", "Kubernetes", "MongoDB"],
      },
    },
    {
      id: 4,
      title: "Insurance Claims Analysis Platform",
      shortDescription: "End-to-end insurance claims processing and fraud detection.",
      description: "Comprehensive data analysis platform for insurance claims processing and fraud detection.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "R", "MongoDB", "Docker", "Tableau"],
      category: "insurance",
      features: [
        "Automated claims processing with document OCR",
        "Fraud detection using ensemble ML models",
        "Risk assessment and premium calculation",
        "Customer profiling and segmentation",
        "Predictive modeling for claims estimation",
      ],
      demoLink: "https://vizjourney.com/projects/insurance",
      githubLink: "https://github.com/vizjourney/insurance-analytics",
      fullDescription:
        "This insurance claims analysis platform was developed to streamline claims processing and detect fraudulent activities. The system uses OCR technology to extract information from claim documents, reducing manual data entry by 75%. The fraud detection component employs a combination of rule-based systems and machine learning models, achieving a 92% accuracy rate in identifying suspicious claims. The risk assessment module analyzes historical claims data, customer profiles, and external factors to optimize premium calculations. The platform includes a Tableau dashboard that provides underwriters and claims adjusters with actionable insights and key performance indicators. Containerized with Docker and orchestrated with Kubernetes, the solution processes over 5,000 claims daily with high reliability.",
      results: [
        "75% reduction in claims processing time",
        "92% accuracy in fraud detection",
        "32% decrease in fraudulent claim payouts",
        "28% improvement in risk assessment accuracy",
        "43% increase in adjuster productivity",
      ],
      technologies: {
        "Data Processing": ["Python", "R", "Pandas", "tidyverse"],
        "Machine Learning": ["Random Forest", "Gradient Boosting", "Neural Networks"],
        Visualization: ["Tableau", "ggplot2", "Shiny"],
        Infrastructure: ["Docker", "Kubernetes", "MongoDB", "Redis", "Azure"],
      },
    },
    {
      id: 5,
      title: "Supply Chain Analytics Dashboard",
      shortDescription: "End-to-end supply chain visibility and optimization platform.",
      description: "Data-driven supply chain analytics and optimization for manufacturing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Kubernetes", "PostgreSQL", "Tableau", "Airflow"],
      category: "logistics",
      features: [
        "Inventory optimization with ML forecasting",
        "Demand prediction with 91% accuracy",
        "Supplier performance tracking and scoring",
        "Production scheduling optimization",
        "Distribution network analysis and simulation",
      ],
      demoLink: "https://vizjourney.com/projects/supplychain",
      githubLink: "https://github.com/vizjourney/supply-chain",
      fullDescription:
        "This supply chain analytics solution provides end-to-end visibility and optimization for manufacturing operations. The platform integrates data from multiple sources including ERP systems, IoT sensors, and third-party logistics providers to create a comprehensive view of the supply chain. The inventory optimization module uses machine learning algorithms to forecast demand with 91% accuracy, reducing stockouts by 45% while decreasing overall inventory levels by 30%. The supplier performance component tracks key metrics and generates performance scores, helping procurement teams identify reliable suppliers. The production scheduling module optimizes manufacturing processes based on demand forecasts, material availability, and capacity constraints. Deployed on Kubernetes with data pipelines orchestrated by Airflow, the solution processes terabytes of supply chain data daily.",
      results: [
        "30% reduction in inventory holding costs",
        "45% decrease in stockout incidents",
        "91% accuracy in demand forecasting",
        "23% improvement in supplier delivery performance",
        "18% increase in manufacturing throughput",
      ],
      technologies: {
        "Data Processing": ["Python", "Pandas", "PySpark", "SQL"],
        "Machine Learning": ["Prophet", "ARIMA", "Random Forest", "Optimization Algorithms"],
        Visualization: ["Tableau", "Plotly", "D3.js"],
        Infrastructure: ["Kubernetes", "PostgreSQL", "Airflow", "Kafka", "GCP"],
      },
    },
    {
      id: 6,
      title: "Blockchain Data Explorer",
      shortDescription: "Interactive analytics platform for blockchain data.",
      description: "Interactive data explorer for blockchain transactions and network analysis.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Web3", "D3.js", "MongoDB", "React"],
      category: "blockchain",
      features: [
        "Real-time transaction visualization and tracking",
        "Network analysis with graph algorithms",
        "Smart contract monitoring and analytics",
        "Wallet clustering and entity recognition",
        "Market trend analysis and prediction",
      ],
      demoLink: "https://vizjourney.com/projects/blockchain",
      githubLink: "https://github.com/vizjourney/blockchain-explorer",
      fullDescription:
        "This blockchain data explorer provides comprehensive analytics and visualization for multiple blockchain networks. The platform ingests transaction data from Ethereum, Bitcoin, and other chains, processing and analyzing millions of transactions daily. The transaction visualization component uses D3.js to create interactive network graphs that reveal patterns and relationships between addresses. The smart contract monitoring module tracks contract interactions, gas usage, and potential vulnerabilities. The wallet clustering algorithm identifies related addresses with 87% accuracy, helping to de-anonymize blockchain activity. The market trend analysis component uses machine learning to predict price movements based on on-chain metrics and sentiment analysis. Built with a Python backend and React frontend, the platform serves both researchers and traders interested in blockchain analytics.",
      results: [
        "87% accuracy in wallet clustering and entity recognition",
        "Real-time monitoring of over 5 million daily transactions",
        "Identification of $4.2M in suspicious transaction patterns",
        "73% accuracy in short-term price trend predictions",
        "Successful tracking of 95% of DeFi protocol activities",
      ],
      technologies: {
        "Data Processing": ["Python", "Web3.py", "Pandas", "MongoDB"],
        Analysis: ["NetworkX", "Graph Algorithms", "Time Series Analysis"],
        Visualization: ["D3.js", "React", "Plotly", "Cytoscape.js"],
        Infrastructure: ["AWS", "Docker", "MongoDB", "Redis", "Node.js"],
      },
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "logistics", name: "Logistics" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "finance", name: "Finance" },
    { id: "insurance", name: "Insurance" },
    { id: "blockchain", name: "Blockchain" },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading section-heading pb-4">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Explore my data-driven solutions across various industries and domains
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className={filter === category.id ? "bg-primary hover:bg-primary/90" : "hover:bg-primary/10"}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-primary/10 overflow-hidden ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t border-primary/10"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="bg-primary/5 text-primary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              className="bg-primary hover:bg-primary/90"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
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
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open("https://github.com/vizjourney", "_blank")}
          >
            View All Projects on GitHub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/5 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Overview</h3>
                <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Results & Impact</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                  {selectedProject.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Technologies Used</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedProject.technologies).map(([category, techs]) => (
                    <div key={category} className="space-y-2">
                      <h4 className="font-medium">{category}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-primary/5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <Button variant="outline" className="border-primary hover:bg-primary/10" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

