// Task 1 computing the factorial of a given number.
console.log(factorial(15));
console.log(factorial(0));
console.log(factorial(16));
console.log(factorial(-5));
function factorial(n){
    if (n < 0) {
        return -1;
    }
    else if (n === 0) {
        return 1;
    }
    else if (n >15) {
        return Infinity;
    }
    else {
        let result = 1;
        for (let i = n;i > 1; i-- ) {
            result *=i;
        }
        return result;
    }
}

// Task 2 creating a function that convert string to camel case.
console.log(camelCase('john smith'));
function camelCase(str) {
    return str.toLowerCase().replace(/\s+(.)/g, (_, chr) => chr.toUpperCase());
    
}

// Task 3 
console.log(countDown(5));
console.log(countDown(1));
console.log(countDown(''));
function countDown(n) {
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return;
    }
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}