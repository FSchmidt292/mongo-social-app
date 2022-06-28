const { User, Thought, Reaction } = require('../models');

const reactionController = {
    createReaction({ params, body }, res) {
        console.log(params)
        Reaction.create(body)
      }
};

module.exports = reactionController;