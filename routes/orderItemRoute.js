const express = require('express');
const router = express.Router();
const OrderItem = require('../model/orderItemModel');

// Create an order item
router.post('/', async (req, res) => {
  try {
    const orderItem = new OrderItem(req.body);
    await orderItem.save();
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all order items
router.get('/', async (req, res) => {
  try {
    const orderItems = await OrderItem.find();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an order item by ID
router.get('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ error: 'OrderItem not found' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an order item
router.put('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!orderItem) {
      return res.status(404).json({ error: 'OrderItem not found' });
    }
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an order item
router.delete('/:id', async (req, res) => {
  try {
    const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
    if (!orderItem) {
      return res.status(404).json({ error: 'OrderItem not found' });
    }
    res.status(200).json({ message: 'OrderItem deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
