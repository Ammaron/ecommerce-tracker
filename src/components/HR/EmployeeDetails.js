import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EmployeeDetails = ({ employee, onClose }) => {
  // Mock data for the charts
  const weekData = [
    { day: 'Mon', hours: 8 },
    { day: 'Tue', hours: 7.5 },
    { day: 'Wed', hours: 8 },
    { day: 'Thu', hours: 8.5 },
    { day: 'Fri', hours: 7 },
  ];

  const monthData = [
    { week: 'Week 1', hours: 40 },
    { week: 'Week 2', hours: 38 },
    { week: 'Week 3', hours: 42 },
    { week: 'Week 4', hours: 39 },
  ];

  const totalHoursThisWeek = weekData.reduce((sum, day) => sum + day.hours, 0);
  const totalHoursThisMonth = monthData.reduce((sum, week) => sum + week.hours, 0);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-4/5 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{employee.name} - Details</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Position: {employee.position} | Email: {employee.email}
            </p>
            <div className="mt-4">
              <h4 className="text-md font-medium">This Week's Hours</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weekData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="hours" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-2">Total hours this week: {totalHoursThisWeek}</p>
            </div>
            <div className="mt-8">
              <h4 className="text-md font-medium">This Month's Hours</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="hours" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
              <p className="mt-2">Total hours this month: {totalHoursThisMonth}</p>
            </div>
          </div>
        </div>
        <div className="items-center px-4 py-3">
          <button
            id="ok-btn"
            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;