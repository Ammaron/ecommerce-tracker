import React, { useState, useEffect } from 'react';
import { getEmployees, addEmployee, deleteEmployee, logHours, getHoursLogs } from '../utils/api';
import Employee from './Employee';
import Calendar from './Calendar';
import EmployeeDetails from './EmployeeDetails';

const HRManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', email: '' });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await getEmployees();
      setEmployees(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching employees:', error);
      setError('Failed to fetch employees. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await addEmployee(newEmployee);
      setNewEmployee({ name: '', position: '', email: '' });
      await fetchEmployees();
    } catch (error) {
      console.error('Error adding employee:', error);
      setError('Failed to add employee. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveEmployee = async (id) => {
    try {
      setLoading(true);
      await deleteEmployee(id);
      await fetchEmployees();
    } catch (error) {
      console.error('Error removing employee:', error);
      setError('Failed to remove employee. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogHours = async (employeeId, date, hours) => {
    try {
      await logHours(employeeId, date, hours);
      console.log(`Logged ${hours} hours for employee ${employeeId} on ${date}`);
    } catch (error) {
      console.error('Error logging hours:', error);
      setError('Failed to log hours. Please try again.');
    }
  };

  const handleViewDetails = async (employee) => {
    try {
      setLoading(true);
      const response = await getHoursLogs(employee.id);
      setSelectedEmployee({ ...employee, hoursLogs: response.data });
    } catch (error) {
      console.error('Error fetching hours logs:', error);
      setError('Failed to fetch employee details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">HR Management</h1>
      
      <form onSubmit={handleAddEmployee} className="mb-8 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Position"
            value={newEmployee.position}
            onChange={(e) => setNewEmployee({...newEmployee, position: e.target.value})}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newEmployee.email}
            onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
            className="p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Employee
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {employees.map(employee => (
          <div key={employee.id}>
            <Employee
              employee={employee}
              onDelete={handleRemoveEmployee}
              onViewDetails={handleViewDetails}
            />
            <Calendar employee={employee} onLogHours={handleLogHours} />
          </div>
        ))}
      </div>

      {selectedEmployee && (
        <EmployeeDetails
          employee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default HRManagement;