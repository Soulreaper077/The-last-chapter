/*"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/Connection.js")[env];
const db = {};

//let sequelize;
//if (config.use_env_variable) {
 // sequelize = new Sequelize(process.env[config.use_env_variable], config);
//} else {
  //sequelize = new Sequelize(
   // config.database,
   // config.username,
   // config.password,
   // config
 // );
//}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  //.forEach((file) => {
   // const model = require(path.join(__dirname, file))(
    //  sequelize,
    //  Sequelize.DataTypes
  //  );
   // db[model.name] = model;
 // });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;*/

const User = require('./user');
const Book = require('./book');
const Wishlist = require('./wishlist');

User.hasOne(Wishlist, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Wishlist.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade'"
});

Book.belongsTo(Wishlist, {
  foreignKey: 'wishlist_id',
  onDelete: 'cascade'
});

Wishlist.hasMany(Book, {
  foreignKey: 'wishlist_id',
  onDelete: 'cascade'
});

module.exports = {
  User,
  Book,
  Wishlist
}