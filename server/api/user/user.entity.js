var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, },
  password: { type: String, required: true, },
  status: { type: String, default: 'active' },
  active: { type: Boolean, default: true },
  lastLoginOn: { type: Date, default: Date.now },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
}, {
    collection: 'users'
  });

module.exports = mongoose.model('users', userSchema);
