let random = Math.random();

console.log(random);
let a = prompt("enter first number");
let c = prompt("enter operation");
let b=prompt("enter your second number");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if(random>0.1){
    // perform correct evaluation
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    // performing wrong calculation
    c= obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
console.log(`The result is ${a} ${c} ${b}`)