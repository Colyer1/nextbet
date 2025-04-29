'use client'

import { BackgroundGradient } from '@/components/BackgroundGradient'

export default function CommunityPage() {
  return (
    <>
      <BackgroundGradient />
      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 text-center space-y-8">
        <h1 className="text-5xl font-bold">Join the NextBet Community</h1>

        <p className="text-md text-gray-400 max-w-xl">
          Our Discord is where the real magic happens: exclusive picks, sharp discussions, real-time updates,
          and a network of winners. Free to join, no hidden fees — just smarter plays together.
        </p>

        <a
          href="https://discord.gg/GMV9gAvTbr"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-accent text-black font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 hover:shadow-lg transition-all"
        >
          Join Our Discord
        </a>
      </div>
    </>
  )
}
