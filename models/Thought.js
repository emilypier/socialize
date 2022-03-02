const { Schema, model, Types } = require('mongoose');
const { stringify } = require('querystring');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema (
  {
    thoughtTest: {
      type: String,
      required: true,
      //must be between 1-280 characters
    },  
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ReactionSchema = new Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: stringify,
      required: true,
      //280 characters max
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
)