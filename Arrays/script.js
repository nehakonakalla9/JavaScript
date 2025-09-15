let arr = ["apple", "banana", "carrot", "dragonfruit"]

for (let i = 0; i < arr.length; i ++){
    console.log(arr[i]);
}


let mixed = [1, true, "hello", {name : "neha"}, [10, 20]];
console.log(mixed);

let colors = ["red", "pink", "blue"]
console.log(colors);
colors.push("orange");
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift("white");
console.log(colors);
colors.shift();
console.log(colors);

let nums = [1, 2, 3, 4, 5, 6]
console.log(nums.indexOf(4));
console.log(nums.join("/"));
nums[2] = 4;
console.log(nums);

nums = [85, 97, 44, 37, 76, 60]
let sum = 0;
for (let i =0 ; i < nums.length; i++){
    sum += nums[i];
}
let med = sum / nums.length;
console.log(med);


console.log(nums.toString());

console.log(nums.slice(1, 4));
console.log(nums.splice(2, 3, 10, 10, 10))
console.log(nums);