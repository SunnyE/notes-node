console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
command = argv._[0];
console.log('Command: ', command); 
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('added note!');
        console.log('-----');
        console.log(`Title:  ${note.title}`);
        console.log(`Body:  ${note.body}`);
    }  else {
        console.log('note already exists');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'remove'){
    // var note = notes.remove(argv.title);
    notes.remove(argv.title);
} else {
    console.log('Command not found'); 
}
