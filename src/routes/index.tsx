import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { WebSiteLayout } from '@/components/WebSiteLayout'
import Page404 from '@/Pages/assets/404'
import Cadastro from '@/Pages/Plataforma/Cadastro/Cadastro'
import Dashboard from '@/Pages/Plataforma/Dashboard/Dashboard'
import Login from '@/Pages/Plataforma/Login/Login'
import Documentacao from '@/Pages/Website/documentacao/documentacao'
import HomePage from '@/Pages/Website/home/HomePage'
import ProjetoExtensao from '@/Pages/Website/projetoExtensao/ProjetoExtensao'

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <WebSiteLayout>
              <HomePage />
            </WebSiteLayout>
          }
        />
        <Route
          path="/projeto-de-extensao"
          element={
            <WebSiteLayout>
              <ProjetoExtensao />
            </WebSiteLayout>
          }
        />
        <Route
          path="/documentacao"
          element={
            <WebSiteLayout>
              <Documentacao />
            </WebSiteLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
