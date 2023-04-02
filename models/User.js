const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');
const reactionSchema = require('./Reaction')

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //mongoose validator for email
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
