// Promises pattern

const doworkPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // resolve([1,4,6,9])
        reject('Things went wrong')
    }, 2000)
})

doworkPromise.then( (result) => {
    console.log('success', result)
}).catch( (error)=> {
    console.log('Error', error)
})

// We provide two functions depending on the output of the promise. 
// we dont have to create the logic ourselves like in the callback pattern
// We call resolve or reject. The promise is finished. unlike in callback pattern where you can call the callback function twice
// a promise is pending until its either fulfilled or rejected