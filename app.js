const burger = document.querySelector(".burger")
const closeBurger = document.querySelector(".close-burger")
const menu = document.querySelector(".meni")
const html = document.querySelector("html")

burger.addEventListener("click", function() {
    burger.style.display = "none"
    closeBurger.style.display = "flex"
    menu.style.display = "flex"
})

closeBurger.addEventListener("click", function() {
    burger.style.display = "flex"
    closeBurger.style.display = "none"
    menu.style.display = "none"
})
