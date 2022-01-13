let obj = {
    foo:{a:"hello",b:"world"},
    bar:["example","mem",null,{xyz:6},88],
    qux:[4,8,12]
}

// Option 1:
console.log("Option 1: ")

obj.bar[3].xyz = 606
console.log(obj)

// Option 2:
console.log("\nOption 2: ")
obj.bar[3]['xyz'] = 606
console.log(obj)

// Option 3:
console.log("\nOption 3:")
const change = () => {
    a = 606
}

change(obj.bar[3])
console.log(obj)