import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Inventory from './components/Inventory/Inventory';
import HRManagement from './components/HR/HRManagement';

function App() {
  const [activeTab, setActiveTab] = useState('Inventory');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">E-commerce Tracker</h1>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Inventory' && <Inventory />}
      {activeTab === 'HR Management' && <HRManagement />}
    </div>
  );
}

export default App;