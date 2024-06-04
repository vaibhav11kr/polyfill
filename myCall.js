
let person1 = { name: "Vaibhav" }
let person2 = { name: "yash" }

function printAge(age){
    console.log(`${this.name} is ${age} years old`);
}

printAge.call(person2, 25);


Function.prototype.myCall = function(obj = {}, ...args){
    obj.fn = this;
    obj.fn(...args);
}

printAge.myCall(person1, 25);