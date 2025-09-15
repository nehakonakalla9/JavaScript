let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curr_mode = "light";


modeBtn.addEventListener("click", () => {
    if (curr_mode == "light"){
        curr_mode = "dark";
        body.classList.add("dark")
        body.classList.remove("light")
    }else {
        curr_mode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(curr_mode);
})