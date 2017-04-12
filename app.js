const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        };

const bodyOptions = {
            describe: 'Content of your note',
            demand: true,
            alias: 'b'
        };

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Reads selected note',{
        title: titleOptions
    })
    .command('remove', 'Remove selected note', {
        title: titleOptions
    })
    .help()
    .argv;
command = argv._[0];


var logNote = (note)=> 
    console.log('--------');
    console.log(`Title:  ${note.title}`);
    console.log(`Body:  ${note.body}`);
}

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('added note!');
        logNote(note);
    }  else {
        console.log('note already exists');
    }
} else if (command === 'list') {
    var noteList = notes.getAll();
    console.log('Your Notes')
    for (var i=0; i < noteList.length; i++) {
        console.log('-----');
        console.log('')
        console.log(`Note: ${i+1}`);
        console.log(`Title:  ${noteList[i].title}`);
        console.log('')

    }
} else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found!');
        logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove'){
    var noteRemoved = notes.remove(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message); 
} else {
    console.log('Command not found'); 
}
