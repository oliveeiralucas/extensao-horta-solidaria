'use client'

import { logout } from '@root/actions/logout'

interface LogoutButtonProps {
  children?: React.ReactNode
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout()
  }

  return (
    <span onClick={onClick} className="cursor-pointer flex">
      {children}
    </span>
  )
}
