// Requiring our models
var db = require("../models");

module.exports = function (sequelize, DataTypes) {
  const Wishlist_Book = sequelize.define("Wishlist_Book", {
    WishlistId: {
      type: DataTypes.INTEGER,
      references: {
        model: db.WishlistId,
        key: "id",
      },
    },
    BookId: {
      type: DataTypes.INTEGER,
      references: {
        model: db.Book,
        key: "id",
      },
      // defaultValue: 0
    },
  });

  return Wishlist_Book;
};
