import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Atividades: React.FC = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-12 sm:py-24 lg:px-8">
        <div className="flex flex-col justify-center text-center">
          <h1 className="mt-4 items-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Estamos trabalhando para expandir nossas atividades
          </h1>
          <img
            src="/construindo.jpg"
            alt="Em construção"
            className="mx-auto mt-8 h-auto w-[400px] rounded-lg"
          />
          <p className="mt-6 text-lg leading-7 text-gray-600">
            Agradecemos sua compreensão e apoio enquanto melhoramos nossos
            serviços.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-base font-semibold text-white shadow-sm"
            >
              <BiArrowBack /> Voltar para a Página Principal
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Atividades
