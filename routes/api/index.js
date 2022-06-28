const router = require('express').Router();
const userRoutes = require('./user-routes');
const reactionRoutes = require('./reaction-routes');
const thoughtRoutes = require('./thought-routes');

router.use('./user', userRoutes);
router.use('./reaction', reactionRoutes);
router.use('thought', thoughtRoutes);

module.exports = router;