// Arrow functions

// Normal function declaration
const square1 = function(x){
    return x*x;
}



// Arrow declaration when funxtion is comple
const square2 = (x) => {
    return x*x;
}



// Arrow function where return is simple
const square3 = (x) => x*x;



// Normal function declaration
const event1 = {
    name1: 'Birthday Party 1',
    printGuestList1: function(){
        console.log('Guest list for ' + this.name1);
    }
}

event1.printGuestList1();
console.log(' ');




// Arrow functions dont define their own this.value
const event2 = {
    name2: 'Birthday Party 2',
    printGuestList2: () => {
        console.log('Guest list for ' + this.name2);
    }
}

event2.printGuestList2();
console.log(' ');




// handy syntax that removes function keyword but keeps functionality
const event3 = {
    name3: 'Birthday Party 3',
    printGuestList3(){
        console.log('Guest list for ' + this.name3);
    }
}

event3.printGuestList3();
console.log(' ');



// Arrow functions dont bind their own this values (..why ?)

const event4 = {
    name4: 'Birthday Party 4',
    guestList: ['Andrew', 'jen', 'Mike', 'kevin'],
    printGuestList4_working(){
        console.log('Guest list for ' + this.name4);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name4);
        })
    },
    printGuestList4_error(){
        console.log('Guest list for ' + this.name4);

        this.guestList.forEach(function(guest){
            console.log(guest + ' is attending ' + this.name4);
        })
    }
}

event4.printGuestList4_working();
console.log(' ');
event4.printGuestList4_error();
