const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    friend: {
      type: String,
      required: true,
    },
    personality: {
      type: String,
      required: true,
    }
  }
);

const User = model('User', userSchema);

module.exports = User;
