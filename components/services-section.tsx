"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Camera, MapPin, Video, Building2, ChevronRight } from "lucide-react"

const services = [
  {
    icon: <Camera className="h-10 w-10" />,
    title: "Aerial Photography",
    description: "Capture stunning high-resolution images...",
    image: "https://px-web-images4.pixpa.com/Ekqa6XsB2CeFmQZAa_tlhBnk4VL7JgCPCXf6dHokqp8/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTIyMzUxNjUxLXNodXR0ZXJzdG9ja18zNzA5NDkwNTEuanBn"
  },
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Drone Mapping",
    description: "Create detailed 3D maps...",
    image: "https://i0.wp.com/www.dronepilotgroundschool.com/wp-content/uploads/2023/02/what-is-drone-mapping.jpg?w=900&ssl=1"
  },
  {
    icon: <Video className="h-10 w-10" />,
    title: "Cinematic Videography",
    description: "Produce breathtaking aerial footage for films, commercials, events, and promotional content.",
    image: "https://cdn.pixabay.com/photo/2018/10/19/09/35/ginkgo-3758236_1280.jpg",
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Inspection Services",
    description:
      "Safely inspect hard-to-reach areas like roofs, towers, and infrastructure without scaffolding or lifts.",
    image: "https://alamoairborne.com/wp-content/uploads/2022/03/foreman-or-worker-use-remote-controller-piloting-d-2022-03-04-05-16-17-utc-2000x1333.jpg",
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="bg-black py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-purple-600/20 px-3 py-1 text-sm font-medium text-purple-400 mb-4">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              Professional Drone Solutions
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
              We offer a comprehensive range of drone services to meet your specific needs.
            </p>
          </motion.div>
        </div>
        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-purple-900/10 bg-black/50 backdrop-blur-sm transition-all hover:border-purple-900/30 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-4 text-sm text-gray-400">{service.description}</p>
                <Link
                  href="#booking"
                  className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
