"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, CalendarIcon, AlertCircle, Loader2 } from "lucide-react"
import { format, startOfToday } from "date-fns"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

// Dummy data for available time slots
const generateTimeSlots = (date: Date | undefined) => {
  if (!date) return []

  // Generate different time slots based on the day of the week
  const day = date.getDay()
  const isWeekend = day === 0 || day === 6

  const baseSlots = isWeekend
    ? ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]
    : ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  // Randomly mark some slots as unavailable
  return baseSlots.map((slot) => ({
    time: slot,
    available: Math.random() > 0.3, // 70% chance of being available
  }))
}

// Dummy data for service types
const serviceTypes = [
  "Aerial Photography",
  "Drone Mapping",
  "Cinematic Videography",
  "Inspection Services",
  "Event Coverage",
  "Custom Project",
]

// Dummy data for drone models
const droneModels = [
  { id: "phantom4", name: "DJI Phantom 4 Pro", description: "Professional aerial photography drone", price: 150 },
  { id: "mavic3", name: "DJI Mavic 3", description: "Compact, powerful imaging drone", price: 200 },
  { id: "inspire2", name: "DJI Inspire 2", description: "Professional cinematography drone", price: 300 },
  { id: "autel", name: "Autel EVO II", description: "8K video capable drone", price: 250 },
  { id: "skydio", name: "Skydio 2+", description: "Autonomous tracking drone", price: 180 },
]

export default function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlots, setTimeSlots] = useState<{ time: string; available: boolean }[]>([])
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string>("")
  const [selectedDrone, setSelectedDrone] = useState<string>("")
  const [bookingComplete, setBookingComplete] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Update time slots when date changes
  useEffect(() => {
    if (date) {
      setTimeSlots(generateTimeSlots(date))
      setSelectedTime(null) // Reset selected time when date changes
    } else {
      setTimeSlots([])
    }
  }, [date])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Form validation
    const errors: Record<string, string> = {}
    if (!date) errors.date = "Please select a date"
    if (!selectedTime) errors.time = "Please select a time slot"
    if (!selectedService) errors.service = "Please select a service"
    if (!selectedDrone) errors.drone = "Please select a drone model"

    const nameInput = document.getElementById("name") as HTMLInputElement
    const emailInput = document.getElementById("email") as HTMLInputElement
    const phoneInput = document.getElementById("phone") as HTMLInputElement

    if (!nameInput.value) errors.name = "Please enter your name"
    if (!emailInput.value) errors.email = "Please enter your email"
    if (!phoneInput.value) errors.phone = "Please enter your phone number"

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Clear any previous errors
    setFormErrors({})

    // Show loading state
    setIsSubmitting(true)

    // In a real app, this would send the booking data to a server
    setTimeout(() => {
      setIsSubmitting(false)
      setBookingComplete(true)
    }, 1500)
  }

  // Disable past dates in calendar
  const today = startOfToday()
  const disabledDays = {
    before: today,
  }

  return (
    <section id="booking" className="relative bg-black py-16 md:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-red-600/20 blur-[100px] opacity-30"></div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-lg bg-purple-600/20 px-3 py-1 text-sm font-medium text-purple-400 mb-4">
              Book Now
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
              Schedule Your Drone Flight
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Select a date, time, and service to book your drone session. Our team will confirm your appointment within
              24 hours.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {bookingComplete ? (
            <motion.div
              className="lg:col-span-2 flex flex-col items-center justify-center text-center p-8 rounded-lg border border-purple-900/10 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 mb-6">
                <Check className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
              <p className="text-gray-400 mb-6 max-w-[500px]">
                Thank you for scheduling your drone session. We've sent a confirmation email with all the details. Our
                team will contact you shortly to finalize the arrangements.
              </p>
              <div className="p-6 mb-6 rounded-lg border border-purple-900/10 bg-black/60 backdrop-blur-sm max-w-md w-full">
                <h4 className="text-lg font-medium text-white mb-4">Booking Details</h4>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p className="text-white">{date ? format(date, "MMMM d, yyyy") : "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Time</p>
                    <p className="text-white">{selectedTime || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Service</p>
                    <p className="text-white">{selectedService || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Drone</p>
                    <p className="text-white">{droneModels.find((d) => d.id === selectedDrone)?.name || "N/A"}</p>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => setBookingComplete(false)}
                variant="outline"
                className="border-purple-600 text-white hover:bg-purple-950"
              >
                Book Another Session
              </Button>
            </motion.div>
          ) : (
            <>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-purple-900/10 bg-black/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-6">
                      <CalendarIcon className="mr-2 h-5 w-5 text-purple-400" />
                      <h3 className="text-lg font-medium text-white">Select Date & Time</h3>
                    </div>

                    <div className="relative">
                      {formErrors.date && (
                        <div className="absolute top-0 right-0 z-10 text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {formErrors.date}
                        </div>
                      )}
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={disabledDays}
                        className="rounded-md border border-purple-900/10 bg-black p-3"
                        classNames={{
                          day_selected: "bg-purple-600 text-white hover:bg-purple-500",
                          day_today: "bg-purple-900/20 text-white",
                          day: "text-gray-400 hover:bg-purple-900/20",
                          day_disabled: "text-gray-600 opacity-50 hover:bg-transparent cursor-not-allowed",
                          head_cell: "text-gray-500",
                          caption: "text-white",
                          nav_button: "text-gray-400 hover:text-white",
                          table: "border-collapse space-y-1",
                        }}
                      />
                    </div>

                    {date && (
                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-sm font-medium text-white">Available Time Slots</h4>
                          {formErrors.time && (
                            <div className="text-red-500 text-xs flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {formErrors.time}
                            </div>
                          )}
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <TooltipProvider key={slot.time}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className={`w-full border-purple-900/20 ${
                                        !slot.available
                                          ? "bg-gray-800/50 text-gray-500 cursor-not-allowed opacity-50"
                                          : selectedTime === slot.time
                                            ? "bg-purple-600 text-white hover:bg-purple-500"
                                            : "bg-black text-gray-400 hover:bg-purple-900/20 hover:text-white"
                                      }`}
                                      onClick={() => slot.available && setSelectedTime(slot.time)}
                                      disabled={!slot.available}
                                    >
                                      <Clock className="mr-1 h-3 w-3" />
                                      {slot.time}
                                    </Button>
                                  </div>
                                </TooltipTrigger>
                                {!slot.available && (
                                  <TooltipContent>
                                    <p>This time slot is unavailable</p>
                                  </TooltipContent>
                                )}
                              </Tooltip>
                            </TooltipProvider>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Futuristic calendar legend */}
                    <div className="mt-6 flex items-center justify-center gap-4 text-xs">
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-purple-600 mr-2"></div>
                        <span className="text-gray-400">Selected</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-purple-900/20 mr-2"></div>
                        <span className="text-gray-400">Today</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 rounded-full bg-gray-800 mr-2"></div>
                        <span className="text-gray-400">Unavailable</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Drone selection card */}
                <Card className="border-purple-900/10 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium text-white">Select Drone Model</h3>
                      {formErrors.drone && (
                        <div className="text-red-500 text-xs flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {formErrors.drone}
                        </div>
                      )}
                    </div>

                    <div className="grid gap-3">
                      {droneModels.map((drone) => (
                        <div
                          key={drone.id}
                          className={`relative rounded-lg border p-4 cursor-pointer transition-all ${
                            selectedDrone === drone.id
                              ? "border-purple-500 bg-purple-900/20"
                              : "border-purple-900/10 hover:border-purple-900/30 hover:bg-purple-900/10"
                          }`}
                          onClick={() => setSelectedDrone(drone.id)}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-white">{drone.name}</h4>
                              <p className="text-xs text-gray-400">{drone.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-white">${drone.price}/hr</div>
                              {selectedDrone === drone.id && (
                                <Badge className="bg-purple-600 hover:bg-purple-700">Selected</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-purple-900/10 bg-black/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white mb-6 text-center">Your Information</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-2">
                        <div className="flex justify-between">
                          <Label htmlFor="service" className="text-white">
                            Service Type
                          </Label>
                          {formErrors.service && (
                            <span className="text-red-500 text-xs flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {formErrors.service}
                            </span>
                          )}
                        </div>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger className="border-purple-900/20 bg-black text-white">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="border-purple-900/20 bg-black text-white">
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <div className="flex justify-between">
                          <Label htmlFor="name" className="text-white">
                            Full Name
                          </Label>
                          {formErrors.name && (
                            <span className="text-red-500 text-xs flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {formErrors.name}
                            </span>
                          )}
                        </div>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          className="border-purple-900/20 bg-black text-white"
                        />
                      </div>

                      <div className="grid gap-2">
                        <div className="flex justify-between">
                          <Label htmlFor="email" className="text-white">
                            Email
                          </Label>
                          {formErrors.email && (
                            <span className="text-red-500 text-xs flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {formErrors.email}
                            </span>
                          )}
                        </div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="border-purple-900/20 bg-black text-white"
                        />
                      </div>

                      <div className="grid gap-2">
                        <div className="flex justify-between">
                          <Label htmlFor="phone" className="text-white">
                            Phone Number
                          </Label>
                          {formErrors.phone && (
                            <span className="text-red-500 text-xs flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {formErrors.phone}
                            </span>
                          )}
                        </div>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          className="border-purple-900/20 bg-black text-white"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="message" className="text-white">
                          Project Details
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project"
                          className="border-purple-900/20 bg-black text-white min-h-[100px]"
                        />
                      </div>

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full border-purple-900/20 bg-black text-white hover:bg-purple-900/20"
                          >
                            View Booking Summary
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 border-purple-900/20 bg-black text-white">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <h4 className="font-medium leading-none">Booking Summary</h4>
                              <p className="text-sm text-gray-400">Review your booking details before confirming</p>
                            </div>
                            <div className="grid gap-2">
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="date">Date</Label>
                                <div className="col-span-2 text-sm">
                                  {date ? format(date, "MMMM d, yyyy") : "Not selected"}
                                </div>
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="time">Time</Label>
                                <div className="col-span-2 text-sm">{selectedTime || "Not selected"}</div>
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="service">Service</Label>
                                <div className="col-span-2 text-sm">{selectedService || "Not selected"}</div>
                              </div>
                              <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="drone">Drone</Label>
                                <div className="col-span-2 text-sm">
                                  {selectedDrone
                                    ? droneModels.find((d) => d.id === selectedDrone)?.name
                                    : "Not selected"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white hover:from-purple-700 hover:to-red-600 relative overflow-hidden group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Book Your Session
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/0 via-white/20 to-purple-600/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
