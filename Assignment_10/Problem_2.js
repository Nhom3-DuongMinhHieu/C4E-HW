let obj={
    b:2,
    a:1,
    c:3
}
let key = Object.keys(obj)  // Có sử dụng Object.key()
let arr = new Array
key.forEach(element => {
    arr.push(element.toUpperCase())  // có sử dụng method của array và toUpperCase()
})

console.log(arr)


