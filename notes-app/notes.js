const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(title, body) {

}

const addNote = function(title ,body) {

    // Load in the existing notes, parse them, add new note, then convert bak
    const notes = loadNotes();
    
    // check if the note title is used already.
    // the filter() method creates a new array with all elements that pass the test implemented
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

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

const removeNote = function(title){
    
    console.log("Removing the Note : " + title);

    const notes = loadNotes();

    var tempTitle = title;

    delete notes.tempTitle;

    saveNotes(notes);

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
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