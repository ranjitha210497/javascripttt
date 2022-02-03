function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; //Initializes the array in store list elements

    this.toString = toString;
    this.append = append;
    // this.remove = remove;
    this.length = length;
    this.clear = clear;
}

// Length of the list

function length() {
    return  this.listSize;
}

// Appending the element 

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function toString() {
    return this.dataStore;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Parker");

console.log(names);
console.log(names.toString());
console.log("the length of the given list names is " +names.length())
names.clear();
console.log(names.toString());
console.log("the length of the given list names is " +names.length())

var fruits = new List();
fruits.append("Apple");
fruits.append("Mango");
fruits.append("Strawberry");
fruits.append("grapes");

console.log(fruits);
console.log(fruits.toString());
console.log("the length of the given list fruits is " +fruits.length())