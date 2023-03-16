const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// turn on connection to db and server
db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
    });