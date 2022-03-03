const router = require('express').Router();

// destructuring the method names out of the imported object
const {createUser, getAllUsers, getOneUser, updateUser, deleteUser } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:userId
router
  .route('/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);


  router
    .route('/:userId/friends/:friendId')
    .post()
    .delete();


module.exports = router;