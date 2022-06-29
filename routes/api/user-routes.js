const {
  createUser,
  getAllUser
} = require('../../controllers/user-controller');
const router = require('express').Router();

router
  .route('/')
  .post(createUser);

  module.exports = router;