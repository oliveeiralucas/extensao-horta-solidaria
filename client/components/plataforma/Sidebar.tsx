'use client'
import React, { useState } from 'react'
import {
  RiHome2Line,
  RiInstanceLine,
  RiLogoutBoxRLine,
  RiSettings3Line
} from 'react-icons/ri'

import SidebarMenuItem from './SidebarMenuItem'
import { MenuItem } from '../../lib/utils'

const menuItems: MenuItem[] = [
  { label: 'Dashboard', icon: RiHome2Line, link: '/plataforma/dashboard' },
  {
    label: 'Doações',
    icon: RiInstanceLine,
    subItems: [
      { label: 'Realizar Doação', link: '/plataforma/doacoes/realizar-doacao' },
      {
        label: 'Doações Realizadas',
        link: '/plataforma/doacoes/doacoes-realizadas'
      }
    ]
  },
  {
    label: 'Configurações',
    icon: RiSettings3Line,
    subItems: [
      {
        label: 'Configurar Aplicação',
        link: '/plataforma/configuracoes/configuracoes-site'
      },
      {
        label: 'Configurar Perfil',
        link: '/plataforma/configuracoes/configuracoes-perfil'
      }
    ]
  }
]

interface SidebarProps {
  isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col justify-between bg-gray-900 p-4 transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div>
        <a
          href="#"
          className="flex items-center border-b border-b-gray-800 pb-4"
        >
          <img
            src="/favicon.svg"
            alt="Logo"
            className="size-8 rounded object-cover"
          />
          <span className="ml-2 text-lg font-bold text-white">
            Horta Solidária
          </span>
        </a>
        <ul className="mt-4">
          {menuItems.map((item, index) => (
            <SidebarMenuItem
              key={index}
              item={item}
              isActive={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100"
            >
              <RiLogoutBoxRLine className="mr-3 text-2xl" />
              <span className="text-lg">Sign out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
