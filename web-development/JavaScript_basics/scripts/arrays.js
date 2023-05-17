// array functions


const  array = [2, 5, 6, 7, 9, 0];

console.log(array);
// push function 

array.push(5);
console.log("after push function");
printArray(array);

//shift function 
array.shift(); // removes the first element of an array
console.log("after shift");
console.log(array)

// unshift function 
array.unshift(8); // adds element to the beginning of an array
console.log("after unshift");
printArray(array);

// pop function 
console.log("popped " + array.pop());


// copying arrays

const  copyArray = [...array]

console.log("copied array " + printArray(copyArray));



// a function that prints elements of an array.

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
    console.log(array[i])
    }
}