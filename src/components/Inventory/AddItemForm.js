import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    barcode: '',
    location: '',
    status: 'stock'
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ ...newItem, id: Date.now() }); // Using timestamp as a simple id
    setNewItem({ name: '', barcode: '', location: '', status: 'stock' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-semibold mb-2">Add New Item</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="barcode"
          value={newItem.barcode}
          onChange={handleChange}
          placeholder="Barcode"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          value={newItem.location}
          onChange={handleChange}
          placeholder="Location"
          className="p-2 border rounded"
          required
        />
        <select
          name="status"
          value={newItem.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="stock">Stock</option>
          <option value="photos">Photos</option>
          <option value="live">Live</option>
        </select>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;