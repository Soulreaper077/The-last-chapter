const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const wishlistRoutes = require('./wishlist-routes.js');

router.use('/', homeRoutes);
router.use('.wishlist', wishlistRoutes);
router.use('/api', apiRoutes);

module.exports = router;