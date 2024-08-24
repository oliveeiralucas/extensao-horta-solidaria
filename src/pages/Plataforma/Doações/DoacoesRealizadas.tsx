import React, { useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

interface Donation {
  transactionId: number
  userId: number
  donationCenter: string
  itemName: string
  quantityDonated: number
  donationDate: string
  status: 'pending' | 'completed' | 'cancelled'
}

const DonationsPage: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([
    {
      transactionId: 1,
      userId: 101,
      donationCenter: 'Centro de Doações ABC',
      itemName: 'Tomates',
      quantityDonated: 50,
      donationDate: '2024-08-22',
      status: 'completed'
    },
    {
      transactionId: 2,
      userId: 102,
      donationCenter: 'Centro de Doações XYZ',
      itemName: 'Cenouras',
      quantityDonated: 30,
      donationDate: '2024-08-21',
      status: 'completed'
    },
    {
      transactionId: 3,
      userId: 103,
      donationCenter: 'Centro de Doações DEF',
      itemName: 'Alface',
      quantityDonated: 20,
      donationDate: '2024-08-20',
      status: 'pending'
    }
  ])

  const [editingId, setEditingId] = useState<number | null>(null)
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)

  const handleEditClick = (transactionId: number) => {
    setEditingId(transactionId)
  }

  const handleDeleteClick = (transactionId: number) => {
    setDeleteId(transactionId)
    setShowDeleteModal(true)
  }

  const handleDeleteConfirm = () => {
    if (deleteId !== null) {
      setDonations(
        donations.filter((donation) => donation.transactionId !== deleteId)
      )
      setShowDeleteModal(false)
      setDeleteId(null)
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    transactionId: number
  ) => {
    const { name, value } = e.target
    setDonations(
      donations.map((donation) =>
        donation.transactionId === transactionId
          ? { ...donation, [name]: value }
          : donation
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold">Doações Realizadas</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border border-gray-200 bg-white shadow-md">
          <thead>
            <tr className="bg-gray-100 text-sm uppercase leading-normal text-gray-600">
              <th className="px-6 py-3 text-left">ID Transação</th>
              <th className="px-6 py-3 text-left">Centro de Doação</th>
              <th className="px-6 py-3 text-left">Item</th>
              <th className="px-6 py-3 text-left">Quantidade</th>
              <th className="px-6 py-3 text-left">Data da Doação</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light text-gray-600">
            {donations.map((donation) => (
              <tr
                key={donation.transactionId}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="whitespace-nowrap px-6 py-3 text-left">
                  {donation.transactionId}
                </td>
                <td className="px-6 py-3 text-left">
                  {editingId === donation.transactionId ? (
                    <input
                      type="text"
                      name="donationCenter"
                      value={donation.donationCenter}
                      onChange={(e) =>
                        handleInputChange(e, donation.transactionId)
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  ) : (
                    donation.donationCenter
                  )}
                </td>
                <td className="px-6 py-3 text-left">
                  {editingId === donation.transactionId ? (
                    <input
                      type="text"
                      name="itemName"
                      value={donation.itemName}
                      onChange={(e) =>
                        handleInputChange(e, donation.transactionId)
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  ) : (
                    donation.itemName
                  )}
                </td>
                <td className="px-6 py-3 text-left">
                  {editingId === donation.transactionId ? (
                    <input
                      type="number"
                      name="quantityDonated"
                      value={donation.quantityDonated}
                      onChange={(e) =>
                        handleInputChange(e, donation.transactionId)
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  ) : (
                    donation.quantityDonated
                  )}
                </td>
                <td className="px-6 py-3 text-left">
                  {editingId === donation.transactionId ? (
                    <input
                      type="date"
                      name="donationDate"
                      value={donation.donationDate}
                      onChange={(e) =>
                        handleInputChange(e, donation.transactionId)
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  ) : (
                    donation.donationDate
                  )}
                </td>
                <td className="px-6 py-3 text-left">
                  {editingId === donation.transactionId ? (
                    <select
                      name="status"
                      value={donation.status}
                      onChange={(e) =>
                        handleInputChange(e, donation.transactionId)
                      }
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option value="pending">Pendente</option>
                      <option value="completed">Completado</option>
                      <option value="cancelled">Cancelado</option>
                    </select>
                  ) : (
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        donation.status === 'completed'
                          ? 'bg-green-200 text-green-600'
                          : donation.status === 'pending'
                          ? 'bg-yellow-200 text-yellow-600'
                          : 'bg-red-200 text-red-600'
                      }`}
                    >
                      {donation.status}
                    </span>
                  )}
                </td>
                <td className="flex justify-center space-x-4 px-6 py-3 text-center">
                  {editingId === donation.transactionId ? (
                    <button
                      onClick={handleCancelEdit}
                      className="text-blue-500 hover:underline"
                    >
                      Salvar
                    </button>
                  ) : (
                    <FiEdit
                      onClick={() => handleEditClick(donation.transactionId)}
                      className="cursor-pointer text-blue-500"
                    />
                  )}
                  <FiTrash2
                    onClick={() => handleDeleteClick(donation.transactionId)}
                    className="cursor-pointer text-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Confirmar Exclusão</h2>
            <p className="mt-4">
              Tem certeza de que deseja excluir esta doação?
            </p>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="rounded-md bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DonationsPage
