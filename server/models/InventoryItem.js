const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const InventoryItem = sequelize.define('InventoryItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  barcode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('stock', 'photos', 'live'),
    allowNull: false
  },
  costPrice: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  salePrice: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
});

module.exports = InventoryItem;