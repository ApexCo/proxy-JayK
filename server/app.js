const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./api');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => res.redirect('/1'));
app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use('/api', api);

module.exports = app;
