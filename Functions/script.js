let str = prompt("Enter a String and I will return the vowels in it")
function strFunction(){
    let vowels = ["a", "e", "i", "o", "u"]
    let found = [];
    
    for (let char of str.toLowerCase()){
        if (vowels.includes(char)){
            found.push(char);
        }
    }
    console.log("Vowels in string are :", found)
}

strFunction(); 


let integer = prompt("Enter numbers");

function sqrt(){
    let ans = [];
    for (let char of integer){
        let num = Number(char);
        let square = num * num;
        ans.push(square);
    }
    console.log("sqaured intergers :", ans)
}
sqrt();