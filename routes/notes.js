const express = require('express')
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

//get route for retrieving notes
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request for notes`)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//post route for posting a new notes
notes.post('/api/notes', (req, res) => {
    console.info(`${req.method} request for to add a note`);
    console.log(req.body);

})