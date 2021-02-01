const express = require('express');
const { get } = require('axios');

const api = express.Router();

api.get('/galleries/:id', (req, res) => {
  get(`http://13.52.246.93:8080/api/galleries/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
});

api.get('/checkout/:id', (req, res) => {
  get(`http://34.219.249.230:8080/api/checkout/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
});

api.get('/reviews/:id', (req, res) => {
  get(`http://54.215.215.126:8080/api/reviews/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
});

api.get('/img_carousel/:id', (req, res) => {
  get(`http://13.56.115.246:8080/api/img_carousel/${req.params.id}`)
    .then(({data}) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
});

module.exports = api;
