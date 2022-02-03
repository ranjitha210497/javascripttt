// Initializing the stack class

function Stack() {
    this.datastore = [];
    this.top = 0;
    this.push = push; //Inserting the element in Stack
    this.pop = pop; //Removing the element in Stack
    this.peek = peek; 
    this.clear = clear;
    this.length = length;
}



//Adding an element in stack
function push(element) {
    this.datastore[this.top++] = element;
}

function length() {
    return this.top;
}

function peek() {
    return this.datastore[this.top - 1];
}

// Removing an element from the given Stack
function pop() {
    return this.datastore[--this.top]
}

function clear() {
    this.top = 0;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Parker");
console.log("length of the stackk is: "+s.length()); //Output 1
console.log(s.peek());
var popped = s.pop();
console.log("the popped element is "+popped);
console.log(s.peek());
s.push("Cynthia");
s.push("Apple");
s.push("Mango")
console.log("length of the stackk is: "+s.length());
s.clear();
console.log("length of the stackk is: "+s.length());
console.log(s)
s.push("Banana");
console.log("length of the new created stackk is: "+s.length());
console.log(s.peek());