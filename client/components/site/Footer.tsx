import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 w-full flex">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between">
          <span className="flex items-center self-center text-2xl font-semibold whitespace-nowrap">
          <img src="/favicon.svg" className="h-8" alt="Flowbite Logo" />
            Horta Solidaria
          </span>
          <ul className="flex flex-wrap items-center mb-6 gap-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Horta Solidária
          </a>
          . Todos direitos reservados
        </span>
      </div>
    </footer>
  )
}

export default Footer
