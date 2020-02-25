// object proerty Shorthand
// Since the const name is the same as the variable in the JSON, we can use shorthand
// As age and userAge is differnt, shorthand cant be used

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location:'Blackrock'
}

console.log(user);


// Object destructuring

const product1 = {
    label: "red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

// Infficient
//const label = product.label;
//const stock = product.stock;

// You can list out the individual variables for use
// You can set a label which renames the variable
// You can set a default variable if the original variable doent exist
const {label, stock, price:myPrice, rating = '5/5'} = product1
console.log(label);
console.log(stock);
console.log(myPrice);
console.log(rating);

console.log('\n');


// You can destructure the argument directly
const transaction = (type, {label:theLabel, stock:stockAmount, review}) => {
    console.log(theLabel);
    console.log(stockAmount);
    console.log(review);
}

transaction('order' , product1)