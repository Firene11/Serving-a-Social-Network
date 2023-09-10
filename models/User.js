const { Schema, model } = require('mongoose');

//User - username, String, Unique, Required, Trimmed
const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
      },
//email - String, Required, Unique
//Must match a valid email address (look into Mongoose's matching validation)
      email: {
        type: String,
        unique: true,
        required: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please enter a valid email address.',
        ],
      },
//thoughts - Array of _id values referencing the Thought model
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
//friends - Array of _id values referencing the User model (self-reference) Schema Settings
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },
      ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  //Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
  userSchema.virtual('friendCount').get(function () {
    return this.friends ? this.friends.length : 0;
  });
  
  const User = model('user', userSchema);
  
  module.exports = User;