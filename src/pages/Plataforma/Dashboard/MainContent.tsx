import React from 'react'

import Card from './Card'
import LineChart from './Chart'
import DonationsTable from './DonationsTable'

const MainContent: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-gray-50 transition-all">
      <div className="mr-10 p-6">
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Doações Realizadas */}
          <Card
            title="Doações Realizadas"
            description="Quantidade de doações realizadas"
          >
            <div className="flex items-center">
              <div className="mr-4 text-2xl font-semibold">15</div>
              <div className="h-4 w-full rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-green-500 p-1"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-600">
                75% da meta
              </span>
            </div>
          </Card>

          {/* Card 2: Voluntários Ativos */}
          <Card
            title="Voluntários Ativos"
            description="Pessoas ajudando na horta"
          >
            <div className="text-2xl font-semibold">15 Voluntários</div>
            <div className="mt-2 text-sm font-medium text-gray-400">
              Atualizado diariamente
            </div>
          </Card>

          {/* Card 3: Doações Recebidas */}
          <Card title="Doações Recebidas" description="Quantidade de doações">
            <div className="text-2xl font-semibold">$1,200</div>
            <div className="mt-2 text-sm font-medium text-gray-400">
              Meta: $2,000
            </div>
            <div className="mt-4 flex items-center">
              <div className="h-4 w-full rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-green-500 p-1"
                  style={{ width: '60%' }}
                ></div>
              </div>
              <span className="ml-4 text-sm font-medium text-gray-600">
                60% da Meta
              </span>
            </div>
          </Card>
        </div>

        {/* Conteúdo adicional como Tabelas, Gráficos etc. */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Doações Recentes
            </h2>
            <DonationsTable />
          </div>

          <div className="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
            <LineChart id="order-chart" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent
