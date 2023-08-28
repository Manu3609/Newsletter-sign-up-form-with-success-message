const card = document.querySelector('.card')
const form = document.querySelector("#subscribingForm")
const mailInput = document.querySelector("#mail")
const errorText = document.querySelector("#mailLabel span")
const userMail = document.querySelector("#userEmail")
const successBox = document.querySelector(".successBox")
const dismissButton = document.querySelector('.dissmiss')
let mailValue = ""

mailInput.addEventListener('change', () => {
    mailValue = mailInput.value
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!mailInput.value.includes("@") || !mailInput.value.includes(".")) {
        errorText.classList.add("invalid")
        mailInput.classList.add("invalid")
        mailInput.value = mailValue + " "
    } else {
        console.log("OK")
        errorText.classList.remove("invalid")
        mailInput.classList.remove("invalid")
        card.classList.add('hide')
        userMail.innerHTML = mailValue
        setTimeout(() => { 
            successBox.classList.add('hide')
            card.classList.add("none")
        }, 500)
    }
    console.log('submit')
    console.log(mailValue+" ")
})
dismissButton.addEventListener('click', (e) => {
    // e.preventDefault()
    successBox.classList.remove('hide')
    setTimeout(() => {
        card.classList.remove("none")
        card.classList.remove('hide')
        mailInput.value = ""
        mailValue = ""
    },500)
})