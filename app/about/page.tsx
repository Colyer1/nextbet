'use client'

import { BackgroundGradient } from '@/components/BackgroundGradient'

export default function AboutPage() {
  return (
    <>
      <BackgroundGradient />
      <div className="min-h-screen flex flex-col items-center justify-start py-24 px-6 text-center space-y-8">
        <h1 className="text-5xl font-bold">About NextBet</h1>

        <p className="text-md text-gray-400 max-w-2xl">
          NextBet was built to give bettors, fantasy players, and sports fans an edge.
          Our mission is simple: deliver data-driven picks, maximize your wins, and build
          a sharp, elite community that leaves the books behind.
        </p>

        <p className="text-md text-gray-400 max-w-2xl">
          Whether you’re a seasoned pro or just getting started, NextBet is your home for smart plays,
          real insights, and a winning mentality. 
        </p>

        <p className="text-md text-gray-400 max-w-2xl">
          Join us today — sharpen your edge, elevate your game, and let’s dominate the books together.
        </p>
      </div>
    </>
  )
}
