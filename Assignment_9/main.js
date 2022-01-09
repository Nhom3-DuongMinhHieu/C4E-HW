// Problem 1:
alert("Problem 1:")
// Option 1: ?
/**
 * 
 * @param {positive integer} age : Số tuổi
 * @returns : Nếu tuổi > 18 -> true, nếu k thì thực hiện confirm
 */
const checkAge1 = age => age > 18 ? true : confirm("Did parents allow you?")

checkAge1(parseInt(prompt("Option 1: Please enter your age: ")))

// Option 2: ||
/**
 * 
 * @param {*} age 
 * @returns 
 */
const checkAge2 = age => age > 18 || confirm("Did parents allow you?")

checkAge2(parseInt(prompt("Option 2: Please enter your age: ")))

// Problem 2:
alert("Problem 2:")
/**
 * 
 * @param {number} a : Số thứ nhất
 * @param {number} b : Số thứ hai
 * @returns nếu a <= b -> min = a, nếu a > b -> min = b
 */
const min = (a, b) => a <= b ? alert("Min = " + a) : alert("Min = " + b)

min(parseFloat(prompt("Enter 1st number: ")), parseFloat(prompt("Enter 2nd number: ")))

// Problem 3:
alert("Problem 3:")
/**
 * 
 * @param {*} question "Do you agree?"
 * @param {*} yes 
 * @param {*} no 
 * @returns ở cửa sổ confirm nếu bấm yes -> You agreed, nếu no -> You canceled the execution
 */
const ask = (question, yes, no) => confirm(question) ? yes() : no()

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

// Problem 4:
alert("Problem 4:")

/**
 * 
 * @param {*} username : Tên đăng nhập
 * @returns nếu là Admin -> thực hiện function checkPassword, vì "" và null có boolean là false -> !username true -> đã hủy, còn lại thì báo câu cuối
 */
const checkUsername = username => username === "Admin" ? checkPassword(prompt("Please enter Password: ")) :
    !username ? alert("Canceled") : alert("Tôi khum bít bạn =)))")

/**
 * 
 * @param {*} pass : Mật khẩu
 * @returns tương tự bên username
 */
const checkPassword = pass => pass === "mindX" ? alert("Chào mừng!") :
    !pass ? alert("Đã hủy") : alert("Sai mật khẩu")

checkUsername(prompt("Please enter Username: "))

// Problem 5:
alert("Problem 5: Please open Console tab of the Devtools to see the results")
const Arr = []
let len = parseInt(prompt("Số phần tử có trong mảng là: "))
for (let i = 0; i < len; i++) {
    n = parseFloat(prompt("Nhập số thứ " + (i+1)))
    Arr[i] = n; 
}

// Tính trung bình
const Average = () => {
    let sum = 0
    for (let j = 0; j < len; j++) {
        sum = sum + Arr[j]
    }
    return sum/len
}

console.log("Giá trị trung bình là: ", Average())

// Tìm Max
const maxArr = () => {
    let max = Arr[0]
    for (let j = 1; j <= len; j++) {
        max < Arr[j] ? max = Arr[j] : max = max
    }
    return max
}

console.log("Giá trị lớn nhất là: ", maxArr())

// Tìm Min
const minArr = () => {
    let min = Arr[0]
    for (let j = 1; j <= len; j++) {
        min > Arr[j] ? min = Arr[j] : min = min
    }
    return min
}
console.log("Giá trị nhỏ nhất là: ", minArr())

// Tổng chẵn, tổng lẻ
const sumEven = () => {
    let Even = 0
    for (let j = 0; j < len; j++) {
        Arr[j] % 2 == 0 ? Even = Even + Arr[j] : Even = Even
    }
    return Even
}

console.log("Tổng các chẵn là: ", sumEven())

const sumOdd = () => {
    let sum = 0
    for (let j = 0; j < len; j++) {
        sum = sum + Arr[j]
    }
    return sum - sumEven()
}

console.log("Tổng các chẵn là: ", sumOdd())

// Số các số chia hết cho 3
const chiahet3 = () => {
    let count = 0
    for (let j = 0; j < len; j++) {
        Arr[j] % 3 == 0 ? count = count + 1 : count = count
    }
    return count
}

console.log("Số các số chia hết cho 3 là: ", chiahet3())