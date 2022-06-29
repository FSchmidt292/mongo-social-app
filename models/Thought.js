const {
    Schema,
    model
} = require ('mongoose');

const ReactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280      
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
      //getter method to format the timestamp on query.
    }
  }
);


const ThoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280 
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
  }
);



const Thought = model('Thought', ThoughtSchema);

module.exports = Thought