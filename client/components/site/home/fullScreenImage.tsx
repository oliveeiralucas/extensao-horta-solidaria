import React from 'react'
import Link from 'next/link'

interface FullscreenImageProps {
  imageUrl: string
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ imageUrl }) => {
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
        <main className="z-50 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Projeto Horta Solidária
            </h1>
            <p className="mt-6 text-base leading-7 text-white">
              Conheça um pouco mais desse projeto que nasceu com o objetivo de
              ajudar pequenas hortas a realizarem melhor a gestão de seus
              recursos
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="#">
                <span className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm cursor-pointer">
                  Conhecer Projeto
                </span>
              </Link>
              <a
                href="#"
                className="rounded-lg border border-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-yellow-400"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default FullscreenImage
