require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Import models
const Employee = require('./models/Employee');
const HoursLog = require('./models/HoursLog');
const InventoryItem = require('./models/InventoryItem');

// Define associations
Employee.hasMany(HoursLog);
HoursLog.belongsTo(Employee);

// Import routes
const employeeRoutes = require('./routes/employees');
const hoursLogRoutes = require('./routes/hoursLogs');
const inventoryRoutes = require('./routes/inventory');

// Use routes
app.use('/api/employees', employeeRoutes);
app.use('/api/hoursLogs', hoursLogRoutes);
app.use('/api/inventory', inventoryRoutes);

// Sync database and start server
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('Error syncing database:', err));