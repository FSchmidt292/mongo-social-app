const {
    addThought,
    getAllThought,
    getThoughtById
  } = require('../../controllers/thought-controller');
  const router = require('express').Router();
  
  router
    .route('/')
    .post(addThought)
    .get(getAllThought);
  
  router
    .route('/:id')
    .get(getThoughtById);

module.exports = router;