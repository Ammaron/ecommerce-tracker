import React, { useState } from 'react';

const Calendar = ({ employee, onLogHours }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogHours(employee.id, selectedDate, parseFloat(hours));
    setSelectedDate('');
    setHours('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Log Hours for {employee.name}</h3>
      <div className="flex space-x-2">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours Worked"
          className="p-2 border rounded"
          step="0.5"
          min="0"
          max="24"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Log Hours
        </button>
      </div>
    </form>
  );
};

export default Calendar;