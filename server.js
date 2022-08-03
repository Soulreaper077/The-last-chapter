const path = require('path');
const express = require('express');
const session = require('express-session');
const exphs = require('express-handlebars');
const sequelize = require('./config/Connection');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log( `Now listening on ${PORT}`));
});