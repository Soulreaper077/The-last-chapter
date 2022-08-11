// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Compress
var compression = require("compression");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// compress all responses
app.use(compression());

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 
// Static directory
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./controllers/html-routes")(app);
require("./controllers/user-api-routes")(app);
require("./controllers/book-api-routes")(app);
require("./controllers/wishlist-routes")(app);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
});