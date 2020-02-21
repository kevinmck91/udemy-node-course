console.log("Starting");

// A callback function is a function we provide as an argument to another function
// setTimeout is a node provided asyncronous API. Not all callback patterns are asyncronous
// forEach and filter use the callback patterns and are syncronous

setTimeout( () => {
   // console.log("Two Seconds are up")
} , 2000)



// Here we are passing a function (check names.length) to another function (filter)
// filter is syncronous. It has to complete before moving onwards

const names = ['Kevin' ,'Jen, Jess'];

const shortNames = names.filter( (name) => {
    return name.length <= 4
} )


// Self definied functions. This is synchronous

console.log ("\n **** Example 1 ****");

const geocode1 = (address, callback) => {
    const data = {
        latitude : 0,
        longitude : 1
    }

    return data;
}

console.log (geocode1('blackrock'));


// geocode2 it sychronous, so it returns 'undefined' instantly
// Return statement doesnt work when you nest asychronous inside sychronous functions
// becasue the callback function needs to execute before Main finshes (doesnt happen)

console.log ("\n **** Example 2 ****");

const geocode2 = (address, callback) => {
    setTimeout( () => {
        const data = {
            latitude : 0,
            longitude : 1
        }
        return data;
    } , 2000)

    
}

console.log (geocode2('blackrock'));


// Use Callbacks to get it back working again
// Return statement doesnt work when you nest asychronous inside sychronous functions

console.log ("\n **** Example 3 ****");

const geocode3 = (address, callback) => {
    setTimeout( () => {
        const data = {
            latitude : 0,
            longitude : 1
        }
        callback(data);
    } , 2000)

    
}

geocode3('blackrock', (data) => {
    console.log(data)
} )