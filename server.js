'use strict';

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dinoJson = require('./dinosaurs.json');

// Variables
const app = express();
const allDinos = dinoJson.map(dino => {
  return {
    id: dino.id,
    name: dino.name
  };
});

// Set up Express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// GET Routes

app.get('/api/dinosaurs', (req, res) => {
  res.json(allDinos);
});

app.get('/api/dinosaur/:id', (req,res) =>{
  const id = req.params.id * 1;
  const thisDino = dinoJson.find(dino => dino.id === id);
  res.json(thisDino);
});

//---- Serve
app.listen(3001);
console.log('Listening on localhost:3001');
