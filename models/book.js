/*module.exports = function (sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    authors: DataTypes.STRING,
    categories: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.TEXT,
    published_year: DataTypes.INTEGER,
    average_rating: DataTypes.DECIMAL,
    num_pages: DataTypes.INTEGER,
    ratings_count: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  });

  return Book;
};*/

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Book extends Model {}

Book.init ({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title:{
    type: DataTypes.STRING
  },
  subtitle:{
    type: DataTypes.STRING
  },
  authors: {
    type: DataTypes.STRING
  },
  categories: {
    type: DataTypes.STRING
  },
  thumbnail: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  published_year: {
    type: DataTypes.INTEGER
  },
  average_rating: {
    type: DataTypes.DECIMAL
  },
  page_count: {
    type: DataTypes.INTEGER
  },
  ratings_count: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.DECIMAL
  },
  wishlist_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'wishlist',
      key: 'id'
    }
  }
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'book'
})

module.exports = Book;