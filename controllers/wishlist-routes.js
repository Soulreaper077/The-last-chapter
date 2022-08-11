// *********************************************************************************
// Wishlist-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  console.log("In wishlist-api-routes.js");
  // console.log("db.Wishlist: ", db.Wishlist);

  // GET route for getting all of the wishlist
  app.get("/api/wishlists", function (req, res) {
    db.Wishlist.findAll({
      include: [db.Book],
    }).then(function (dbWishlist) {
      console.log("In .get /api/wishlist - findAll()");
      console.log("req.body: ", req.body);
      console.log("dbWishlist: ", dbWishlist);
      res.json(dbWishlist);
    });
  });

  // Get route for retrieving a single Wishlist for a Userid
  app.get("/api/wishlists/:UserId", function (req, res) {
    db.Wishlist.findAll({
      where: {
        UserId: req.params.UserId,
      },
      include: [db.Book],
    }).then(function (dbWishlist) {
      console.log("In .get /api/wishlist/:UserId - findAll()");
      console.log("req.params.UserId: ", req.params.UserId);
      console.log("dbWishlist: ", dbWishlist);
      res.json(dbWishlist);
    });
  });

  /* 
      // Get route for retrieving a single category
      app.get("/api/Wishlist/category/:category", function(req, res) {
        db.Wishlist.findAll({
          where: {
            categories: req.params.category
          },
          // include: [db.Author]
        }).then(function (dbWishlist) {
          console.log('In .get /api/Wishlists/:category - findAll()');
          console.log('req.params.category: ', req.params.category);
          console.log('dbWishlist: ', dbWishlist);
          res.json(dbWishlist);
        });
      });
     */

  // POST route for saving a new wishlist
  app.post("/api/wishlists", function (req, res) {
    db.Wishlist.create({
      UserId: req.body.UserId,
      BookId: req.body.BookId,
      // total: req.body.total,
      date: new Date(),
    }).then(function (dbWishlist) {
      console.log("In .POST /api/wishlist - create()");
      console.log("req.body: ", req.body);
      console.log("dbWishlist: ", dbWishlist);
      // res.json(dbWishlist);

      // Also insert into the intermediary table
      db.Wishlist_Book.create({
        WishlistId: dbWishlist.id,
        BookId: req.body.BookId,
      }).then(function (dbWishlist_Book) {
        console.log("In .POST /api/wishlist - create() - Wishlist_Book");
        console.log("req.body: ", req.body);
        console.log("dbWishlist_Book: ", dbWishlist_Book);
        res.json(dbWishlist_Book);
      });
    });
  });

  // DELETE route for deleting a Wishlist
  app.delete("/api/wishlists/:UserId", function (req, res) {
    db.Wishlist.destroy({
      where: {
        UserId: req.params.UserId,
      },
    }).then(function (dbWishlist) {
      console.log("In .DELETE /api/wishlists - destroy()");
      console.log("req.params.UserId: ", req.params.UserId);
      console.log("dbWishlist: ", dbWishlist);
      res.json(dbWishlist);
    });
  });

  // PUT route for updating posts
  app.put("/api/wishlists", function (req, res) {
    db.Wishlist.update(req.body, {
      where: {
        UserId: req.body.UserId,
      },
    }).then(function (dbWishlist) {
      console.log("In .PUT /api/wishlists - update()");
      console.log("req.body.UserId: ", req.body.UserId);
      console.log("dbWishlist: ", dbWishlist);
      res.json(dbWishlist);
    });
  });
};
