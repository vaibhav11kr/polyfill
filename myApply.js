
let person1 = { name: "Vaibhav" }
let person2 = { name: "yash" }

function printAge(age){
    console.log(`${this.name} is ${age} years old`);
}

printAge.apply(person2, [25]);


Function.prototype.myApply = function(obj = {}, ...args){
    if(!Array.isArray(...args)){
        throw new Error("agrs is not an array");
    }
    obj.fn = this;
    obj.fn(...args);
}

printAge.myApply(person1, [25]);