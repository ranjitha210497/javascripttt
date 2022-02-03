function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    // this.front = front;
    // this.back = back;
    this.toString = toString;
    // this.empty = empty;
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var priority = 0
    for(var i=1; i<this.dataStore.length; i++) {
        if(this.dataStore[i].code < this.dataStore[priority].code) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}

function toString() {
    var retStr = '';
    for(var i = 0; i<this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + "\n";
    }
    return retStr;
}

function enqueue(element) {
    this.dataStore.push(element);
}

var p = new Patient("SMith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("John", 4);
ed.enqueue(p);
p = new Patient("Brown", 2);
ed.enqueue(p);
p = new Patient("Ingram", 2);
ed.enqueue(p);
console.log(ed)
console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated: "+ seen[0].name);
