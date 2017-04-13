var square = (x) => {
    var result = x * x; 
    return result;
};

var squareArrow = x => x * x; 



console.log(square(9));

// arrow functions do not bind a this keyword. 



var uer = { 
    name: 'Ethan',
    sayHi: () => {
        console.log(arguments.)
        // this will not work because the arrow function as no reference to this
        console.log(`hit, I'm ${this.name}`);
    },
    // new ES6 object method syntax
    sayHiAlt () {
        console.log(aryguments);
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.sayHi();

