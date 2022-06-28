const { User, Thought, Reaction } = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
      console.log(params)
      Thought.create(body)
    }
};

module.exports = thoughtController