const { User, Thought } = require('../models');

const thoughtController = {
    addThought({ params, body }, res) {
      Thought.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
    getThoughtById({ params }, res) {
      Thought.findOne({ _id: params.id })
      // populate reactions
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    },
    getAllThought(req, res) {
      Thought.find({})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
    }
};

module.exports = thoughtController;