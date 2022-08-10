const seedBooks = require("./book-seeds");

const sequelize = require("../../The-last-chapter-develop/config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedBooks();
  console.log("\n----- BOOKS SEEDED -----\n");
};

seedAll;
