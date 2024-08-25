//import { useAuth } from "../../context/AuthProvider/useAuth"
import React from 'react'

import Footer from './Footer'
import Navbar from './NavBar'

// Resposável por envolver toda a aplicação e validar as rotas
export const WebSiteLayout: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <div className="h-full overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
