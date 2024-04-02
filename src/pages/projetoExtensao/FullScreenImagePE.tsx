// FullscreenImage.tsx
import React from 'react'

interface FullScreenImagePEProps {
  imageUrl: string
}

const FullScreenImagePE: React.FC<FullScreenImagePEProps> = ({ imageUrl }) => {
  return (
    <>
      <div
        className="flex h-[90vh] w-full items-center justify-center brightness-75"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Projeto de Extensão
            </h1>
            <p className="mt-6 text-base leading-7 text-white">
              Conheça um pouco mais sobre o projeto de extensão da unifil
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projeto-extensao"
                className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
              >
                Conhecer Projeto
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default FullScreenImagePE
