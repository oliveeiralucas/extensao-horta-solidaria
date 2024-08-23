import React from 'react'
import { BiCameraMovie } from 'react-icons/bi'

const Mission: React.FC = () => {
  return (
    <section className="grid grid-cols-1 items-center bg-gray-100 p-5 md:grid-cols-2 md:p-20">
      <div className="flex flex-col items-center justify-center pt-10 md:order-last">
        <img
          src="/justificativa-imagem.jpg"
          alt="imagem projeto"
          className="mb-10 h-auto max-w-full rounded-lg"
        />
      </div>
      <div className="mx-auto w-full pb-8 text-center md:px-8 md:text-left lg:px-6">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Projeto Horta Solidária
        </h2>
        <p className="pb-10 text-sm font-thin text-gray-600 md:text-xl">
          A Horta Solidária é um projeto social inovador promovido pela
          Prefeitura de Apucarana, dedicado a atender famílias carentes e idosos
          na comunidade. O projeto tem como base a criação e manutenção de
          hortas comunitárias, cujo propósito vai além da produção de alimentos
          saudáveis.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="#video"
            className="inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2.5 text-center text-base font-medium text-white md:text-lg"
          >
            <BiCameraMovie className="text-lg" />
            <span className="ml-2">Vídeo Explicativo</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Mission
