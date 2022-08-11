const router = require('express').Router();
const sequelize = require('../../config/Connection');
const Book = require('../../models/book'); 
const withAuth = require('../../utils/auth'); 

// getting all of the books to display to the homepage? 
router.get('/', (req, res) => {
    Book.findAll({
        attributes: [
            'id',
            'title',
            'subtitle',
            'authors',
            'categories',
            'thumbnail',
            'description',
            'published_year',
            'average_rating',
            'num_pages',
            'ratings_count',
            'price',
        ],
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true }));

        res.render('homepage', {
            books,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a single book ? 

router.get('/book/:id', (req, res) => {
    Book.findOne({
        where: {
            id: req.params.id
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
            'ratings_count',
            'price',
        ],
    })
    .then(dbBookData => {
        if (!dbBookData) {
            res.status(404).json({ message: 'No book with this id found'});
            return; 
        }

        const book = dbBookData.get({ plain: true });

        res.render('single-book', {
            book,
            loggedIn: req.session.loggedIn
        });
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get a book by the category ? 
router.get('/book/category', (req, res) => {
    Book.findAll({
        attibutes: [ 'categories' ],
    })
    .then(dbBookData => {
        const books = dbBookData.map(book => book.get({ plain: true}));

        res.render('homepage', {
            books,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router; 
