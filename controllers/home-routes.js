const router = require('express').Router();
const sequelize = require('../config/Connection');
const { Book, User, Wishlist } = require('../models');

// or Get wishlist / post by user to display to homepage 
router.get('/', (req, res) => {
    res.render('homepage'); 
});
    

router.get('/login', (req, res) => {
    console.log(req.session);
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
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

router.get('/library', (req, res) => {
    Book.findAll({
        attributes: [
            'id',
            'title',
            'thumbnail'
        ]
    })
    .then(dbLibData => {
        const books = dbLibData.map(book => book.get({
            plain: true
        }));

        res.render('library', {
            books
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router; 