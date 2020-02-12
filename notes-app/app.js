const chalk = require('chalk');
const yargs = require('yargs');
const notesUtilities = require('./notes.js')


yargs.command({
    command : "add",
    describe : "Create a new list",
    builder : {     // this defines the rules of the available inputs input
        title : {
            describe : "Note Title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : "Note Title",
            demandOption : false,
            type : 'string'
        }
    },
    handler : function(argv){
        notesUtilities.addNote(argv.title, argv.body); 
    }
})

yargs.command({
    command : "remove",
    describe : "Remove a task from the list",
    builder : {
        title : {
            describe : "Note Title to be Removed",
            type : 'string'
        },
    },
    handler : function(argv){
        notesUtilities.removeNote(argv.title);
    }
})

yargs.command({
    command : "read",
    describe : "Output the list to be read",
    handler : function(){
        console.log("Displaying the list")
    }
})

yargs.parse();

