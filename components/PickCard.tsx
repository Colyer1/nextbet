'use client'

interface PickCardProps {
  pick: {
    title: string
    description: string
    confidence: string
  }
}

export const PickCard = ({ pick }: PickCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-xl transition">
      <h3 className="text-2xl font-bold">{pick.title}</h3>
      <p className="text-gray-300">{pick.description}</p>
      <span className="text-sm font-semibold text-accent">
        Confidence: {pick.confidence}
      </span>
    </div>
  )
}
