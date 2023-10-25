let body = document.querySelector("body")
let add = document.createElement("button")
let container = document.createElement("div")



add.textContent = "Add"
container.classList.add("container")

add.addEventListener("click", function(){
    let circle = document.createElement("div")
    let eye1 = document.createElement("div")
    let eye2 = document.createElement("div")
    let mouth = document.createElement("div")

    circle.classList.add("circle")
    eye1.classList.add("eye1")
    eye2.classList.add("eye2")
    mouth.classList.add("mouth")

    container.append(circle)
    circle.append(eye1)
    circle.append(eye2)
    circle.append(mouth)
})


body.append(add)
body.append(container)
