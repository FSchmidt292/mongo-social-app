const {
    Schema,
    model
} = require ('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280 
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // use a getter method to format the timestamp on query      
    },
    username: {
      type: String,
      required: true
    },
    reactions: []
  }
)