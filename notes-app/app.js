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
    handler : (argv) => notesUtilities.addNote(argv.title, argv.body)
})

yargs.command({
    command : "remove",
    describe : "Remove a task from the list",
    builder : {     // this defines the rules of the available inputs input
        title : {
            describe : "Note Title to be Removed",
            type : 'string'
        },
    },
    handler (argv) { notesUtilities.removeNote(argv.title) }
})

yargs.command({
    command : "update",
    describe : "Update a task from the list",
    builder : {
        title : {
            describe : "Title of note to be updated",
            type : 'string',
            demandOption : false,
        },
        body : {
            describe : "body of note to be updated",
            type : 'string',
            demandOption : false,
        },
    },
    handler (argv) { notesUtilities.updateNote(argv.title, argv.body) }
})

yargs.command({
    command : "list",
    describe : "List the title of all the notes",
    handler (){ notesUtilities.listNotes() }
})

yargs.command({
    command : "read",
    describe : "Output the list to be read",
    builder : {
        title : {
            describe : "Note Title to be read",
            type : 'string'
        },
    },
    handler (argv) { notesUtilities.readNote(argv.title) }
})

yargs.parse();