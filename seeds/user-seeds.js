const { User } = require('../models');

const userdata = [
    {
        username:"rando1",
        email: "rando1@gmail.com",
        password: "password123"
    },{
        username:"Rando2",
        email: "Rando2@gmail.com",
        password: "password123"
    },{
        username:"rand0",
        email: "rand0@gmail.com",
        password: "password123"
    },{
        username:"rand3",
        email: "rand3@gmail.com",
        password: "password123"
    },{
        username:"random5",
        email: "random5@gmail.com",
        password: "password123"
    },{
        username:"ransom12",
        email: "ransom12@gmail.com",
        password: "password123"
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers