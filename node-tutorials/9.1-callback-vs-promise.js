// Callback pattern 

const doWorkCallback = (callback) => {

        setTimeout( () => {
            callback(undefined, [1,2,3])
        }, 2000)

}

// call the function above
doWorkCallback( (error, result) => {
    if(error){
        return console.log(error)
    }

    console.log(result)
}) 


// 1. The function doWorkCallback is called by the program
// 2. When it is called, it passes in another function as a parameter, in this case the (error, result) function
// 3. As per normal operation, the setTimeout function within the doWorkCallback is run
// 4. setTimeout utilises the function that was passed into doWorkCallback