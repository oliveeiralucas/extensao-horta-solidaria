'use client'
import React, { useState } from 'react'

interface UserProfile {
  firstName: string
  lastName: string
  userName: string
  email: string
  phoneNumber: string
  location: string
  timeZone: string
  currentPassword: string
  newPassword: string
  confirmPassword: string
  company: string
  joinDate: string
  rewardPointBalance: number
}

const ProfileSettings: React.FC = () => {
  const [formData, setFormData] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    location: '',
    timeZone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    company: 'apucarana',
    joinDate: '2024-08-23', // Data exemplo, deve ser obtida de dados reais
    rewardPointBalance: 100 // Pontos exemplo, deve ser obtido de dados reais
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica para enviar os dados atualizados do perfil para o backend
    console.log('Dados do Perfil Atualizados:', formData)
  }

  return (
    <div className="flex h-full items-center justify-center bg-gray-50 p-2">
      <form
        onSubmit={handleSubmit}
        className="m-2 w-full max-w-4xl rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="mb-6 flex items-center">
          <img
            src="https://via.placeholder.com/150" // Substitua pela URL real ou variável adequada
            alt="Perfil"
            className="size-24 rounded-full object-cover"
          />
          <div className="ml-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-xl border border-transparent bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none"
            >
              Inserir nova foto
            </button>
            <button
              type="button"
              className="ml-4 inline-flex justify-center rounded-xl border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none"
            >
              Deletar
            </button>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Sobrenome
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700"
            >
              Usuário
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Endereço de email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Número de telefone
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Endereço
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="timeZone"
              className="block text-sm font-medium text-gray-700"
            >
              Fuso horário
            </label>
            <input
              type="text"
              id="timeZone"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Local
              </label>
              <div className="mt-2 flex items-center">
                <input
                  type="radio"
                  id="apucarana"
                  name="company"
                  value="Apucarana"
                  checked={formData.company === 'Apucarana'}
                  onChange={handleChange}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="apucarana"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Apucarana
                </label>
              </div>
              <div className="mt-2 flex items-center">
                <input
                  type="radio"
                  id="londrina"
                  name="company"
                  value="Londrina"
                  checked={formData.company === 'Londrina'}
                  onChange={handleChange}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="londrina"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Londrina
                </label>
              </div>
              <div className="mt-2 flex items-center">
                <input
                  type="radio"
                  id="cambe"
                  name="company"
                  value="Cambe"
                  checked={formData.company === 'Cambe'}
                  onChange={handleChange}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="cambe"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Cambé
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Senha atual
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Nova senha
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirme a nova senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center rounded-xl border border-transparent bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-150 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSettings
