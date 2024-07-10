 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password_hash: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  role: { type: String, enum: ['customer', 'merchant'], default: 'customer' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


const User = mongoose.model('User', userSchema);
module.exports = User;
