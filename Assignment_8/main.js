// Problem 1:
console.log("Problem 1: Coercion - Truthy & Falsy")

// Problem 1.1: 
console.log("\tProblem 1.1:")
var a = 10;
var b = Number(a);
var c = a * 1;
console.log(a===b && b===c)


// Problem 2:
console.log("\n\nProblem 2: Logical Operators & Conditional")

// Problem 2.3:
console.log("\tProblem 2.3:")
let d = -1,
    e = 1
if ( d<0 && e>0 ) {
    console.log("Đúng rồi nè")
}

// Problem 2.4:
console.log("\n\tProblem 2.4:")
alert("Problem 2.4:")
let number = parseInt(prompt("Enter a number: "))

while (!isFinite(number)) {
    number = parseInt(prompt("Please enter a number: "))
}

let r = number % 3
let div = number / 3

if (r === 0) {
    console.log("Kết quả của phép chia là: " + div)
}
else {
    console.log(number + " không chia hết cho 3 và dư " + r)
}

// Problem 3:
alert("Problem 3: Please open Console tab of the Devtools to see the results")
console.log("\n\nProblem 3: Calculator")

let operator = prompt("Enter operator (+, -, * or /): ")
while (operator != "+" && operator != "-" && operator != "*" && operator != "/"){
    operator = prompt("Please enter operator (+, -, * or /): ")
} 

let num1 = parseInt(prompt("Enter the 1st number: "))
while (!isFinite(num1)) {
    num1 = parseInt(prompt("Please enter a number: "))
}

let num2 = parseInt(prompt("Enter the 2nd number: "))
while (!isFinite(num2)) {
    num2 = parseInt(prompt("Please enter a number: "))
}

let result

// Cách 1:
alert("Problem 3: Cách 1: If...else")
console.log("Problem 3: Cách 1: If...else")

if (operator == "+") {
    result = num1 + num2
}

else if (operator == "-") {
    result = num1 - num2
}

else if (operator == "/") {
    result = num1 / num2
}

else {
    result = num1 * num2
}

console.log(`\t${num1} ${operator} ${num2} = ${result}`);

// Cách 2: 
alert("Problem 3: Cách 2: Switch case")
console.log("\nProblem 3: Cách 2: Switch case")

switch(operator) {
    case "+":
        result = num1 + num2
        break

    case "-":
        result = num1 - num2
        break

    case "*":
        result = num1 * num2
        break

    case "/":
        result = num1 / num2
        break
}

console.log(`\t${num1} ${operator} ${num2} = ${result}`);

// Problem 4:
let n = parseInt(prompt("Enter a positive number: "))
while (!isFinite(n) || n < 0) {
    n = parseInt(prompt("Enter a positive number: "))
}

let isPrime = true;

if (n < 2) {
    isPrime = false
}

else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrime = false
            break
        }
    }
}

if (isPrime == true) {
    alert ( n + " is a Prime number")
}

else {
    alert ( n + " is not a Prime number")
}


