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
  const [dataClear, setDataClear] = React.useState(false);
  const [vendorURL, setVendorURL] = React.useState('');

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Site Options</h2>
      
      <SiteOption
        title="Admin area access"
        description="Disallow vendor and customers from accessing the wp-admin dashboard area."
        toggle={adminAccess}
        onToggle={() => setAdminAccess(!adminAccess)}
      />

      <SiteOption
        title="Disable welcome wizard"
        description="Disable welcome wizard for newly registered vendors."
        toggle={disableWizard}
        onToggle={() => setDisableWizard(!disableWizard)}
      />

      <SiteOption
        title="Log ShipStation API requests"
        description="Log all ShipStation API interactions."
        toggle={logAPI}
        onToggle={() => setLogAPI(!logAPI)}
      />

      <SiteOption
        title="Data clear"
        description="Delete all data and tables related to Dokan and Dokan Pro while deleting the Dokan plugin."
        toggle={dataClear}
        onToggle={() => setDataClear(!dataClear)}
        danger={true}
      />

      <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg shadow-md">
        <div>
          <h3 className="text-lg font-semibold text-green-700">Vendor store URL</h3>
          <p className="text-sm text-gray-600">
            Define vendor store name in URL (http://localhost/wordpress/[this-text]/[vendor-name])
          </p>
        </div>
        <input
          type="text"
          className="border border-green-300 rounded-lg p-2 ml-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="store name"
          value={vendorURL}
          onChange={(e) => setVendorURL(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SiteOptions;
