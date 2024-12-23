'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "This product has completely transformed how I manage my projects and deadlines",
    author: "Talia Taylor",
    role: "Digital Marketing Director @ Quantum",
    image: "https://i.pinimg.com/474x/59/91/ab/5991ab031c825e28e5a0e9a88d9af02d.jpg",
  },
  {
    quote: "The AI-powered insights have given us a competitive edge in our market",
    author: "Marcus Chen",
    role: "SEO Specialist @ TechFlow",
    image: "https://i.pinimg.com/736x/ca/cb/19/cacb196590d8f40c55d825902e8ab733.jpg",
  },
  {
    quote: "Implementing this solution doubled our organic traffic in just 3 months",
    author: "Sarah Mitchell",
    role: "Growth Lead @ Innovate",
    image: "https://i.pinimg.com/474x/40/08/b9/4008b900de9d0f325fdb856f352058f4.jpg",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const next = () => {
    setCurrentTestimonial((current) => (current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div id="testimonials" className="relative w-full bg-black min-h-screen overflow-hidden">
      {/* Grid Background */}
      

      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white">Our Clients</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Hear firsthand how our solutions have boosted online success for users like you.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative mx-auto">
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[350px] rounded-2xl overflow-hidden">
                  {/* Purple gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent z-10" />
                  
                  {/* Image */}
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-700/20 rounded-full blur-2xl" />
                </div>
                
                {/* Border frame */}
                <div className="absolute inset-0 border-2 border-purple-500/20 rounded-2xl transform translate-x-4 translate-y-4" />
              </div>

              <div className="space-y-6 md:space-y-8">
                <motion.p 
                  key={`quote-${currentTestimonial}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-4xl font-medium text-white leading-relaxed"
                >
                  "{testimonials[currentTestimonial].quote}"
                </motion.p>
                <motion.div
                  key={`author-${currentTestimonial}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm text-white font-semibold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-purple-300">{testimonials[currentTestimonial].role}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8 sm:mt-16">
            <Button
              variant="outline"
              size="icon"
              onClick={previous}
              className="rounded-full border-purple-500/20 text-white hover:bg-purple-900/20 hover:border-purple-500/40 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-purple-500/20 text-white hover:bg-purple-900/20 hover:border-purple-500/40 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? "bg-purple-500 w-6" 
                    : "bg-purple-800 hover:bg-purple-700"
                }`}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}