let person1 = { name: "Vaibhav" }
let person2 = { name: "yash" }

function printAge(age){
    console.log(`${this.name} is ${age} years old`);
}

Function.prototype.myBind = function(obj={}, ...args1){
    obj.fn = this;
    return function(...args2){
        obj.fn(...args1, ...args2);
    };
};

let newFn = printAge.myBind(person2);
newFn(25);
// console.log(typeof {})