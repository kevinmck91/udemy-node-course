// CRUD operations

const  MongoClient = require('mongodb')
const  ObjectId = require('mongodb').ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager'


// Part of a connection pool
MongoClient.connect(connectionURL, { useNewUrlParser:true}, (error, client) => { 

    if(error){
        return console.log(error)   //return stops the code below from running
    }

    console.log("Connected sucessfully")

    // Creates a new database connection
    const db = client.db(databaseName)



/************** Allows you to insert a single document into a collection **************
    db.collection('users').insertOne({
        name: 'kevin',
        age: 28
    }, (error, result) => {
        
        if (error){
            return console.log("Unable to insert user")
        }

        console.log(result.ops)
    })
*/

/************** Insert Multiple entries **************
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


/************** Find data on an individual Document (returns the first) **************
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

*/


/************** Updating an existing docuemtn to update (using promises) **************
    db.collection('users').updateOne({
        _id: new ObjectId("5eaab47e3488fb12c015357f")
    }, {
        $set: {
            name: 'testest'
        },
        $inc:{ 
            age:20
        }
    }).then((result) => {
        console.log('success', result)
    }).catch((error) => { 
        console.log('Issues', error)
    })

*/

/************** Updating many existing documents (using promises) **************
    db.collection('tasks').updateMany({
        completed: false
    },{
        $set: {
            completed : true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error)=> {
        console.log(error)
    })
*/

    db.collection('users').deleteOne({
        age:48
    }).then((result) => {
        console.log(result)
    }).catch((error)=> {
        console.log(error)
    })


})