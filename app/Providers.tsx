'use client'

import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
// This component wraps the application with the SessionProvider from next-auth, allowing access to session data throughout the app. It is used in the RootLayout component to provide session context to all child components.