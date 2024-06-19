import React, { useEffect, useState } from 'react'
import { BiBell, BiLeaf, BiMenu, BiSearchAlt2, BiX } from 'react-icons/bi'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const ActiveStyle = `
    text-green-600
  `

  const active = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      {windowWidth >= 768 ? (
        <header className="sticky top-0 flex items-center justify-between bg-white p-4 text-white shadow-md">
          {/* titulo */}
          <div>
            <NavLink to={'/'}>
              <div className="flex items-center justify-center gap-1">
                <BiLeaf className="text-3xl text-green-600" />
                <h2 className="text-2xl font-bold text-black">
                  Horta Solidária
                </h2>
              </div>
            </NavLink>
          </div>
          {/* navegacao */}
          <nav className="inline-flex list-none gap-6 text-base font-semibold text-gray-500">
            <NavLink
              to={'/'}
              className={active.pathname === '/' ? ActiveStyle : ''}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={'/projeto-de-extensao'}
              className={
                active.pathname === '/projeto-de-extensao' ? ActiveStyle : ''
              }
            >
              <li>Projeto de extensão</li>
            </NavLink>
            <>
              <NavLink
                to={'/documentacao'}
                className={
                  active.pathname === '/documentacao' ? ActiveStyle : ''
                }
              >
                <li>Documentação</li>
              </NavLink>
              <NavLink
                to={'/atividades'}
                className={active.pathname === '/atividades' ? ActiveStyle : ''}
              >
                <li>Atividades</li>
              </NavLink>
            </>
          </nav>
          {/* pesquisa + fique por dentro das novidades */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="rounded-full border-[0.5px] border-gray-400 p-2 outline outline-offset-1 outline-green-600 focus:outline-none	"
            >
              <BiSearchAlt2 className="text-xl text-gray-500" />
            </button>
            <div className="flex gap-2">
              <NavLink to={'/newsletter'}>
                <button className="flex items-center gap-1 rounded-full border bg-green-600 px-5 py-2.5 text-base font-semibold text-white">
                  <BiBell />
                  Novidades
                </button>
              </NavLink>
            </div>
          </div>
        </header>
      ) : (
        <>
          <header className="sticky top-0 flex items-center justify-between bg-white p-4 text-white shadow-md">
            {/* titulo */}
            <div>
              <NavLink to={'/'}>
                <div className="flex items-center justify-center gap-1">
                  <BiLeaf className="text-3xl text-green-600" />
                  <h2 className="text-2xl font-bold text-black">
                    Horta Solidária
                  </h2>
                </div>
              </NavLink>
            </div>
            <div onClick={toggleMenu}>
              {menuOpen ? (
                <BiX className="text-2xl text-black" />
              ) : (
                <BiMenu className="text-2xl text-black" />
              )}
            </div>
          </header>
          {menuOpen ? (
            <div className="z-50 grid gap-y-6 bg-white py-5">
              {/* Navegação */}
              <NavLink
                to={'/'}
                className={`mx-5 text-lg font-semibold text-gray-500 ${
                  active.pathname === '/' ? ActiveStyle : ''
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to={'/projeto-de-extensao'}
                className={`mx-5 text-lg font-semibold text-gray-500 ${
                  active.pathname === '/projeto-de-extensao' ? ActiveStyle : ''
                }`}
              >
                Projeto de extensão
              </NavLink>
              <NavLink
                to={'/atividades'}
                className={`mx-5 text-lg font-semibold text-gray-500 ${
                  active.pathname === '/atividades' ? ActiveStyle : ''
                }`}
              >
                Atividades
              </NavLink>
            </div>
          ) : null}
        </>
      )}
    </>
  )
}

export default Navbar
