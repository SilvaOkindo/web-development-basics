// array functions


let array = new Array(10);
for (let index = 0; index < array.length; index++) {
    array[index] = Math.round(Math.random(1, 13));    
}

let findValue = array.find((element) => {
    return element === 2;
}) // find function


let names = ["Silva", "Mary", "Angel", "Opprah"];

let findIndex = names.indexOf("Mary") //indexOf return an index of an element of an array

console.log("Index of Mary is:" + findIndex);

console.log(`reversed array: ${names.reverse()}`)

console.log(`sorted array: ${names.sort()}`)


// slice function

let shapes = ["circle", "triangle", "rectangle", "pentagon"];

//shapes.splice(2, 0, "square", "trapezoid") // inserts new elements at index 2 by shifting the elements

shapes.splice(2, 2, "square", "trapezoid") 




console.log(shapes)

console.log(findValue);
console.log(array);
console.log(array.length);