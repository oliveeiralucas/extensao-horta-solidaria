'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { usePathname } from 'next/navigation' // Importando usePathname

interface NavbarProps {
  toggleSidebar: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname() // Usando usePathname para obter a rota atual

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown)
    return () => {
      document.removeEventListener('mousedown', closeDropdown)
    }
  }, [])

  const formatPath = (path: string) => {
    return path
      .split('/')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' / ')
  }

  const breadcrumb = formatPath(pathname || '')

  return (
    <div className="sticky left-0 top-0 z-30 flex items-center justify-between bg-white px-6 py-4 shadow-md shadow-black/5">
      <div className="flex items-center">
        <button
          type="button"
          className="text-xl text-gray-600"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu />
        </button>
        <ul className="ml-4 flex items-center text-lg">
          <li className="mr-2">{breadcrumb || 'Dashboard'}</li>
        </ul>
      </div>
      <div className="mr-10 flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md border py-2 pl-10 pr-4 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-2 top-2 text-gray-400">
            <FiSearch />
          </span>
        </div>
        <button
          type="button"
          className="text-xl text-gray-600 hover:text-gray-800"
        >
          <FiBell />
        </button>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="text-2xl text-gray-600 hover:text-gray-800"
            onClick={toggleDropdown}
          >
            <img
              src="https://placehold.co/48x48"
              alt="user-photo"
              className="rounded"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg border bg-white shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Configurações
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Perfil
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
