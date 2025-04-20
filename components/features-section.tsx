"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Shield, Clock, Award, Zap } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safety First",
    description: "All our pilots are FAA certified with extensive training and safety protocols.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Quick Turnaround",
    description: "Receive your edited footage within 48 hours of your drone session.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Premium Equipment",
    description: "We use only the latest high-end drones and camera equipment.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Custom Solutions",
    description: "Tailored drone services to meet your specific project requirements.",
  },
]

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="features" className="relative bg-black py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-red-600/20 blur-[100px] opacity-50"></div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://www.flyingmachines.de/cdn/shop/collections/Camera-1_3608fe48-90d7-4ad6-ae45-075ccf7d2575.jpg?v=1655883705&width=1000"
              alt="Drone in action"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          </motion.div>

          <div ref={ref} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-purple-600/20 px-3 py-1 text-sm font-medium text-purple-400 mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                Unmatched Drone Expertise
              </h2>
              <p className="text-gray-400 md:text-xl/relaxed">
                With years of experience and a passion for aerial innovation, we deliver exceptional results that exceed
                expectations.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg border border-purple-900/10 bg-black/50 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 flex items-center gap-4 rounded-lg border border-purple-900/10 bg-black/50 p-4 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/20">
                <span className="text-lg font-bold text-purple-400">100%</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-white">Satisfaction Guarantee</h4>
                <p className="text-xs text-gray-400">
                  If you're not completely satisfied, we'll reshoot at no additional cost.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
