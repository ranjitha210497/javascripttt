function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.rear = rear;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue(element) {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function rear() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = '';
    for(var i = 0; i<this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if(this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

// test program
var q = new Queue();
q.enqueue("Ranju");
q.enqueue("Mridula");
q.enqueue("Pinky");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: "+q.front());
console.log("Rear of queue: "+q.rear());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: "+q.front());
console.log("Rear of queue: "+q.rear());