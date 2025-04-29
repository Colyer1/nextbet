'use client'

import Link from 'next/link'

interface Props {
  title: string
  description: string
  buttonText: string
  link: string
}

export const AffiliateCard = ({ title, description, buttonText, link }: Props) => {
  return (
    <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center text-center w-full max-w-sm transition-transform duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-6">{description}</p>
      <Link
        href={link}
        className="mt-4 bg-accent text-black font-semibold px-6 py-3 rounded-full text-sm transition-transform duration-200 transform hover:scale-105 hover:shadow-md"
      >
        {buttonText}
      </Link>
    </div>
  )
}
