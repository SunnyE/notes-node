console.log('starting notes.js');

var addNote = (title, body) => {
    console.log('Adding Note', title, body);

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
