import React from 'react'

interface FeatureCardProps {
  icon: JSX.Element
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-green-100 text-xl text-green-600 md:size-16">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">
        {title}
      </h3>
      <p className="text-sm text-gray-700 md:text-base">{description}</p>
    </div>
  )
}

export default FeatureCard
