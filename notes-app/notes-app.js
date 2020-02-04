const chalk = require('chalk');
const yargs = require('yargs');


yargs.command({
    command : "add",
    describe : "add a new task to the list",
    handler : function(){
        console.log("Adding to the list")
    }
}).parse();

yargs.command({
    command : "remove",
    describe : "Remove a task from the list",
    handler : function(){
        console.log("Removing from the list")
    }
}).parse();

yargs.command({
    command : "read",
    describe : "Output the list to be read",
    handler : function(){
        console.log("Displaying the list")
    }
}).parse();

