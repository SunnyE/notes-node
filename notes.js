console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    // array of notes
    var notes = [];
    
    var note = {
        title,
        body
    };

    try {
        // read the notes from data so new note can be appended before adding new
        var notesString = fs.readFileSync('notes-data.json');

        // parse the json string
        var notes = JSON.parse(notesString);
    } catch (e) {

    }

    

    // adding note to the array
    notes.push(note);

    fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting Note: ', title);
};

var remove = (title) => {
    console.log('Removing Note: ', title)
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
}
