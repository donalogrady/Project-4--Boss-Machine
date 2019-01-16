const express = require('express');
const apiRouter = express.Router();
const app = express();

//import functions from database file
const { db,findDataArrayByName, getAllFromDatabase, getFromDatabaseById, addToDatabase,
  updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } = require('./db.js');

//GET /api/minions to get an array of all minions.
app.get('/api/minions', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

//POST /api/minions to create a new minion and save it to the database.
app.post('/api/minions', (req, res, next) => {
  const receivedMinion = addToDatabase('minions', req.query);
  if (receivedMinion) {
    db.push(receivedMinion);
    res.status(201).send(receivedMinion);
  } else {
    res.status(400).send();
  }
});

//GET /api/minions/:minionId to get a single minion by id.
app.get('/api/minions/:minionId', (req, res, next) => {
  const foundMinions = getFromDatabaseById(req.params.id, db);
  if (foundMinions) {
    res.send(foundMinions);
  } else {
    res.status(404).send();
  }
});

//PUT /api/minions/:minionId to update a single minion by id.
app.put('/api/minions/:minionId', (req, res, next) => {
  const minionsIndex = getIndexById(req.params.id, expressions);
  if (minionsIndex !== -1) {
    updateInstanceInDatabase(req.params.id, req.query, expressions);
    res.send(expressions[minionsIndex]);
  } else {
    res.status(404).send();
  }
});

//DELETE /api/minions/:minionId to delete a single minion by id.
app.delete('/api/minions/:minionId', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = apiRouter;
