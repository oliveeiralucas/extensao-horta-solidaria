import React from 'react'
import { BiLeaf } from 'react-icons/bi'

const Sponsors: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center gap-2 text-center text-3xl font-bold text-green-800">
        <BiLeaf />
        <p>Seja um Patrocinador da Horta Solidária</p>
      </div>
      <figure className="mt-10">
        <blockquote className="max-w-5xl text-center text-lg font-normal leading-8 text-gray-700 sm:leading-9">
          Faça parte desta iniciativa transformadora! Ao se tornar um
          patrocinador da Horta Solidária, você está contribuindo para alimentar
          famílias, promover a sustentabilidade ambiental e fortalecer nossa
          comunidade. Junte-se a nós e faça a diferença na vida das pessoas e no
          futuro do nosso planeta.
        </blockquote>
        <figcaption className="mt-10">
          <img
            className="mx-auto w-36"
            src="/logo-unifil.svg"
            alt="Logo UNIFIL"
          />
        </figcaption>
      </figure>
    </section>
  )
}

export default Sponsors
