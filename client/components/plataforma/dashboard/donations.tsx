import React from 'react'

interface Donation {
  transactionId: number
  userId: number
  donationCenter: string
  itemName: string
  quantityDonated: number
  donationDate: string
  status: string
}

const recentDonations: Donation[] = [
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
]

const DonationsTable: React.FC = () => {
  return (
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
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-600">
          {recentDonations.map((donation) => (
            <tr
              key={donation.transactionId}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="whitespace-nowrap px-6 py-3 text-left">
                {donation.transactionId}
              </td>
              <td className="px-6 py-3 text-left">{donation.donationCenter}</td>
              <td className="px-6 py-3 text-left">{donation.itemName}</td>
              <td className="px-6 py-3 text-left">
                {donation.quantityDonated}
              </td>
              <td className="px-6 py-3 text-left">{donation.donationDate}</td>
              <td className="px-6 py-3 text-left">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DonationsTable
