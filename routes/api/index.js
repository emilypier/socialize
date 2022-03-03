const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes); // adds prefix of `/thoughts` to routes created in `thought-routes.js`
router.use('/users', userRoutes);  // adds prefix of `/users` to routes created in `user-routes.js`

module.exports = router;