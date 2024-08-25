// src/Login.js
import React, { useState } from 'react'
import { BiHide, BiLeaf } from 'react-icons/bi'

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex h-screen items-center justify-center bg-green-600 font-sans">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Imagem Lateral */}
        <img
          className="flex w-1/2 bg-cover bg-center object-cover	"
          src="regador.jpg"
        ></img>

        {/* Formulário */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          <div className="mb-8 text-center">
            <div className="mb-3 flex items-center justify-center gap-1">
              <BiLeaf className="text-3xl text-green-600" />
              <a href="/" className="text-2xl font-bold text-black">
                Horta Solidária
              </a>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Acesse já sua conta!</h2>
            <p className="text-gray-500">
              -----------Ou utilize seu e-mail-----------
            </p>
          </div>

          <form>
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
              />
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
            <div className="mb-6 flex items-center justify-between">
              <a
                className="inline-block align-baseline text-sm font-bold text-green-600 hover:text-green-800"
                href="#"
              >
                Esqueceu a senha?
              </a>
            </div>
            <button
              className="w-full rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800"
              type="button"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">
              😊 Não tem conta?{' '}
              <a
                href="/cadastro"
                className="font-bold text-green-600 hover:text-green-800"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
