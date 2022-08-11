const {Model, DataTypes } = require('sequelize'); 
const sequelize = require('../config/Connection'); 

class Book extends Model {}; 

    Book.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: true, 
        },
        title: { 
          type: DataTypes.STRING,
          allowNull: false, 
        },
    subtitle:{
      type: DataTypes.STRING,
    },
    authors: {
      type: DataTypes.STRING,
    },
    categories: {
      type: DataTypes.STRING,
    },
    thumbnail: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published_year: {
      type: DataTypes.INTEGER,
    },
    average_rating: {
      type: DataTypes.DECIMAL,
    },
    num_pages: {
      type: DataTypes.INTEGER,
    },
    ratings_count: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book'
  });

  module.exports = Book; 
      
    
    



