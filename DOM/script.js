let divs = document.querySelectorAll(".box");
console.log(divs);

let ind = 1;
for (let div of divs){
    div.innerText  = `new unique value ${ind}`;
    ind ++
}

console.log(divs)