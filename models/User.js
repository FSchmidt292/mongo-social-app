const {
    Schema,
    model
} = require ('mongoose');

const UserSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        Type: String,
        required: true,
        unique: true,
        // validate email address
    },
    thoughts: 
        []
    ,
    friends: []
});

module.exports = User;