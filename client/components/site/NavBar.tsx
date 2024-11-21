"use client"
import React from 'react'
import { BiBell, BiLeaf, BiLogIn } from 'react-icons/bi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LoginButton } from '@root/components/auth/login-button'

const Navbar: React.FC = () => {
  const ActiveStyle = 'text-green-600'
  const pathname = usePathname()

  return (
    <header className="sticky top-0 flex items-center justify-between p-4 shadow-md bg-white">
      {/* Título */}
      <div>
        <Link href="/site">
          <div className="flex items-center justify-center gap-1 cursor-pointer">
            <BiLeaf className="text-3xl text-green-600" />
            <h2 className="text-2xl font-bold text-black">Horta Solidária</h2>
          </div>
        </Link>
      </div>
      {/* Navegação */}
      <nav className="inline-flex text-base gap-6 font-semibold text-gray-500">
        <Link href="#">
          Home
        </Link>
        <Link
          href="/site/projeto-de-extensao"
          className={pathname === '/projeto-de-extensao' ? ActiveStyle : ''}
        >
          Projeto de extensão
        </Link>
        <Link
          href="/site/documentacao"
          className={pathname === '/documentacao' ? ActiveStyle : ''}
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
          <LoginButton>
            <button className="flex items-center gap-1 rounded-full border bg-green-600 px-5 py-2.5 text-base font-semibold text-white">
              <BiLogIn />
              Acessar plataforma
            </button>
          </LoginButton>
        </div>
      </div>
    </header>
  )
}

export default Navbar
