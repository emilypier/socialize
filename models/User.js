const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      //mongoose matching validation
    },
    thoughts: [
      {
        // ref tells User model which documents to search to find the right thoughts.
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        // ref tells User model which documents to search to find the right friends.
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of friends  on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User =  model('User', UserSchema);

module.exports = User