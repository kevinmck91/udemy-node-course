//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    
    setTimeout( () => {
        console.log("three seconds are up")
        const result = a + b;
        callback(result);
    }, 3000)
    
}


add(1, 5, (answer) => {
    console.log(answer);
})