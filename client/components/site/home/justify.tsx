import React from 'react'

const Justify: React.FC = () => {
  return (
    <section className="grid w-full grid-cols-1 items-center bg-white p-5 md:grid-cols-2 md:p-20">
      <div>
        <img
          src="/nosso-trabalho.jpg"
          alt="imagem projeto"
          className="mb-10 w-10/12 rounded-lg"
        />
      </div>
      <div className="w-full px-4 py-8 text-center md:text-left lg:px-6">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl">
          Nosso Trabalho
        </h2>
        <p className="mb-8 text-sm font-normal text-black md:text-xl">
          A implementação da Horta Solidária como parte integrante de nossos
          projetos é fundamentada no compromisso da nossa organização em servir
          à comunidade.
        </p>
        <p className="mb-8 font-normal text-black sm:text-xl">
          Nosso aplicativo de gestão agrícola e financeira visa capacitar os
          participantes, promover a sustentabilidade econômica e fortalecer os
          laços entre nossa ONG e a comunidade local.
        </p>
        <p className="mb-8 font-normal text-black sm:text-xl">
          Isso reforça nossa missão de promover uma extensão transformadora, que
          não apenas impacta positivamente a vida das pessoas, mas também
          contribui para o desenvolvimento sustentável de nossa sociedade.
        </p>
      </div>
    </section>
  )
}

export default Justify
