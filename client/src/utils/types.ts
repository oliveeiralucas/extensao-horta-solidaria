import { IconType } from 'react-icons'

export type MenuItem = {
  label: string
  icon?: IconType
  link: string
  subItems?: MenuItem[]
}

export type TabItem = {
  label: string
  page: string
}
