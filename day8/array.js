var names = ["Opprah","Mary", "Junior", "Okindo",];
console.log("array length:", names.length);

console.log("first element:", names[0])

console.log("last element: ", names[names.length - 1])

names.push("Rebecca")

console.log(names.length)

console.log(names)


// printing array elements using foreach

names.forEach((element) =>{
    console.log(element)
})

// array methods

function arrayFunction() {
    favoriteFruits = ["grapefruit", "orange", "lemon"];
    favoriteFruits.push("mango") // adds a new element
    console.log(favoriteFruits);

    favoriteFruits.shift()
    console.log(favoriteFruits);
    favoriteFruits.pop()
    console.log(favoriteFruits);

    let newArray = favoriteFruits.concat(names)
    console.log(newArray);

    console.log("length of new array: ", newArray.length)

    newArray.splice(2, 12, "square","rectangle")
    console.log(newArray);
    console.log("length of new array: ", newArray.length)




}

arrayFunction();

console.log(names)

delete names[0]
console.log(typeof names)
console.log(names.sort())
console.log(names.reverse())


/// objects

names.forEach((arr) => {
    if(arr==="Okindo") {
        console.log(arr);
    }
})


