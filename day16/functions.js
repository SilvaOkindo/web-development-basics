function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(1, 1))


var arr = ["silva", "misiga", "Mary", "Dama", "judy"];
function selectRanomWord() {
  
   let randomIndex = Math.floor(Math.random() * arr.length)
   console.log(arr[randomIndex]);
}

selectRanomWord();


//(x, y)=>x+y;

let addTwonNumbers = (x,y)=> x + y;

console.log(addTwonNumbers(1, 3))


function sumNumbers() {
    let arr = [];
    for (let index = 0; index < 10; index++) {     
         let num1 = index * 5;
         let num2 = index * index;
         let answer = addNumbers(num1, num2);
         arr.push(answer)
    }
    //console.log(num1)
    console.log(arr)
}

sumNumbers()