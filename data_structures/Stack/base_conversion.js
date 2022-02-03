function Stack() {
    this.datastore = [];
    this.top = 0;
    this.push = push;
    this.peek = peek;
    this.pop = pop;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.datastore[this.top++] = element;
}

function peek() {
    return this.datastore[this.top - 1];
}

function pop() {
    return this.datastore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

// converting numbers to base 2 and base 8

function mulBase(num, base) {
    var s = new Stack();
    do{
        s.push(num % base);
        num = Math.floor(num/=base);
    }
    while(num>0);
    let converted = ""
    while(s.length()>0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num+" converted to base "+base + " is "+newNum);
num = 125;
base = 8;
newNum = mulBase(num,base);
console.log(num+" converted to base "+base + " is "+newNum);