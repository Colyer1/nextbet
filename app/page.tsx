'use client'

import { useEffect, useState } from 'react'
import { Hero } from '@/components/Hero'
import { AffiliateCard } from '@/components/AffiliateCard'
import { BackgroundGradient } from '@/components/BackgroundGradient'

export default function Home() {
  const [memberCount, setMemberCount] = useState(1)

  useEffect(() => {
    let current = 1
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 1
      if (current >= 1134) {
        current = 1134
        clearInterval(interval)
      }
      setMemberCount(current)
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <BackgroundGradient />
      <Hero />

      {/* Member Count Section — tighter spacing */}
      <section className="flex flex-col items-center justify-center py-1 px-4 text-center space-y-1">
        <h2 className="text-xl md:text-2xl font-bold text-accent">
          {memberCount.toLocaleString()}+ Members
        </h2>
        <p className="text-sm text-gray-400">
          Sharp bettors, fantasy winners, sportsbook crushers. Join us today.
        </p>
      </section>

      {/* Affiliate Cards Section — even tighter */}
      <section className="flex flex-wrap justify-center items-center gap-5 py-4 px-4">
        <AffiliateCard
          title="Join Bovada"
          description="Bet smarter with exclusive bonuses on Bovada. Sign up through NextBet for exclusive offers."
          buttonText="Sign Up for Bovada"
          link="https://your-bovada-affiliate-link.com"
        />
        <AffiliateCard
          title="Join Our Discord"
          description="Get expert picks, community access, and real-time updates. Free to join!"
          buttonText="Join Discord"
          link="https://discord.gg/GMV9gAvTbr"
        />
      </section>
    </>
  )
}
