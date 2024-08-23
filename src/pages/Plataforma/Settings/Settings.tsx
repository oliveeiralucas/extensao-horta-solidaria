import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const SettingsLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="overflow-hidden font-inter text-gray-800">
      <main
        className={`min-h-screen w-full bg-gray-50 transition-all ${
          isSidebarOpen ? 'md:ml-72 md:w-[calc(100%-256px)]' : 'md:w-full'
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} />
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="mx-4 bg-gray-100">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default SettingsLayout
