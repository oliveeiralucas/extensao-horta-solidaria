'use client'
import React from 'react';

interface SiteOptionProps {
  title: string;
  description: string;
  toggle: boolean;
  onToggle: () => void;
  danger?: boolean;
}

const SiteOption: React.FC<SiteOptionProps> = ({ title, description, toggle, onToggle, danger }) => {
  return (
    <div className={`flex justify-between items-center p-4 mb-4 rounded-lg ${danger ? 'bg-red-100' : 'bg-green-100'} shadow-md`}>
      <div>
        <h3 className={`text-lg font-semibold ${danger ? 'text-red-700' : 'text-green-700'}`}>{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${toggle ? 'bg-green-500' : 'bg-gray-300'}`}
        onClick={onToggle}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${toggle ? 'translate-x-6' : ''}`}
        ></div>
      </button>
    </div>
  );
};

const SiteOptions: React.FC = () => {
  const [adminAccess, setAdminAccess] = React.useState(true);
  const [disableWizard, setDisableWizard] = React.useState(true);
  const [logAPI, setLogAPI] = React.useState(true);

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Opções do site</h2>
      
      <SiteOption
        title="Acesso à admninistração"
        description="Proiba que fornecedores e clientes acessem a área do painel wp-admin."
        toggle={adminAccess}
        onToggle={() => setAdminAccess(!adminAccess)}
      />

      <SiteOption
        title="Desativar assistente de boas-vindas"
        description="Desative o assistente de boas-vindas para fornecedores recém-registrados."
        toggle={disableWizard}
        onToggle={() => setDisableWizard(!disableWizard)}
      />

      <SiteOption
        title="Registrar solicitações da API"
        description="Registre todas as interações da API."
        toggle={logAPI}
        onToggle={() => setLogAPI(!logAPI)}
      />
    </div>
  );
};

export default SiteOptions;
