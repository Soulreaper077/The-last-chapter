const seedBooks = require("./book-seeds");
const seedUsers = require("./user-seeds");
const seedWishlist = require("./wishlist-seeds")
const sequelize = require("../config/connection");


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedBooks();
  console.log("\n----- BOOKS SEEDED -----\n");
  await seedUsers(); 
  console.log("\n----- USERS SEEDED -----/n")
  await seedWishlist();
  console.log("/n------ WISHLIST SEEDED -------/n")
};

seedAll();