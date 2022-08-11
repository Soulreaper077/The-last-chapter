const path = require('path');
const express = require('express');
const session = require('express-session');
const exphs = require('express-handlebars');
const sequelize = require('./config/Connection');

const app = express();
const PORT = process.env.PORT || 3001; 

const helpers = require('./utils/helpers');
const hbs = exphs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log( `Now listening on ${PORT}`));
});