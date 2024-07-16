import React from 'react';

const Live = ({ items, onItemClick }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Live Items</h2>
      <ul className="space-y-2">
        {items.map(item => (
          <li 
            key={item.id} 
            className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
            onClick={() => onItemClick(item)}
          >
            {item.name} - Barcode: {item.barcode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Live;