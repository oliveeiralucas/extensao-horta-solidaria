import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { WebSiteLayout } from '@/components/WebSiteLayout'
import Page404 from '@/pages/assets/404'
import Cadastro from '@/pages/Cadastro/Cadastro'
import Documentacao from '@/pages/documentacao/documentacao'
import HomePage from '@/pages/home/HomePage'
import Login from '@/pages/Login/Login'
import ProjetoExtensao from '@/pages/projetoExtensao/ProjetoExtensao'

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
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
