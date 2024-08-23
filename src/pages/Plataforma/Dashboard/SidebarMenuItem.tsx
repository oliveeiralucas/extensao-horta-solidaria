import React from 'react'
import { IconType } from 'react-icons'
import { IoIosArrowForward } from 'react-icons/io'

import { MenuItem } from '@/utils/types'

interface SidebarMenuItemProps {
  item: MenuItem
  isActive: boolean
  onToggle: () => void
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  item,
  isActive,
  onToggle
}) => {
  const IconComponent: IconType | null = item.icon ? item.icon : null

  return (
    <li
      className={`group mb-1 gap-2 py-1 ${
        isActive ? 'rounded bg-gray-700 text-white' : ''
      }`}
    >
      <a
        href={item.link}
        className={`flex items-center rounded-md px-4 py-2 text-gray-300 hover:text-gray-100 ${
          isActive ? 'rounded bg-gray-700 text-white' : ''
        }`}
        onClick={onToggle}
      >
        {IconComponent && <IconComponent className="mr-3 text-2xl" />}
        <span className="text-lg">{item.label}</span>
        {item.subItems && (
          <IoIosArrowForward
            className={`ml-auto transition-transform${
              isActive ? 'rotate-90' : ''
            }`}
          />
        )}
      </a>
      {item.subItems && isActive && (
        <ul className="mt-2 pl-7">
          {item.subItems.map((subItem, index) => (
            <li key={index} className="mb-4 ml-6 list-disc">
              <a
                href={subItem.link}
                className="flex items-center text-base text-gray-300 hover:text-gray-100"
              >
                {subItem.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default SidebarMenuItem
