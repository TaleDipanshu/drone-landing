"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Pause } from "lucide-react"
import ParticlesBackground from "./particles-background"
import video from '../../public/videos/drone-video.mp4'
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error("Autoplay failed:", error)
          setIsPlaying(false)
        })
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Recommended video types for drone websites
  const videoSources = [
    {
      src: "videos/drone-video.mp4",
      type: "video/mp4"
    },
    {
      src: "videos/drone-video3.mp4", 
      type: "video/mp4"
    }
  ]

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-black min-h-screen">
      <ParticlesBackground className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
          style={{ filter: 'brightness(0.9) contrast(3.2) saturate(2.1)' }}
        >
          {videoSources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
          Your browser does not support the video tag.
        </video>
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-4 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black z-10"></div>

      <motion.div style={{ opacity, scale }} className="container relative z-20 py-24 md:py-32 lg:py-40">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block rounded-lg bg-purple-600/20 px-3 py-1 text-sm font-medium text-purple-400 backdrop-blur-sm">
              #1 Drone Services Company
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Elevate Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                Perspective
              </span>
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the world from above with our premium drone services. From stunning aerial photography to
              precise mapping, we bring a new dimension to your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#booking"
                className="group inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-red-500 px-8 text-sm font-medium text-white shadow transition-all hover:shadow-lg hover:shadow-purple-500/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500"
              >
                Book a Flight
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-md border border-purple-600 bg-black/60 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-red-500/20 rounded-lg z-10"></div>
            <Image
              src="https://www.flyingmachines.de/cdn/shop/collections/Camera-1_3608fe48-90d7-4ad6-ae45-075ccf7d2575.jpg?v=1655883705&width=1000"
              alt="Drone in flight"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3 z-20"></div>
            <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-medium text-white">Live Flight</span>
            </div>

            {/* Futuristic overlay elements */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur">
              <span className="text-xs font-medium text-white">4K • 60FPS</span>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="w-20 h-20 rounded-full border-2 border-purple-500/50 flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 rounded-full border-2 border-red-500/50 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-red-500/20 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Drone Models" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center backdrop-blur-sm bg-black/20 rounded-lg p-4 border border-purple-900/10 hover:border-purple-500/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-3xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Futuristic UI elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4">
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-purple-600 to-red-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        />
        <motion.div
          className="h-1 w-10 bg-gradient-to-r from-purple-600 to-red-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
        />
        <motion.div
          className="h-1 w-16 bg-gradient-to-r from-purple-600 to-red-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
        />
      </div>
    </section>
  )
}
