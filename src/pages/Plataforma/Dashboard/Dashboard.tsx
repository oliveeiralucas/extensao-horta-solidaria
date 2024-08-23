import React from 'react'

import MainContent from './MainContent'
import Sidebar from './Sidebar'

const Dashboard: React.FC = () => {
  return (
    <div className="overflow-hidden font-inter text-gray-800">
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Dashboard
