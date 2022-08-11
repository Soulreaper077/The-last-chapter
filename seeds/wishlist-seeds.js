const Wishlist = require('../models/wishlist');

const wishlistdata = [
  {
    title: 'Test Post',
    description: 'this is just a test testing testing ',
    user_id: 10
  },
  {
    title: 'yo',
    description: 'yo yo yo ',
    user_id: 8
  },
  {
    title: 'Oi ',
    description: 'oi Oi oi',
    user_id: 1
  },
  {
    title: 'yada yada yada',
    description: 'something something somehting ',
    user_id: 4
  },
  {
    title: 'code',
    description: 'coding can be fun ',
    user_id: 7
  },
  {
    title: 'sklfjsalkfjd',
    description: 'skdfksajfsalkfjalkfjalfjakfjakfjakjflakjfjirowieoiwoiruowei',
    user_id: 4
  },
  {
    title: 'title',
    description: 'this is a post',
    user_id: 1
  },
  {
    title: 'what',
    description: 'is up my man!!!',
    user_id: 1
  },
  
];

const seedWishlist = () => Wishlist.bulkCreate(wishlistdata);

module.exports = seedWishlist;