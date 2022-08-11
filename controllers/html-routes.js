// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

var db = require('../models');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function (req, res) {
    res.render('homepage')
  });

  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/home");
    } else {
      res.render("login", { js: ["login.js"] });
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/views/home.html"));
    res.render("home", { js: ["home.js"] });
  });

  // browse route loads browse.html
  app.get("/browse", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/views/browse.html"));
    res.render("browse", { js: ["books.js"] });
  });

  // wishlist route loads wishlist.html
  app.get("/cart", isAuthenticated, function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/views/cart.html"));
    res.render("cart", { js: ["wishlist.js"] });
  });


app.get("/library", function(req, res) {
  db.Book.findAll({})
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



app.get("/book/:id", function(req, res) {
  db.Book.findOne({
    where: {
      id: req.params.id,
    }
  })
  .then(dbBook => { const book = dbBook.get({
    plain: true
});

  res.render('single-book', {
    book
  });
})
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
});
    
})

};