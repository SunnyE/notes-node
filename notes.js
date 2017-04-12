const fs = require('fs');

var fetchNotes = () => {
    try {
        // read the notes from data so new note can be appended before adding new
        var notesString = fs.readFileSync('notes-data.json');

        // returning the parsed json string
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) { 
        // adding note to the array
        notes.push(note);
        saveNotes(notes);

        return note;
    }
    
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();

    var note = {
        title
    };

    var filteredNotes = notes.filter((note) => note.title === title);

    // console.log(filteredNotes[0]); 

    return filteredNotes[0]; 


};

var remove = (title) => {
    var notes = fetchNotes(); 
    var note  = {
        title
    }
    var filteredNotes = notes.filter((note) => note.title !== title);

    saveNotes(filteredNotes); 

    return notes.length !== filteredNotes.length;

    
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
}
