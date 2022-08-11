//Requiring our models
  db = require(".");

module.exports = function (sequelize, DataTypes) {
  const Wishlist = sequelize.define("Wishlist", {
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

  return Wishlist;
}; 
