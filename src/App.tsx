import React from 'react'
//hooks
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Atividades from './pages/atividades/Atividades'
import Documentacao from './pages/documentacao/documentacao'
import HomePage from './pages/home/HomePage'
import ProjetoExtensao from './pages/projetoExtensao/ProjetoExtensao'

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <div className="h-full overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projeto-de-extensao" element={<ProjetoExtensao />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/documentacao" element={<Documentacao />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
