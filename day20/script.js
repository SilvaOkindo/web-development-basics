let container = document.querySelector(".container");

container.style.backgroundColor = "yellow";


// draw box

let box = document.querySelector(".box");

box.style.height = "100px";
box.style.width = "100px"
box.style.backgroundColor = "green";
box.style.borderRadius = "10px";


// changing first element of the list



/// add new navigation item

let ol = document.querySelector(".list-items");

let li = document.createElement("li");

ol.append(li);

li.innerHTML = "Services"
li.style.listStyle = "decimal";


box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "red";
})