const express = require('express');
const routes = require('./routes');
// import sequelize connection
// const seeds = require('./seeds/index');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
