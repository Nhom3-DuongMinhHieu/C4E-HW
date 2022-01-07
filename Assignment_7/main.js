// Problem 1:
alert("Problem 1:")

let a = prompt("First number?", 1),
    b = prompt("Second number?", 2)
alert(a+b)

// Problem 2+3:
alert("Problem 2+3: Open Console tab of the devtools to see the results")
let c = prompt("Input:", "I'mHieuCute"),
    d = "     NhatHeMatTroi      "
console.log("String length: " + c.length)
console.log("Extracting String parts: ")
console.log("   - Using slice(start, end): " + c.slice(3, 7))
console.log("   - Using substring(start, end): " + c.substring(3, 7))
console.log("   - Using substr(start, length): " + c.substr(3, 4))
console.log("Replacing String content: " + c.replace("Cute", "DepTrai"))
console.log("Converting to Upper and Lower Case: ")
console.log("   - Converting to Upper Case: " + c.toUpperCase())
console.log("   - Converting to Lower Case: " + c.toLowerCase())
console.log("Extracting String characters: " + c[3])
console.log("Joins two or more Strings: " + c.concat(d))
console.log("String trim: " + d.trim())
