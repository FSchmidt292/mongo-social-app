const {
    addThought,
    getAllThought
  } = require('../../controllers/thought-controller');
  const router = require('express').Router();
  
  router
    .route('/')
    .post(addThought);

module.exports = router;