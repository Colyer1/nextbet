'use client'

import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-[60vh] px-4 space-y-6">
      <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-6xl font-bold leading-tight tracking-tight animate-text-gradient"
    >
      Welcome to NextBet
    </motion.h1>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-md md:text-lg text-gray-400 max-w-2xl"
      >
        Smarter sports picks, fantasy domination, and elite sportsbook edges — all in one community.
      </motion.p>
    </section>
  )
}
