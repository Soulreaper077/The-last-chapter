const router = require('express').Router();

const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');
const wishlistRoutes = require('./wishlist-routes.js');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('.wishlist', wishlistRoutes);

module.exports = router; 