/*module.exports = function (sequelize, DataTypes) {
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

  module.exports = Wishlist;*/

  const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Connection');

class Wishlist extends Model {}

Wishlist.init ({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'wishlist'
})

module.exports = Wishlist;