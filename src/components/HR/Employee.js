import React from 'react';

const Employee = ({ employee, onDelete, onViewDetails }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-semibold">{employee.name}</h3>
      <p>Position: {employee.position}</p>
      <p>Email: {employee.email}</p>
      <div className="mt-2 space-x-2">
        <button 
          onClick={() => onViewDetails(employee)} 
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          View Details
        </button>
        <button 
          onClick={() => onDelete(employee.id)} 
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Remove Employee
        </button>
      </div>
    </div>
  );
};

export default Employee;