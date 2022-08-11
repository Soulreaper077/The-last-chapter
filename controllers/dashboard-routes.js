const router = require('express').Router();
const sequelize = require('../config/Connection');
const User = require('../models/user');
const Wishlist = require ('../models/wishlist')
const withAuth = require('../utils/auth');

// get all of the wishlist books for the user 
router.get('/', withAuth, (req, res) => {
    Wishlist.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'description',
            'posted_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ],
    })
    .then(dbWishData => {
        const wishes = dbWishData.map(wish => wish.get({ plain: true }));
        res.render('wishlist', { wishes, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Wishlist.findByPk(req.params.id, {
        attributes: [
            'id',
            'title',
            'description',
            'posted_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
    .then(dbWishData => {
        if (dbWishData) {
            const wish = dbWishData.get({ plain: true });

            res.render('edit-wishlist', {
                wish,
                loggedIn: true
            });
        } else {
            res.status(400).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.get('/new', (req, res) => {
    res.render('new-wishlsit');
});

module.exports = router; 