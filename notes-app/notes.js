const fs = require('fs');
const chalk = require('chalk');

const getNotes = (title, body) => {

}

const addNote = (title, body) => {

    // Load in the existing notes, parse them, add new note, then convert bak
    const notes = loadNotes();
    
    // check if the note title is used already.
    // the filter() method creates a new array with all elements that pass the test implemented
    const duplicateNotes = notes.filter( (note) => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New note added'));
    } else {
        console.log(chalk.red('Note title taken'));
    }

    // Arrays are Objects, but objects can also be written in JSON format    
}

const removeNote = (title) => {
    
    console.log("Removing the Note : " + title);
    const notes = loadNotes();
    var deleteIndex = findIndex(notes, title);

    if(deleteIndex === -1){
        console.log(chalk.red("No Note " + title + " found"));
    } else {
        // using the array.filter() method from addNote would also work
        notes.splice(deleteIndex, 1);
        console.log(chalk.green("Note " + title + " removed"));
        saveNotes(notes);    
    }
    
}

const findIndex = (array, value) => {

    // return the index of 'value' in the array

    for( var i = 0; i < array.length; i++){ 

        if ( array[i].title === value) {
          return i;
        }
     }

     return -1;

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}


// Export both functions so they can be used by another file
module.exports = {
    getNotes : getNotes,
    addNote: addNote,
    removeNote: removeNote
}