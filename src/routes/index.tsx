import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { WebSiteLayout } from '@/components/WebSiteLayout'
import Page404 from '@/Pages/assets/404'
import Cadastro from '@/Pages/Plataforma/Cadastro/Cadastro'
import Dashboard from '@/Pages/Plataforma/Dashboard/Dashboard'
import CommonLayout from '@/Pages/Plataforma/Doações/Doacao'
import DonationsPage from '@/Pages/Plataforma/Doações/DoacoesRealizadas'
import DonationForm from '@/Pages/Plataforma/Doações/Formulario'
import Login from '@/Pages/Plataforma/Login/Login'
import ProfileSettings from '@/Pages/Plataforma/Settings/ProfileSettings'
import SettingsLayout from '@/Pages/Plataforma/Settings/Settings'
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
        <Route path="/" element={<CommonLayout />}>
          <Route path="doacao" element={<DonationForm />} />
          <Route path="doacoesRealizadas" element={<DonationsPage />} />
        </Route>
        <Route path="/" element={<SettingsLayout />}>
          <Route path="configuracoes-perfil" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
