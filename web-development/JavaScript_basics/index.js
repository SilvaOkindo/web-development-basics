let value = document.getElementById("value");

let count = 0;

function increments(){
    count++;
    value.innerText = count;
}


function decrements(){
    count--;
    value.innerText = count;
}