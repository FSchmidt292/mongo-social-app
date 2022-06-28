const {
    Schema,
    model
} = require ('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: {
          type: Schema.Types.objectId,
         // default: set to a new objectId
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
  )