import { auth } from '@root/auth'
import { SessionProvider } from 'next-auth/react'

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <section>{children}</section>
    </SessionProvider>
  )
}
