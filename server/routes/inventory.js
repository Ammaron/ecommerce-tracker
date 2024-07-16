const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem');

// Get all inventory items
router.get('/', async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new inventory item
router.post('/', async (req, res) => {
  const item = new InventoryItem({
    name: req.body.name,
    barcode: req.body.barcode,
    location: req.body.location,
    status: req.body.status
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an inventory item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await InventoryItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;