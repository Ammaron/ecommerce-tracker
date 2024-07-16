import React, { useState } from 'react';

const ItemDetails = ({ item, onUpdate, onStatusChange }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedItem);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Item Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={editedItem.name} 
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Barcode:</label>
          <input 
            type="text" 
            name="barcode" 
            value={editedItem.barcode} 
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Location:</label>
          <input 
            type="text" 
            name="location" 
            value={editedItem.location} 
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Status:</label>
          <select 
            name="status" 
            value={editedItem.status} 
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="stock">Stock</option>
            <option value="photos">Photos</option>
            <option value="live">Live</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Update Item
        </button>
      </form>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Move Item:</h3>
        <div className="space-x-2">
          {editedItem.status !== 'stock' && (
            <button onClick={() => onStatusChange(item, 'stock')} className="bg-gray-200 px-3 py-1 rounded">
              To Stock
            </button>
          )}
          {editedItem.status !== 'photos' && (
            <button onClick={() => onStatusChange(item, 'photos')} className="bg-gray-200 px-3 py-1 rounded">
              To Photos
            </button>
          )}
          {editedItem.status !== 'live' && (
            <button onClick={() => onStatusChange(item, 'live')} className="bg-gray-200 px-3 py-1 rounded">
              To Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;