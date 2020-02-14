const fs = require('fs');
const chalk = require('chalk');

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
        saveNotes(notes)
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

const listNotes = () => {

    const notes = loadNotes();

    notes.forEach(element => {
        
        console.log(element.title);

    });

}

const updateNote = function(title, body){
    
    const notes = loadNotes();
    let flag = false;

    notes.forEach(element => {
        
        if(element.title === title){
            element.body = body;
            saveNotes(notes)
            flag = true;
            console.log(chalk.green('Note \'' + title + '\' Updated'))
        } 
        
    });

    if(flag === false){
        console.log(chalk.red('Title \'' + title + '\' not found'));
    } else {
        readNote(title)
    }

}

const readNote = (title) => {

    if(title === '' || title == null) {
        console.log(chalk.red('Title can\'t be null'));
        return;
    }

    console.log(chalk.green("Reading note : "))
    
    const notes = loadNotes();

    notes.forEach(element => {
        
       if(element.title === title){
           console.log(element.body)
       }

    });

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
    listNotes : listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    updateNote: updateNote
}