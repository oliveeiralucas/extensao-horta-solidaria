import React from 'react'

const Documentacao: React.FC = () => {
  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
          Documentação
        </h2>
        <p className="mb-10 text-center  text-gray-500 max-lg:mx-auto max-lg:max-w-xl">
          Confira a documentação desenvolvida para essa aplicação.
        </p>
        <div className="flex flex-wrap justify-center gap-y-8 lg:flex-row lg:gap-x-8">
          {/* Visão */}
          <div className="group w-full rounded-2xl border border-gray-300 max-lg:max-w-xl lg:w-1/3">
            <div className="flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696244317.png"
                alt="blogs tailwind section"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
              <span className="mb-3 block font-medium text-green-600">
                Mai 16, 2024
              </span>
              <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                Documento de Visão
              </h4>
              <p className="mb-10 leading-6 text-gray-500">
                O documento de visão no RUP define requisitos e funcionalidades,
                alinha expectativas e estabelece o escopo.
              </p>
              <a
                href="/documento visao.pdf"
                className="cursor-pointer text-lg font-semibold text-green-600"
                download
              >
                Baixar...
              </a>
            </div>
          </div>
          {/* Project Model Canvas */}
          <div className="group w-full rounded-2xl border border-gray-300 max-lg:max-w-xl lg:w-1/3">
            <div className="flex items-center">
              <img
                src="https://artia.com/wp-content/uploads/2020/02/PM-Canvas-ou-Canvas-de-Projeto-como-funciona.png"
                alt="blogs tailwind section"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
              <span className="mb-3 block font-medium text-green-600">
                Mai 19, 2024
              </span>
              <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                Project Model Canvas
              </h4>
              <p className="mb-10 leading-6 text-gray-500">
                O Project Model Canvas é uma ferramenta visual para planejar
                projetos, alinhando objetivos, recursos e ações.
              </p>
              <a
                href="/Project Model Canvas.pdf"
                className="cursor-pointer text-lg font-semibold text-green-600"
                download
              >
                Baixar..
              </a>
            </div>
          </div>
          {/* DER */}
          <div className="group w-full rounded-2xl border border-gray-300 max-lg:max-w-xl lg:w-1/3">
            <div className="flex items-center">
              <img
                src="https://coodesh.com/blog/wp-content/uploads/2022/08/diagrama-de-entidade-e-relacionamento-scaled.jpg"
                alt="blogs tailwind section"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
              <span className="mb-3 block font-medium text-green-600">
                jun 19, 2024
              </span>
              <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                Diagrama de entidade relacionamento
              </h4>
              <p className="mb-10 leading-6 text-gray-500">
                Representa dados e seus relacionamentos no sistema
              </p>
              <a
                href="/der.png"
                className="cursor-pointer text-lg font-semibold text-green-600"
                download
              >
                Baixar..
              </a>
            </div>
          </div>{' '}
          <div className="group w-full rounded-2xl border border-gray-300 max-lg:max-w-xl lg:w-1/3">
            <div className="flex items-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:529/1*HhEy_rUnWj2axLTTVQpy5w.png"
                alt="blogs tailwind section"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
              <span className="mb-3 block font-medium text-green-600">
                jun 19, 2024
              </span>
              <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                Diagrama da UML de sequencia
              </h4>
              <p className="mb-10 leading-6 text-gray-500">
                Visualiza a sequência de mensagens trocadas entre objetos em um
                processo.
              </p>
              <a
                href="/diagrama sequencia.png"
                className="cursor-pointer text-lg font-semibold text-green-600"
                download
              >
                Baixar..
              </a>
            </div>
          </div>
          <div className="group w-full rounded-2xl border border-gray-300 max-lg:max-w-xl lg:w-1/3">
            <div className="flex items-center">
              <img
                src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/class-diagram-for-hotel-management-system-UML/UML_class_diagram_hotel-949x683.PNG"
                alt="blogs tailwind section"
                className="w-full rounded-t-2xl"
              />
            </div>{' '}
            <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
              <span className="mb-3 block font-medium text-green-600">
                jun 19, 2024
              </span>
              <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                Diagrama UML de classe
              </h4>
              <p className="mb-10 leading-6 text-gray-500">
                Visualiza a estrutura do sistema, mostrando classes, atributos,
                métodos e relacionamentos.
              </p>
              <a
                href="/diagrama de classe.png"
                className="cursor-pointer text-lg font-semibold text-green-600"
                download
              >
                Baixar..
              </a>
            </div>
          </div>
          <div className="group w-full rounded-2xl border border-gray-300 max-lg:max-w-xl lg:w-1/3">
            <div className="flex items-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*pSyPHIIzSGwyPo-HkhCkhg.png"
                alt="blogs tailwind section"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
              <span className="mb-3 block font-medium text-green-600">
                jun 03, 2024
              </span>
              <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                Caso de uso
              </h4>
              <p className="mb-10 leading-6 text-gray-500">
                Descreve interações entre usuários e sistema para alcançar um
                objetivo.
              </p>
              <a
                href="caso-de-uso.png"
                className="cursor-pointer text-lg font-semibold text-green-600"
                download
              >
                Baixar..
              </a>
            </div>
          </div>
          <div className="group w-full rounded-2xl border border-gray-300 max-lg:max-w-xl lg:w-1/3">
            <div className="flex items-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/1*pSyPHIIzSGwyPo-HkhCkhg.png"
                alt="blogs tailwind section"
                className="w-full rounded-t-2xl"
              />
            </div>
            <div className="rounded-b-2xl p-4 transition-all duration-300 group-hover:bg-gray-50 lg:p-6">
              <span className="mb-3 block font-medium text-green-600">
                aug 23, 2024
              </span>
              <h4 className="mb-5 text-xl font-medium leading-8 text-gray-900">
                Modelagem DB
              </h4>
              <p className="mb-10 leading-6 text-gray-500">
                Descreve como o banco de dados será formulado
              </p>
              <a
                href="Database Scheme.pdf"
                className="cursor-pointer text-lg font-semibold text-green-600"
                download
              >
                Baixar..
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentacao
