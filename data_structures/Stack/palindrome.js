function Stack() {
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
    return this.datastore[this.top-1];
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

// To verify if the given word is palindrome or not
function isPalindrome(word) {
    var s = new Stack(); //variable declaration
    for(var i=0; i<word.length; ++i) {
        s.push(word[i])
    }
    var rword = "";
    console.log(s.length())
    while(s.length()>0) {
        rword+= s.pop();
    }
    if(word == rword) {
        return true;
    }
    else 
    {
        return false;
    }

    // palindrome implementation with words
   
}

var word = "madam";
if(isPalindrome(word)) {
    console.log(word + " is a palindrome");
}
else {
    console.log("My word is not a palindrome")
}
var word = "racecar";
if(isPalindrome(word)) {
    console.log(word + " is a palindrome");
}
else {
    console.log("My word is not a palindrome")
}
var word = "1234321";
if(isPalindrome(word)) {
    console.log(word + " is a palindrome");
}
else {
    console.log("My word is not a palindrome")
}