// Requiring our models
var db = require("../models");

module.exports = function (sequelize, DataTypes) {
  const Wishlist_Book = sequelize.define("Wishlist_Book", {
    WishlistId: {
      type: DataTypes.INTEGER,
      references: {
        model: db.Wishlist,
        key: "id",
      },
    },
    BookId: {
      type: DataTypes.INTEGER,
      references: {
        model: db.Book,
        key: "id",
      },
    },
  });

  return Wishlist_Book;
};
