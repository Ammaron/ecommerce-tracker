const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HoursLog = sequelize.define('HoursLog', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hours: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = HoursLog;