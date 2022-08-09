const router = require('express').Router();
const sequelize = require('../config/Connection');
const { Book, User, Wishlist } = require('../models');

// or Get wishlist / post by user to display to homepage 
router.get('/', (req, res) => {
    console.log( ' getting the wishlist for all of the users');
    Wishlist.findAll({
        attributes: [
            'id',
            'title',
            'description',
            'posted_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username'],
            },
        ]
    })
    .then(dbWishData => {
        const wishes = dbWishData.map(wish => wish.get({ plain: true }));

        res.render('homepage', {
            wishes,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return; 
    }

    res.render('login'); 
});

// get the wishlist books for the user and display them here 

router.get('/wishlist/:id', (req, res) => {
    Wishlist.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'description',
            'posted_at',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbWishData => {
        if (!dbWishData) {
            res.status(404).json({ message: 'No book with this id found'});
            return; 
        }

        const wish = dbWishData.get({ plain: true });

        res.render('single-wish', {
            wish,
            loggedIn: req.session.loggedIn
        });
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router; 