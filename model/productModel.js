const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  sku: { type: String, unique: true, required: true },
  stock: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  shop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
