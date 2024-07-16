import React, { useState, useEffect } from 'react';
import Stock from './Stock';
import Photos from './Photos';
import Live from './Live';
import ItemDetails from './ItemDetails';
import SearchFilter from './SearchFilter';
import AddItemForm from './AddItemForm';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [view, setView] = useState('stock'); // 'stock', 'photos', or 'live'

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockItems = [
      { id: 1, name: 'Item 1', status: 'stock', barcode: '123456', location: 'A1' },
      { id: 2, name: 'Item 2', status: 'photos', barcode: '234567', location: 'B2' },
      { id: 3, name: 'Item 3', status: 'live', barcode: '345678', location: 'C3' },
    ];
    setItems(mockItems);
    setFilteredItems(mockItems);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.barcode.includes(searchTerm)
    );
    setFilteredItems(filtered);
  };

  const handleFilter = (status) => {
    setView(status);
    const filtered = items.filter(item => item.status === status);
    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleItemUpdate = (updatedItem) => {
    const updatedItems = items.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    setFilteredItems(updatedItems.filter(item => item.status === view));
    setSelectedItem(null);
  };

  const handleStatusChange = (item, newStatus) => {
    const updatedItem = { ...item, status: newStatus };
    handleItemUpdate(updatedItem);
  };

  const handleAddItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setFilteredItems(updatedItems.filter(item => item.status === view));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
      <div className="flex mt-4">
        <div className="w-2/3 pr-4">
          {view === 'stock' && <Stock items={filteredItems.filter(item => item.status === 'stock')} onItemClick={handleItemClick} />}
          {view === 'photos' && <Photos items={filteredItems.filter(item => item.status === 'photos')} onItemClick={handleItemClick} />}
          {view === 'live' && <Live items={filteredItems.filter(item => item.status === 'live')} onItemClick={handleItemClick} />}
        </div>
        <div className="w-1/3">
          {selectedItem && (
            <ItemDetails 
              item={selectedItem} 
              onUpdate={handleItemUpdate} 
              onStatusChange={handleStatusChange} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;