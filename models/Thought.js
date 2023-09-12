const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
// reactionId - Use Mongoose's ObjectId data type, Default value is set to a new ObjectId
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
// reactionBody - String, Required, 280 character maximum
  reactionBody: {
    type: String,
    required: true,
    max: [280, 'Do not exceed 280 characters!'],
  },
//username - String, Required
  username: {
    type: String,
    required: true,
    ref: 'user',
  },
// createdAt -Date, Set default value to the current timestamp, Use a getter method to format the timestamp on query
  createdAt: {
    get: { type: Date, default: Date.now },
  },
});



const thoughtSchema = new Schema(
    {
// thoughtText - String, Required, Must be between 1 and 280 characters
      thoughtText: {
        type: String,
        required: true,
        max: [280, 'Do not exceed 280 characters!'],
        min: [1, 'Cannot be blank!'],
      },
// createdAt - Date, Set default value to the current timestamp
// Use a getter method to format the timestamp on query
      createdAt: {
        get: { type: Date, default: Date.now },
      },
// username (The user that created this thought) -String, Required
      username: {
        type: String,
        required: true,
        ref: 'user',
      },
// reactions - Array of nested documents created with the reactionSchema
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );


//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
  const Thought = model('thought', thoughtSchema);


module.exports = Thought;

/*
Schema Settings
This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.*/