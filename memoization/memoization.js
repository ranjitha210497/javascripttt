const memoize = (fn) => {
    let cache = {};
    return function(...args) {
        console.log(cache);
        if(cache[args]) {
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result;
        return result;
    }
};

const ridiculousSlowFunc = num => {
    for(let i=0; i<= num; i++) {
        if(i===num) 
            return i;
    }
}

const fastFunction = memoize(ridiculousSlowFunc);

console.time();
console.log(fastFunction(2000000000));
console.timeEnd();

console.time();
console.log(fastFunction(2000000000));
console.timeEnd();