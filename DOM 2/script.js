let div = document.querySelector("#box");
let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph";
div.after(newPara);