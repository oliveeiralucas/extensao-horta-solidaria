import React from 'react'

interface CardProps {
  title: string
  description?: string
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="rounded-md border border-gray-100 bg-white p-6 shadow-md shadow-black/5">
      <div className="mb-4">
        <div className="text-2xl font-semibold">{title}</div>
        {description && (
          <div className="text-sm font-medium text-gray-400">{description}</div>
        )}
      </div>
      {children}
    </div>
  )
}

export default Card
