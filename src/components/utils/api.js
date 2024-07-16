import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const handleApiError = (error) => {
  console.error('API Error:', error);
  if (error.response) {
    console.error("Data:", error.response.data);
    console.error("Status:", error.response.status);
    console.error("Headers:", error.response.headers);
  } else if (error.request) {
    console.error("Request:", error.request);
  } else {
    console.error("Error:", error.message);
  }
  console.error("Error Config:", error.config);
  throw error;
};

export const getEmployees = () => axios.get(`${API_URL}/employees`, { timeout: 10000 }).catch(handleApiError);
export const addEmployee = (employee) => axios.post(`${API_URL}/employees`, employee, { timeout: 5000 }).catch(handleApiError);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/employees/${id}`, { timeout: 5000 }).catch(handleApiError);

export const logHours = (employeeId, date, hours) => axios.post(`${API_URL}/hoursLogs`, { employeeId, date, hours }, { timeout: 5000 }).catch(handleApiError);
export const getHoursLogs = (employeeId) => axios.get(`${API_URL}/hoursLogs/${employeeId}`, { timeout: 5000 }).catch(handleApiError);

export const getInventoryItems = () => axios.get(`${API_URL}/inventory`, { timeout: 5000 }).catch(handleApiError);
export const addInventoryItem = (item) => axios.post(`${API_URL}/inventory`, item, { timeout: 5000 }).catch(handleApiError);
export const updateInventoryItem = (id, item) => axios.put(`${API_URL}/inventory/${id}`, item, { timeout: 5000 }).catch(handleApiError);