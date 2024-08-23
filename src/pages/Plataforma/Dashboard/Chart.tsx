import Chart from 'chart.js/auto'
import React, { useEffect, useRef } from 'react'

interface ChartProps {
  id: string
}

const LineChart: React.FC<ChartProps> = ({ id }) => {
  const chartRef = useRef<Chart | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy() // Destroi o gráfico anterior se existir
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: 'line',
        data: {
          labels: generateNDays(7),
          datasets: [
            {
              label: 'Active',
              data: generateRandomData(7),
              borderWidth: 1,
              fill: true,
              pointBackgroundColor: 'rgb(59, 130, 246)',
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: 'rgb(59 130 246 / .05)',
              tension: 0.2
            },
            {
              label: 'Completed',
              data: generateRandomData(7),
              borderWidth: 1,
              fill: true,
              pointBackgroundColor: 'rgb(16, 185, 129)',
              borderColor: 'rgb(16, 185, 129)',
              backgroundColor: 'rgb(16 185 129 / .05)',
              tension: 0.2
            },
            {
              label: 'Canceled',
              data: generateRandomData(7),
              borderWidth: 1,
              fill: true,
              pointBackgroundColor: 'rgb(244, 63, 94)',
              borderColor: 'rgb(244, 63, 94)',
              backgroundColor: 'rgb(244 63 94 / .05)',
              tension: 0.2
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy() // Destroi o gráfico ao desmontar o componente
      }
    }
  }, [id])

  return <canvas id={id} ref={canvasRef}></canvas>
}

function generateNDays(n: number): string[] {
  const data = []
  for (let i = 0; i < n; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    data.push(
      date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric'
      })
    )
  }
  return data
}

function generateRandomData(n: number): number[] {
  const data = []
  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 10))
  }
  return data
}

export default LineChart
