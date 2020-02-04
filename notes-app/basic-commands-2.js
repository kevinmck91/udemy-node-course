/******  
    Installing a global module means it can be used from the command line
    It doesnt need to be imported into a specific project henc the json files are not updated
    sudo npm install nodemon@1.18.5 -g
    nodemon - Runs automatically each time a page is saved. 

    Using nodes "Process" we can use all the command line argumets passed into our app
 ******/

console.log("\n ** Part 1 ** \n");
console.log("Process.arg0 : " + process.argv[0]);
console.log("Process.arg1 : " + process.argv[1]);
console.log("Process.arg2 : " + process.argv[2]);




// ** Compare the yargs plugin with the the process built in app
console.log("\n ** Part 2 ** \n");

const yargs1 = require('yargs').argv; 

console.log("process.argv : " + process.argv);
console.log("yargs.argv : " + yargs1.argv);

// inputs can be created via flags 
// "--title='This is the tile of my app'"
// "--input='This is an input string'"
console.log("yargs.title : " + yargs1.title);
console.log("yargs.input : " + yargs1.input);



console.log("\n ** Part 3 ** \n");

// We can create much more verbose input flags
const yargs2 = require('yargs');

yargs2.command({
    command: 'alter',
    describe: 'Edit or alter some existing data',
    handler: function(){
        console.log("You have used the --alter flag");
    }
}).parse();

yargs2.command({
    command: 'print-even-numbers',
    describe: 'Print numbers 1 to 10',
    handler: function(){
        for(var i = 0; i < 10; i++){
            if(i % 2 == 0){ console.log(i); }
        }
    }
}).argv;


