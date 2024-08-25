import React, { useState } from 'react'
import { BiHide, BiLeaf } from 'react-icons/bi'

const Cadastro: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [emailError, setEmailError] = useState('')
  const [telefoneError, setTelefoneError] = useState('')

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value
    setEmail(emailValue)

    // Regex para validar o email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(emailValue)) {
      setEmailError('Email inválido')
    } else {
      setEmailError('')
    }
  }

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const telefoneValue = e.target.value
    setTelefone(telefoneValue)

    // Regex para validar o telefone
    const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/
    if (!telefoneRegex.test(telefoneValue)) {
      setTelefoneError(
        'Telefone inválido. Formato esperado: (xx) xxxx-xxxx ou (xx) xxxxx-xxxx'
      )
    } else {
      setTelefoneError('')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center bg-green-600 font-sans">
      <div className="m-10 flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          className="flex w-1/2 bg-cover bg-center object-cover"
          src="regador.jpg"
        ></img>

        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-1">
              <BiLeaf className="text-3xl text-green-600" />
              <a href="/" className="text-2xl font-bold text-black">
                Horta Solidária
              </a>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Crie sua conta!</h2>
            <p className="text-gray-500">
              -----------Preencha seus dados abaixo-----------
            </p>
          </div>

          <form>
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="nome-completo"
              >
                Nome Completo
              </label>
              <input
                className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="nome-completo"
                type="text"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="telefone"
              >
                Telefone
              </label>
              <input
                className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="telefone"
                type="tel"
                placeholder="(xx) xxxx-xxxx ou (xx) xxxxx-xxxx"
                value={telefone}
                onChange={handleTelefoneChange}
              />
              {telefoneError && (
                <p className="text-xs italic text-red-500">{telefoneError}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-xs italic text-red-500">{emailError}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Senha
              </label>
              <div className="relative">
                <input
                  className="mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                >
                  {showPassword ? <BiHide /> : '👁️'}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="confirm-password"
              >
                Confirme a Senha
              </label>
              <div className="relative">
                <input
                  className="mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirme sua senha"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                >
                  {showConfirmPassword ? <BiHide /> : '👁️'}
                </button>
              </div>
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="termos"
                className="mr-2 leading-tight"
              />
              <label htmlFor="termos" className="text-sm text-gray-700">
                Estou ciente dos Termos de Uso e das Políticas da Horta
                Solidária
              </label>
            </div>

            <button
              className="w-full rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800"
              type="button"
            >
              Cadastrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">
              😊 Já tem uma conta?{' '}
              <a
                href="/login"
                className="font-bold text-green-600 hover:text-green-800"
              >
                Faça login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
