document.addEventListener("DOMContentLoaded", () => {

const openPopup = document.getElementById("job_button")
const closePopup = document.getElementById("close_button")
const overlay = document.getElementById("overlay")

openPopup.addEventListener("click", open)
function open() {
    popup.classList.add('active')
    overlay.classList.add('active')
}

closePopup.addEventListener("click", close)
function close() {
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener("click", close)
function close() {
    popup.classList.remove('active')
    overlay.classList.remove('active')
}



})