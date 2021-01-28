const compression = require('compression');
const express = require('express');
const path = require('path');

const api = require('./api');

const app = express();
const port = 3000;

app.use(compression());

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/:id/main', express.static(path.join(__dirname, '../public/main.html')));
app.use('/api', api);

app.listen(port);
