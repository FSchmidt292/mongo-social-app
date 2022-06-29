const { User, Thought } = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
      console.log(params)
      Thought.create(body)
    },
    getAllThought({ params, body }, res) {
      console.log(params)
      Thought.get(body)
    }
};

module.exports = thoughtController;