console.log("hello");

function fibonacci(n) {
    //Write your code here:
    var arr = [];
    var num = 0;
    console.log(arr.length);

    if(n === 1) {
        arr.push(0);
    }
    else if (n == 2) {
        arr.push(0,1);
    }
    else {
        arr.push(0,1);
        for (var i = 2; i < n; i++) {
            arr.push(arr[arr.length-2] + arr[arr.length-1]);
        }
    }
    

    //Return an array of fibonacci numbers starting from 0.
    return `${arr}`;
}

console.log(fibonacci(5));
console.log(fibonacci(1));
console.log(fibonacci(2));