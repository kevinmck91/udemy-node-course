const greeter = (name) => {
    console.log('Hello ' + name)
}

greeter('KEvin');

greeter(); // will log out Hello undefined (default parameter)




// This sets a default value for 'name' if one inst provided
const greeter2 = (name = 'User', age) => {
    console.log('Hello ' + name)
}

greeter2('John');

greeter2();