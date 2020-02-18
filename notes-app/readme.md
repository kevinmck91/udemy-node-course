This application uses 
- require('yargs'); - to take input from the command line
- require('chalk'); - to colour the output

There are 5 possible command inputs
add
remove
update
list
read

yargs.command builder in app.js determines what arguments are accepted for each command

notes.js contains the functions used to control the app functionality.

Initialize the program by running 'npm install' to install the modules defined in the 'package-lock.json'

Run the program by running :
node app.js [command] [argument1] [argument2]






