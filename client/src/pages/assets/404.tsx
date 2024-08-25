import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Page404: React.FC = () => {
  return (
    <main>
      <div className="mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
        <div className="mx-auto max-w-xl space-y-3 text-center">
          <h3 className="font-semibold text-green-600">Erro 404</h3>
          <p className="text-4xl font-bold text-gray-800 sm:text-5xl">
            Página não encontrada
          </p>
          <p className="text-gray-600">
            A página que está procurando não existe ou foi movida.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
            <Link
              to="/"
              className="flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2 font-medium text-white duration-150 hover:bg-green-500 active:bg-green-700"
            >
              <BiArrowBack />
              Página Inicial
            </Link>
            <Link
              to="/support"
              className="block rounded-lg border px-4 py-2 font-medium text-gray-700 duration-150 hover:bg-gray-50 active:bg-gray-100"
            >
              Contactar Suporte
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page404
