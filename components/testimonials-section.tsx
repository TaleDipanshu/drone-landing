"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Real Estate Developer",
    content: "The aerial photography...",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Event Coordinator",
    content: "We hired DroneVista...",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Construction Manager",
    content:
      "The 3D mapping services have been invaluable for our construction projects. Accurate, detailed, and delivered on time every time.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 4,
  },
  {
    name: "Emily Rodriguez",
    role: "Film Producer",
    content:
      "As a filmmaker, I need reliable aerial cinematography. DroneVista delivers exceptional quality footage that elevates our productions.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="testimonials" className="bg-black py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-purple-600/20 px-3 py-1 text-sm font-medium text-purple-400 mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Don't just take our word for it. Here's what our clients have to say about our drone services.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-purple-900/10 bg-black/50 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">{testimonial.name}</h3>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
