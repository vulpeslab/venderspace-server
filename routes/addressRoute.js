const express = require('express');
const router = express.Router();
const Address = require('../model/addressModel');

// Create an address
router.post('/', async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all addresses
router.get('/', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an address by ID
router.get('/:id', async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an address
router.put('/:id', async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an address
router.delete('/:id', async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.status(200).json({ message: 'Address deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

