"use client"

import Link from "next/link"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import BookingSection from "@/components/booking-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded bg-gradient-to-br from-purple-600 to-red-500" />
              <div className="absolute inset-[2px] flex items-center justify-center rounded bg-black">
                <span className="text-lg font-bold text-white">D</span>
              </div>
            </div>
            <span className="text-xl font-bold text-white">DroneVista</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link href="#features" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-purple-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link href="#booking" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
              Book Now
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:block text-sm font-medium text-white hover:text-purple-400 transition-colors"
            >
              Login
            </Link>
            <Link
              href="#booking"
              className="inline-flex h-10 items-center justify-center rounded-md border border-purple-600 bg-black px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500"
            >
              Book a Flight
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <footer className="border-t border-purple-900/10 bg-black">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 rounded bg-gradient-to-br from-purple-600 to-red-500" />
                  <div className="absolute inset-[2px] flex items-center justify-center rounded bg-black">
                    <span className="text-lg font-bold text-white">D</span>
                  </div>
                </div>
                <span className="text-xl font-bold text-white">DroneVista</span>
              </div>
              <p className="text-sm text-gray-400">Elevating perspectives, one flight at a time.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Aerial Photography
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Drone Mapping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Event Coverage
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-purple-900/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} DroneVista. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400">
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
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
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
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
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
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
