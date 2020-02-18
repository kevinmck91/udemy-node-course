console.log("Starting");

// setTimeout is an asynchronous takes in two arguments. A function and a time in miliseconds
setTimeout( () => {
    console.log("Two Second Timer")
} , 2000)


setTimeout( () => {
    console.log("0 second timer")
} , 0)

console.log("Stopping")