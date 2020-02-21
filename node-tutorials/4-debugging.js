
/******  
    Debugging
    Debugging is done through Chrome.

    To start the debugger, add 'inspect' to the command 'node inspect app.js list'
    This publishes the app to an localhost address that can be accessed on chrome by going to chrome://inspect
    The application can be found under the Remote Target 
    Insepcting the remote opens the app in the developer console and it stops at the first line, and then at wherever 'debugger' is found in the code
    You can also access elements via javascript in the console
    Running 'restart' in the terminal will restart the app
 ******/

const fs = require('fs');

fs.writeFileSync('fs-output.txt', 'This file was created by Node2');
fs.appendFileSync('fs-output.txt' , '\n\n This text was appended')

console.log("\n ** Part 1 \n");

require('./created-modules/utils1.js');
console.log("Printing the Require Statement : " + require('./created-modules/utils1.js'));
debugger
const name = "Mike";

var importedName = require('./created-modules/utils1.js');
console.log("importedName : " + importedNam_xx);
console.log(name);



console.log("\n ** Part 2 ** \n");
const myFunction = require('./created-modules/utils2.js');
const sum = myFunction(4 , -2)
console.log(sum);

console.log("\n ** Part 3 ** \n");
const getMyNotes = require('./created-modules/utils3.js');
console.log(getMyNotes);

console.log("\n ** Part 4 ** \n");



const myValidator = require('validator');
console.log("isEmail:test@test.com : " + myValidator.isEmail("test@test.com"));
console.log("isEmail:com.test@test : " + myValidator.isEmail("com.test@test"));
console.log("isURL : " + myValidator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#questions/8522936'))


console.log("\n ** Part 5 ** \n");

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



