const { Wishlist } = require('../models');

const wishlistData = [
    {
        title: "my list",
        user_id: 1
    },
    {
        title: "his list",
        user_id: 2
    },
    {
        title: "her list",
        user_id: 3
    },
    {
        title: "their list",
        user_id: 4
    },{
        title: "Magic list",
        user_id: 5
    },{
        title: "Magic list",
        user_id: 6
    }
];

const seedWishlists = () => Wishlist.bulkCreate(wishlistData);

module.exports = seedWishlists;