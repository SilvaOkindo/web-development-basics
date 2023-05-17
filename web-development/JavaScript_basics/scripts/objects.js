let student = {}; // empty object 

console.log(typeof student)

student.firstName = "Silvanus ";
student.secondName = "Okindo";
student["age"] = 25;
console.log(student)


let myObject = {
    name: "Silvanus",
    print() {
        console.log(`name: ${this.name}`)
    }
}

myObject.print()