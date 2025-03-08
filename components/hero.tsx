"use client"



import { useEffect, useState, useRef } from "react"

import { Button } from "@/components/ui/button"

import { ArrowRight, Github, Linkedin, ExternalLink, Download, ChevronDown } from "lucide-react"

import { motion } from "framer-motion"



export default function Hero() {

  const [displayText, setDisplayText] = useState("")

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const [isDeleting, setIsDeleting] = useState(false)

  const titles = ["Data Scientist", "ML Engineer", "Analytics Expert", "Visualization Specialist"]

  const typingSpeed = 100

  const deletingSpeed = 50

  const delayBetweenTitles = 1500

  const heroRef = useRef(null)



  useEffect(() => {

    let timer

    const currentTitle = titles[currentTitleIndex]



    if (isDeleting) {

      timer = setTimeout(() => {

        setDisplayText(currentTitle.substring(0, displayText.length - 1))



        if (displayText.length === 0) {

          setIsDeleting(false)

          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)

        }

      }, deletingSpeed)

    } else {

      timer = setTimeout(() => {

        setDisplayText(currentTitle.substring(0, displayText.length + 1))



        if (displayText.length === currentTitle.length) {

          // Pause at the end of the word before deleting

          timer = setTimeout(() => {

            setIsDeleting(true)

          }, delayBetweenTitles)

        }

      }, typingSpeed)

    }



    return () => clearTimeout(timer)

  }, [displayText, currentTitleIndex, isDeleting, titles])



  const scrollToSection = (sectionId: string) => {

    const element = document.getElementById(sectionId)

    if (element) {

      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset

      window.scrollTo({

        top: offsetTop,

        behavior: "smooth",

      })

    }

  }



  return (

    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background pattern */}

      <div className="absolute inset-0 data-dots-pattern opacity-30"></div>



      <div className="container mx-auto px-4 z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.7 }}

            className="relative z-10"

          >

            <div className="inline-block mb-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">

              Welcome to my portfolio

            </div>



            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">

              Hi, I'm <span className="gradient-text">Gourav Chandra</span>

            </h1>



            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-10">

              <span className="text-foreground">{displayText}</span>

              <span className="animate-blink">|</span>

            </h2>



            <p className="text-lg text-muted-foreground mb-8 max-w-lg">

              Transforming complex data into actionable insights and innovative solutions. With expertise across

              Logistics, E-commerce, Insurance, and Financial sectors, I build end-to-end data solutions that drive

              business value.

            </p>



            <div className="flex flex-col sm:flex-row gap-4 mb-8">

              <Button

                size="lg"

                className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90"

                onClick={() => scrollToSection("projects")}

              >

                View My Projects

                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

              </Button>

              <Button

                size="lg"

                variant="outline"

                className="border-primary hover:bg-primary/10"

                onClick={() => scrollToSection("contact")}

              >

                <Download className="mr-2 h-4 w-4" />

                Download Resume

              </Button>

            </div>



            <div className="flex gap-4 mt-8">

              <Button

                variant="outline"

                size="icon"

                className="rounded-full hover:bg-primary/10 hover:text-primary"

                asChild

              >

                <a

                  href="https://github.com/vizjourney"

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="GitHub Profile"

                >

                  <Github className="h-5 w-5" />

                </a>

              </Button>

              <Button

                variant="outline"

                size="icon"

                className="rounded-full hover:bg-primary/10 hover:text-primary"

                asChild

              >

                <a

                  href="https://www.linkedin.com/in/gouravchandra/"

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="LinkedIn Profile"

                >

                  <Linkedin className="h-5 w-5" />

                </a>

              </Button>

              <Button

                variant="outline"

                size="icon"

                className="rounded-full hover:bg-primary/10 hover:text-primary"

                asChild

              >

                <a

                  href="https://www.kaggle.com/hydravi"

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label="Kaggle Profile"

                >

                  <ExternalLink className="h-5 w-5" />

                </a>

              </Button>

            </div>

          </motion.div>



          <motion.div

            initial={{ opacity: 0, scale: 0.9 }}

            animate={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.7, delay: 0.2 }}

            className="relative hidden md:block"

          >

            <div className="relative w-full max-w-md mx-auto">

              {/* Animated data visualization elements */}

              <div

                className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"

                style={{ animationDelay: "0s" }}

              ></div>

              <div

                className="absolute top-20 -right-5 w-16 h-16 bg-secondary/20 rounded-full animate-float"

                style={{ animationDelay: "1s" }}

              ></div>

              <div

                className="absolute bottom-10 -left-5 w-14 h-14 bg-accent/20 rounded-full animate-float"

                style={{ animationDelay: "2s" }}

              ></div>



              {/* Main profile image - AI generated data professional image */}

              <div className="relative z-10 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1">

                <div className="bg-card rounded-xl overflow-hidden">

                  <img

                    src="/placeholder.svg?height=500&width=500&text=AI+Generated+Data+Professional"

                    alt="Gourav Chandra - Data Professional"

                    className="w-full aspect-square object-cover"

                  />

                </div>

              </div>



              {/* Decorative elements */}

              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl"></div>

            </div>

          </motion.div>

        </div>

      </div>



      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">

        <button

          onClick={() => scrollToSection("about")}

          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"

          aria-label="Scroll to About section"

        >

          <span className="text-sm mb-2">Scroll Down</span>

          <ChevronDown className="h-6 w-6 animate-bounce" />

        </button>

      </div>

    </section>

  )

}
