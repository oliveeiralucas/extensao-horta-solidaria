import React from 'react'
import {
  BiLeaf,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoInstagram
} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      <div className="relative bottom-0 mt-10 bg-green-400">
        <svg
          className="absolute top-0 -mt-5 h-6 w-full text-gray-100 sm:-mt-10 sm:h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <footer className="divide-y px-4 dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
            <div className="mb-6 flex items-center gap-1 text-2xl font-semibold md:mb-0">
              <BiLeaf />
              <span className="self-center whitespace-nowrap">
                Horta Solidária
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
              <div className="space-y-3">
                <h3 className="font-semibold uppercase tracking-wide dark:text-gray-900">
                  Produto
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      Features
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold uppercase tracking-wide dark:text-gray-900">
                  Políticas
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      Privacidade
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      Termos de Serviço
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold uppercase dark:text-gray-900">
                  Desenvolvedores
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/oliveeiralucas/extensao-horta-solidaria"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="/documentacao">
                      Documentação
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-semibold uppercase dark:text-gray-900">
                  Redes Sociais
                </div>
                <div className="flex justify-start space-x-3 text-2xl">
                  <BiLogoFigma />
                  <BiLogoInstagram />
                  <BiLogoGithub />
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 text-center text-sm dark:text-gray-600">
            © 2024 Horta Solidaria. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
