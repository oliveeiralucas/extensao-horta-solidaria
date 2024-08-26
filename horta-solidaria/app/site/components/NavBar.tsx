'use client'

import React, { useEffect, useState } from 'react'
import { BiBell, BiLeaf, BiLogIn, BiMenu, BiX } from 'react-icons/bi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
  const ActiveStyle = 'text-green-600'
  const pathname = usePathname()

  const [menuOpen, setMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false) // Estado para controlar a renderização no cliente

  useEffect(() => {
    setIsClient(true) // Defina como true quando o componente for montado no cliente
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {isClient && window.innerWidth >= 768 ? (
        <header className="sticky top-0 flex items-center justify-between p-4 shadow-md bg-white">
          {/* Título */}
          <div>
            <Link href="/">
              <div className="flex items-center justify-center gap-1 cursor-pointer">
                <BiLeaf className="text-3xl text-green-600" />
                <h2 className="text-2xl font-bold text-black">
                  Horta Solidária
                </h2>
              </div>
            </Link>
          </div>
          {/* Navegação */}
          <nav className="inline-flex text-base gap-6 font-semibold text-gray-500">
            <Link href="/" className={`${pathname === '/' ? ActiveStyle : ''}`}>
              Home
            </Link>
            <Link
              href="/site/projeto-de-extensao"
              className={`${pathname === '/projeto-de-extensao' ? ActiveStyle : ''}`}
            >
              Projeto de extensão
            </Link>
            <Link
              href="/site/documentacao"
              className={`${pathname === '/documentacao' ? ActiveStyle : ''}`}
            >
              Documentação
            </Link>
          </nav>
          {/* Login + Novidades */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Link href="/site/newsletter">
                <button className="flex items-center gap-1 rounded-full border bg-green-600 px-5 py-2.5 text-base font-semibold text-white">
                  <BiBell />
                  Novidades
                </button>
              </Link>
            </div>
            <div className="flex gap-2">
              <Link href="/autenticacao/login">
                <button className="flex items-center gap-1 rounded-full border bg-green-600 px-5 py-2.5 text-base font-semibold text-white">
                  <BiLogIn />
                  Acessar plataforma
                </button>
              </Link>
            </div>
          </div>
        </header>
      ) : (
        <>
          <header className="sticky top-0 flex items-center justify-between bg-white p-4 text-white shadow-md">
            {/* Título */}
            <div>
              <Link href="/">
                <div className="flex items-center justify-center gap-1 cursor-pointer">
                  <BiLeaf className="text-3xl text-green-600" />
                  <h2 className="text-2xl font-bold text-black">
                    Horta Solidária
                  </h2>
                </div>
              </Link>
            </div>
            <div onClick={toggleMenu}>
              {menuOpen ? (
                <BiX className="text-2xl text-black" />
              ) : (
                <BiMenu className="text-2xl text-black" />
              )}
            </div>
          </header>
          {menuOpen && (
            <div className="z-50 grid gap-y-6 bg-white py-5">
              {/* Navegação */}
              <Link
                href="/"
                className={`mx-5 text-lg font-semibold text-gray-500 ${pathname === '/' ? ActiveStyle : ''}`}
              >
                Home
              </Link>
              <Link
                href="/site/projeto-de-extensao"
                className={`mx-5 text-lg font-semibold text-gray-500 ${pathname === '/projeto-de-extensao' ? ActiveStyle : ''}`}
              >
                Projeto de extensão
              </Link>
              <Link
                href="/site/documentacao"
                className={`mx-5 text-lg font-semibold text-gray-500 ${pathname === '/documentacao' ? ActiveStyle : ''}`}
              >
                Documentação
              </Link>
              <Link
                href={'/autenticacao/login'}
                className={`mx-5 bg-yellow-800 text-lg font-semibold text-gray-500 ${pathname === '/login' ? ActiveStyle : ''}`}
              >
                Acessar plataforma
              </Link>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Navbar
