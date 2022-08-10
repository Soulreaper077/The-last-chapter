module.exports = function (sequelize, DataTypes) {
    var Wishlist = sequelize.define("Wishlist", {
      // total: DataTypes.DECIMAL(10,2),
      date: DataTypes.DATE,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    });
  
    Wishlist.associate = function (models) {
      Wishlist.belongsTo(models.User, {
        foreignKey: {
          // ??
          allowNull: false,
        },
      });
      Wishlist.belongsToMany(models.Book, { through: "Wishlist_Book" });
    };
  
    return Wishlist;
  };