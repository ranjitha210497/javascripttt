function Stack(){
    this.datastore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
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

function clear(){
    this.top = 0;
}

function length() {
    return this.top;
}

// this function is to create a factorial of a given number
function fact(n) {
    var s = new Stack();
    while(n>1){
        s.push(n--);
    }

    var product = 1;
    while(s.length()>0) {
        product *= s.pop(); //Product as 3*2*1
    }
    return product;
}

console.log(fact(22));