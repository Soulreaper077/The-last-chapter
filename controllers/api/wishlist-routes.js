const router = require('express').Router();
const sequelize = require('../../config/Connection');
const { Book, User } = require('../models');
const withAuth = require('../utils/auth');

// get all of the wishlist books for the user 
router.get('/', withAuth, (req, res) => {
    Book.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'title',
            'subtitle',
            'authors',
            'categories',
            'thumbnail',
            'description',
            'published_year',
            'average_rating',
            'num_pages',
            'rating_count',
            'price',
            'createdAt',
            'updatedAt',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ],
    })
    .then(dbBookData => {
        const books = dbBookData.map(post => post.get({ plain: true }));
        res.render('wishlist', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Book.findByPk(req.params.id, {
        attributes: [
            'title',
            'subtitle',
            'authors',
            'categories',
            'thumbnail',
            'description',
            'published_year',
            'average_rating',
            'num_pages',
            'rating_count',
            'price',
            'createdAt',
            'updatedAt',
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
    .then(dbBookData => {
        if (dbBookData) {
            const book = dbBookData.get({ plain: true });

            res.render('edit-book', {
                book,
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
    res.render('new-book');
});

module.exports = router; 