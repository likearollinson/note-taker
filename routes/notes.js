const notes = require('express').Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


//get route for retrieving notes
notes.get('/notes', (req, res) => {
    console.info(`${req.method} request for notes`)
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//post route for posting a new notes
notes.post('/notes', (req, res) => {
    console.info(`${req.method} request for to add a note`);
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.error('Error in adding note');
    }
});

// delete route for deleting notes
notes.delete('/notes/:note_id', (req, res) => {
    console.info(`${req.method} request to delete a note`);
    console.log(req.params);
    readAndDelete(req.params.note_id, './db/db.json');
});


module.exports = notes;