const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');


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
          ref: 'thought',
        },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
    ],
  },
  {
    toJSON: {
      vitual: true,
    },
  }
);
//virtial that retrieves the length of the user's friends array field on query
postSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;
