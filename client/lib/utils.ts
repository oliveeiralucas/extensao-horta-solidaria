import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IconType } from 'react-icons'

export type MenuItem = {
  label: string
  icon?: IconType
  link?: string
  subItems?: MenuItem[]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}