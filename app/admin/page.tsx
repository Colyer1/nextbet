'use client'

import { BackgroundGradient } from '@/components/BackgroundGradient'

export default function AdminPage() {
  return (
    <>
      <BackgroundGradient />
      <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6 space-y-8 text-center">
        <h1 className="text-5xl font-bold mb-8">Admin Login</h1>

        <form className="bg-white/10 backdrop-blur-md p-8 rounded-2xl flex flex-col gap-6 w-full max-w-md shadow-lg hover:shadow-xl transition">
          <input
            type="text"
            placeholder="Username"
            className="bg-black/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-black/20 px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-accent text-black font-semibold py-3 rounded-lg hover:scale-105 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}
