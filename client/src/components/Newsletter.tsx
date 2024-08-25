import { InputText } from 'primereact/inputtext'
import React, { FormEvent, useState } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('email enviado com sucesso')
  }
  return (
    <section className="bg-white pb-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Se inscreva para receber novidades!
          </h2>
          <p className="mx-auto mb-6 max-w-2xl font-light text-gray-500 sm:text-xl">
            Mantenha-se atualizado com o progresso do roteiro, anúncios e
            descontos exclusivos, sinta-se à vontade para se inscrever com seu
            e-mail.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center justify-center"
          >
            <div className="mb-3 sm:flex">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <BiEnvelope />
                </span>
                <InputText
                  placeholder="Informe seu email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="block w-full rounded-l-lg border border-gray-300 bg-gray-50 py-3 pl-10 text-sm text-gray-900 outline-none focus:outline-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-r-lg bg-green-600 px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 focus:ring-green-600"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex gap-1 text-left text-sm text-gray-500">
              <p>Nós nos preocupamos com a proteção de seus dados.</p>
              <Link
                to="/#"
                className="font-medium text-green-600 hover:underline"
              >
                Leia a política de privacidade
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
