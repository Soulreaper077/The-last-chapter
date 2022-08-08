const router = require('express').Router();
const sequelize = require('../../config/Connection');
const { Book, User, Wishlist } = require('../models');
const withAuth = require('../utils/auth');

// get all of the wishlist books for the user 
router.get('/', withAuth, (req, res) => {
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
                attributes: ['username']
            },
        ],
    })
    .then(dbWishData => res.json(dbWishData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.get('/:id', withAuth, (req, res) => {
    Wishlist.findOne({
        where: {
            id: req.params.id
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
                attibutes: ['username']
            },
        ],
    })
    .then(dbWishData => {
        if (!dbWishData) {
            res.status(404).json({ message: 'No wishlist with this id in play'});
            return; 
        }
        res.json(dbWishData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    console.log(req.session);
    Wishlist.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id
    })
    .then(dbWishData => res.json(dbWishData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.put('/:id', (req, res) => {
    Wishlist.update(
        {
            title: req.body.title,
            description: req.body.description,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbWishData => {
        if (!dbWishData) {
            res.status(404).json({ message: 'No wishlist found with this id'});
            return; 
        }
        res.json(dbWishData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
    });
});

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Wishlist.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbWishData => {
        if (!dbWishData) { 
        res.status(404).json({ message: 'no post with this id'});
        return; 
        }
        res.json(dbWishData); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router; 