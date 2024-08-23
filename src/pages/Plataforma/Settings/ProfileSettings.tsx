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
    company: 'ProCrew',
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
            alt="Profile"
            className="size-24 rounded-full object-cover"
          />
          <div className="ml-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-xl border border-transparent bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none"
            >
              Upload New Photo
            </button>
            <button
              type="button"
              className="ml-4 inline-flex justify-center rounded-xl border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
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
              Last Name
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
              User Name
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
              Email Address
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
              Phone Number
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
              Location
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
              Time Zone
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
                Company
              </label>
              <div className="mt-2 flex items-center">
                <input
                  type="radio"
                  id="proCrew"
                  name="company"
                  value="ProCrew"
                  checked={formData.company === 'ProCrew'}
                  onChange={handleChange}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="proCrew"
                  className="ml-2 block text-sm text-gray-700"
                >
                  ProCrew
                </label>
              </div>
              <div className="mt-2 flex items-center">
                <input
                  type="radio"
                  id="noon"
                  name="company"
                  value="Noon"
                  checked={formData.company === 'Noon'}
                  onChange={handleChange}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="noon"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Noon
                </label>
              </div>
              <div className="mt-2 flex items-center">
                <input
                  type="radio"
                  id="lamasaTech"
                  name="company"
                  value="LamasaTech"
                  checked={formData.company === 'LamasaTech'}
                  onChange={handleChange}
                  className="size-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="lamasaTech"
                  className="ml-2 block text-sm text-gray-700"
                >
                  LamasaTech
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
              Current Password
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
              New Password
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
              Confirm New Password
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
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileSettings
