import React from 'react';
import { Package, Users } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Inventory', icon: Package },
    { name: 'HR Management', icon: Users }
  ];

  return (
    <div className="mb-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-lg flex items-center justify-center ${
                activeTab === tab.name
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;