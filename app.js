console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var res = notes.addNote();
console.log(res); 

var add = notes.add(2,5);

console.log(add);

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `hello ${user.username}! your are ${notes.age}`);