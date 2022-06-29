const {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../../controllers/user-controller');
const router = require('express').Router();

router
  .route('/')
  .post(createUser)
  .get(getAllUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

  module.exports = router;