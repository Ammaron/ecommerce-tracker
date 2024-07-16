import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="flex-grow p-2 border rounded"
      />
      <button onClick={() => onFilter('stock')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Stock
      </button>
      <button onClick={() => onFilter('photos')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Photos
      </button>
      <button onClick={() => onFilter('live')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Live
      </button>
    </div>
  );
};

export default SearchFilter;