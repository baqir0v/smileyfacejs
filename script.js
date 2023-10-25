let body = document.querySelector("body")
let input = document.createElement("input")
let add = document.createElement("button")
let container = document.createElement("div")
let button = document.createElement("button")


container.classList.add("container")
input.classList.add("input")
add.textContent = "Add"
button.textContent = "Button"



input.addEventListener("input", function(){
    let inputValue = input.value
    console.log(inputValue);
})

// add.addEventListener("click", function() {
//     let inputValue = input.value
//     alert(inputValue)
// })

button.addEventListener("click", function() {
    let div = document.createElement("div")
    div.textContent = "alma"
    container.append(div)
})

add.addEventListener("click", function() {
    let inputValue = input.value
    alert(inputValue)
    input.value = ""
})

body.append(input)
body.append(add)
body.append(button)
body.append(container)
