'use client'
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

export const LoginButton = ({
  children,
  mode = 'redirect',
  asChild
}: LoginButtonProps) => {
  const onClick = () => {
    window.location.href = 'https://app-horta-solidaria.vercel.app/login'
  }

  if (mode === 'modal') {
    return <span>TODO: implement modal</span>
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  )
}
