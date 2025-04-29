'use client'

import { LockedPickCard } from '@/components/LockedPickCard'
import { BackgroundGradient } from '@/components/BackgroundGradient'

export default function PicksPage() {
  return (
    <>
      <BackgroundGradient />
      <div className="min-h-screen flex flex-col items-center justify-start py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-8">Today's Picks</h1>

        <LockedPickCard />
      </div>
    </>
  )
}
