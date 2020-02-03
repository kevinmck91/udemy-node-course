
// We will load up the FileSystem Module
// The fs module is already a part of node (as is console.log)

const fs = require('fs');


// If the file exists, it will be overwritten
fs.writeFileSync('output.txt', 'This file was created by Node2');
fs.appendFileSync('output.txt' , '\n\n This text was appended')




// Importing another file into our app

console.log("\n ** Part 1 \n");

require('./utils1.js');
console.log("Printing the Require Statement : " + require('./utils1.js'));

const name = "Mike";

var importedName = require('./utils1.js');
console.log("importedName : " + importedName);
console.log(name);




// Importing a function into our app

console.log("\n ** Part 2 ** \n");
const myFunction = require('./utils2.js');
const sum = myFunction(4 , -2)
console.log(sum);

console.log("\n ** Part 3 ** \n");
const getMyNotes = require('./utils3.js');
console.log(getMyNotes);

/*  There are 3 types of require
    1. require('fs'); - part of the node infrastructure
    2. require('./utils'); - importing our own creation
    3. require('validator') - after init and downloading it
 */



// Importing an NPM module app
// Firstly init npm in the root app folder (this creates the json)
// Find a package to use on the NPM site
// install the package in the root directory
// If the node-modules folder is deleted, 'node install' reads the json files and recreates them


console.log("\n ** Part 4 ** \n");

const myValidator = require('validator');
console.log("isEmail:test@test.com : " + myValidator.isEmail("test@test.com"));
console.log("isEmail:com.test@test : " + myValidator.isEmail("com.test@test"));
console.log("isURL : " + myValidator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#questions/8522936'))


console.log("\n ** Part 4 ** \n");

const myChalk = require('chalk');

const error = myChalk.bold.red;
const warning = myChalk.keyword('orange');
const success = myChalk.green;
const info = myChalk.blue;
const normal = myChalk.white;
 
console.log(error('Error!'));
console.log(warning('Warning!'));
console.log(info('Please note..'));
console.log(success('Success'));
console.log('Output');


