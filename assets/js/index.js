const form = document.querySelector("#subscribingForm")
const mailInput = document.querySelector("#mail")
const errorText = document.querySelector("#mailLabel span")
form.addEventListener('submit', (e) => {
    errorText.classList.add("invalid")
    mailInput.classList.add("invalid")
})