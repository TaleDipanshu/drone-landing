"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="bg-black py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-purple-600/20 px-3 py-1 text-sm font-medium text-purple-400 mb-4">
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Have questions or ready to start your drone project? Reach out to our team today.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg border border-purple-900/10 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    className="border-purple-900/20 bg-black text-white"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="contact-email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Your email"
                    className="border-purple-900/20 bg-black text-white"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="contact-subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="contact-subject"
                    placeholder="Subject"
                    className="border-purple-900/20 bg-black text-white"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="contact-message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Your message"
                    className="border-purple-900/20 bg-black text-white min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white hover:from-purple-700 hover:to-red-600"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-lg border border-purple-900/10 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Our Location</h4>
                    <p className="text-sm text-gray-400">123 Drone Avenue, Sky City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Phone Number</h4>
                    <p className="text-sm text-gray-400">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Email Address</h4>
                    <p className="text-sm text-gray-400">info@DroneMandi.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Business Hours</h4>
                    <p className="text-sm text-gray-400">Monday - Friday: 9AM - 5PM</p>
                    <p className="text-sm text-gray-400">Saturday: 10AM - 2PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-purple-900/10 bg-black/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
