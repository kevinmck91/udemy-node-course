// CRUD operations

const  {MongoClient, objectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager'


// Part of a connection pool
MongoClient.connect(connectionURL, { useNewUrlParser:true}, (error, client) => { 

    if(error){
        return console.log(error)   //return stops the code below from running
    }

    console.log("Connected sucessfully")

    
    // Creates a new database
    const db = client.db(databaseName)

/*

    // Allows you to insert a single document into a collection
    db.collection('users').insertOne({
        name: 'kevin',
        age: 28
    }, (error, result) => {
        
        if (error){
            return console.log("Unable to insert user")
        }

        console.log(result.ops)
    })


    // Insert Multiple entries
    db.collection('tasks').insertMany([
        { 
            description: "Go shopping",
            completed: false
        },
        {  
            description: "Do Some work",
            completed: false
        },
        {
            description: "Cook French toast",
            completed: false
        } 
    ], (error, result) => {

        if(error){
            return console.log('unable to insert task')
        }

        console.log(result.ops)
    })

*/

    // Find data on an individual Document (returns the first)
    db.collection('users').findOne({ name:'Jen', age : 28}, (error, user) => {

        if(error){
            return console.log('Unable to fetch document from collection')
        }

        console.log(user)
  
    })

    // Return a pointer to the array of documents (cast to array to view full data set)
    db.collection('users').find({ age : 28}).toArray((error, users) => {
        console.log(users)
    })

    // Return a pointer to the array of documents (cast to array to view full data set)
    db.collection('users').find({ age : 28}).count((error, count) => {
        console.log(count)
    })

})