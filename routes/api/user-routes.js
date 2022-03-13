const router = require('express').Router();

// destructuring the method names out of the imported object
const {
  createUser, 
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend 
} = require('../../controllers/user-controller');

// set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// set up GET one, PUT, and DELETE at /api/users/:userId
router
  .route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

// set up POST and DELETE at /:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;