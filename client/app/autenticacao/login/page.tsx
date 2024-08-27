'use client'
import React, { useState } from 'react'
import { BiLeaf } from 'react-icons/bi'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { LoginButton } from '../../../components/auth/login-button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { LoginSchema } from '../../../schemas'
import { FormError } from '../../../components/form-error'
import { FormSuccess } from '../../../components/form-success'
import { login } from '../../../actions/login'
import { useTransition } from 'react'

const Login: React.FC = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')
    startTransition(() => {
      login(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <div className="flex h-screen items-center justify-center bg-green-600 font-sans">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Imagem Lateral */}
        <img
          className="flex w-1/2 bg-cover bg-center object-cover"
          src="/regador.jpg"
          alt="Horta Solidária"
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

          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                disabled={isPending}
                {...form.register('email')}
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
                  type={'password'}
                  placeholder="Digite sua senha"
                  disabled={isPending}
                  {...form.register('password')}
                />
                <FormError message={error} />
                <FormSuccess message={success} />
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
            <LoginButton>
              <button
                className="w-full rounded bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800"
                type="submit"
                disabled={isPending}
              >
                Login
              </button>
            </LoginButton>
          </form>

          {/* Botões de Login Social */}
          <div className="mt-6 text-center">
            <p className="text-gray-500">Ou continue com:</p>
            <div className="flex justify-center gap-4 mt-4">
              <button className="flex items-center justify-center w-full rounded bg-red-500 px-4 py-2 text-white font-bold hover:bg-red-700">
                <FaGoogle className="mr-2" /> Google
              </button>
              <button className="flex items-center justify-center w-full rounded bg-gray-800 px-4 py-2 text-white font-bold hover:bg-gray-900">
                <FaGithub className="mr-2" /> GitHub
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-500">
              😊 Não tem conta?{' '}
              <a
                href="/autenticacao/cadastro"
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
