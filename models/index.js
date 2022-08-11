const Book = require("./book");
const user = require("./user");
const wishlist = require("./wishlist");
const sequelize = require("../config/Connection");

module.exports = {
  Book,
  user,
  wishlist,
};
