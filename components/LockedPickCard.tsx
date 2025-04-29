'use client'

import { Lock } from 'lucide-react'

export const LockedPickCard = () => {
  return (
    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-10 flex flex-col items-center gap-6 max-w-md w-full shadow-lg hover:shadow-2xl transition-all">
      <Lock className="w-16 h-16 text-accent" />
      <h2 className="text-2xl font-bold">Picks Locked 🔒</h2>
      <p className="text-gray-300 text-sm max-w-xs">
        Join our Discord to access daily expert picks, premium bets, and exclusive insights.
      </p>
      <a
        href="https://your-discord-invite-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-accent text-black font-semibold px-6 py-3 rounded-full text-sm hover:scale-105 hover:shadow-md transition-all"
      >
        Join Discord
      </a>
    </div>
  )
}
