// Problem 1:

let color = ["#EEEEEE", "#DDDDDD", "#CCCCCC", "#BBBBBB", "#AAAAAA", "#999999", "#888888", "#777777", "#666666", "#555555", "#444444", "#333333", "#222222", "#111111", "#000000", "#FF0000", "#EE0000", "#DD0000", "#CC0000", "#BB0000", "#AA0000", "#990000", "#880000", "#770000",     "#660000", "#550000", "#440000", "#330000", "#220000", "#110000", "#FFFFFF", "#FFFFCC", "#FFFF99", "#FFFF66", "#FFFF33", "#FFFF00", "#CCFFFF", "#CCFFCC", "#CCFF99", "#CCFF66", "#CCFF33", "#CCFF00", "#99FFFF", "#99FFCC", "#99FF99", "#99FF66", "#99FF33", "#99FF00", "#66FFFF", "#66FFCC", "#66FF99", "#66FF66", "#66FF33", "#66FF00",     "#33FFFF", "#33FFCC", "#33FF99", "#33FF66", "#33FF33", "#33FF00", "#00FFFF", "#00FFCC", "#00FF99", "#00FF66", "#00FF33", "#00FF00", "#FFCCFF", "#FFCCCC", "#FFCC99", "#FFCC66", "#FFCC33", "#FFCC00", "#CCCCFF", "#CCCCCC", "#CCCC99", "#CCCC66", "#CCCC33", "#CCCC00", "#99CCFF", "#99CCCC", "#99CC99", "#99CC66", "#99CC33", "#99CC00",     "#66CCFF", "#66CCCC", "#66CC99", "#66CC66", "#66CC33", "#66CC00", "#33CCFF", "#33CCCC", "#33CC99", "#33CC66", "#33CC33", "#33CC00", "#00CCFF", "#00CCCC", "#33CC66", "#33CC33", "#00CC99", "#00CC66", "#00CC33", "#00CC00", "#FF99FF", "#FF99CC", "#FF9999", "#FF9966", "#FF9933", "#FF9900", "#CC99FF", "#CC99CC", "#CC9999", "#CC9966",     "#CC9933", "#CC9900", "#9999FF", "#9999CC", "#999999", "#999966", "#999933", "#999900", "#6699FF", "#6699CC", "#669999", "#669966", "#669933", "#669900", "#3399FF", "#3399CC", "#339999", "#339966", "#339933", "#339900", "#0099FF", "#0099CC", "#009999", "#009966", "#009933", "#009900", "#FF66FF", "#FF66CC", "#FF6699", "#FF6666",     "#FF6633", "#FF6600", "#CC66FF", "#CC66CC", "#CC6699", "#CC6666", "#CC6633", "#CC6600", "#9966FF", "#9966CC", "#996699", "#996666", "#996633", "#996600", "#6666FF", "#6666CC", "#666699", "#666666", "#666633", "#666600", "#3366FF", "#3366CC", "#336699", "#336666", "#336633", "#336600", "#0066FF", "#0066CC", "#006699", "#006666",     "#006633", "#006600", "#FF33FF", "#FF33CC", "#FF3399", "#FF3366", "#FF3333", "#FF3300", "#CC33FF", "#CC33CC", "#CC3399", "#CC3366", "#CC3333", "#CC3300", "#9933FF", "#9933CC", "#993399", "#993366", "#993333", "#993300", "#6633FF", "#6633CC", "#663399", "#663366", "#663333", "#663300", "#3333FF", "#3333CC", "#333399", "#333366",     "#333333", "#333300", "#0033FF", "#FF3333", "#0033CC", "#003399", "#003366", "#003333", "#003300", "#FF00FF", "#FF00CC", "#FF0099", "#FF0066", "#FF0033", "#FF0000", "#CC00FF", "#CC00CC", "#CC0099", "#CC0066", "#CC0033", "#CC0000", "#9900FF", "#9900CC", "#990099", "#990066", "#990033", "#990000", "#6600FF", "#6600CC", "#660099",     "#660066", "#660033", "#660000", "#3300FF", "#3300CC", "#330099", "#330066", "#330033", "#330000", "#0000FF", "#0000CC", "#000099", "#000066", "#000033", "#00FF00", "#00EE00", "#00DD00", "#00CC00", "#00BB00", "#00AA00", "#009900", "#008800", "#007700", "#006600", "#005500", "#004400", "#003300", "#002200", "#001100", "#0000FF",     "#0000EE", "#0000DD", "#0000CC", "#0000BB", "#0000AA", "#000099", "#000088", "#000077", "#000055", "#000044", "#000022", "#000011"] 

let btnColor = document.querySelector("#changeColor")

btnColor.onclick = () => {
    let c = color[Math.floor(Math.random() * color.length)]
    document.body.style.backgroundColor = c;
}

// Problem 2:
let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let btns = document.querySelectorAll(".operator")
let result = document.querySelector("#result")
let equal = document.querySelector("#equal")
let res = 0

btns.forEach(btn => {
    btn.onclick = () => {
        operator = btn.innerText
    }
})

equal.onclick = () => {
    switch (operator) {
        case "+":
            res = parseFloat(num1.value) + parseFloat(num2.value)
            break

        case "-":
            res = num1.value - num2.value
            break

        case "*":
            res = num1.value * num2.value
            break

        case "/":
            res = num1.value / num2.value
            break
    }

    result.value = res
}

// Problem 3:
let input = document.querySelector("#input");
let btnAdd = document.querySelector("#btn-add");
let btnRem = document.querySelector("#btn-remove")
let toDo = document.querySelector("#todo");
let todoList = []

btnAdd.onclick = () => {
    if(!input.value) {
        alert("Bạn chưa nhập gì!")
        return
    }

    if(todoList.find((el) => el === input.value)) {
        alert("Đã tồn tại!")
        input.value = ""
    }

    else {
        todoList.push(input.value)
        const liElement = document.createElement("li")
        liElement.innerText = input.value
        toDo.appendChild(liElement)
        input.value = ""
    }
}

btnRem.onclick = () => {
    let item = document.querySelector("li:last-child")
    toDo.removeChild(item)
}