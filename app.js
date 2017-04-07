console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
command = process.argv[2];
console.log('Command: ', command); 
console.log('Process', process.argv);
console.log('yargs', argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read'){
    console.log('Reading notes')
} else if (command === 'remove'){
    console.log(console.log('Removing notes'));
} else {
    console.log('Command not found'); 
}
