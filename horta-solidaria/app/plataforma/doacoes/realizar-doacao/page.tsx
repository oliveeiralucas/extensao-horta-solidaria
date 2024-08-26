'use client'
import React, { useState } from 'react'

interface DonationFormData {
  userId: number
  donationCenterId: number
  itemId: number
  quantityDonated: number
  donationDate: string
  status: 'pending' | 'completed' | 'cancelled'
}

const DonationForm: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    userId: 0,
    donationCenterId: 0,
    itemId: 0,
    quantityDonated: 0,
    donationDate: '',
    status: 'pending'
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg bg-white m-4 p-8 shadow-lg"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="userId"
            className="block text-sm font-medium text-gray-700"
          >
            ID do Usuário
          </label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="donationCenterId"
            className="block text-sm font-medium text-gray-700"
          >
            ID do Centro de Doação
          </label>
          <input
            type="number"
            id="donationCenterId"
            name="donationCenterId"
            value={formData.donationCenterId}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="itemId"
            className="block text-sm font-medium text-gray-700"
          >
            ID do Item
          </label>
          <input
            type="number"
            id="itemId"
            name="itemId"
            value={formData.itemId}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="quantityDonated"
            className="block text-sm font-medium text-gray-700"
          >
            Quantidade Doada
          </label>
          <input
            type="number"
            id="quantityDonated"
            name="quantityDonated"
            value={formData.quantityDonated}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="donationDate"
            className="block text-sm font-medium text-gray-700"
          >
            Data da Doação
          </label>
          <input
            type="date"
            id="donationDate"
            name="donationDate"
            value={formData.donationDate}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border-gray-300 bg-gray-50 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          >
            <option value="pending">Pendente</option>
            <option value="completed">Completado</option>
            <option value="cancelled">Cancelado</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Cadastrar Doação
        </button>
      </div>
    </form>
  )
}

export default DonationForm
