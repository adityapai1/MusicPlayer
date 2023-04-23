const email = document.getElementById("email")
const pwd1 = document.getElementById("pwd1")
const pwd2 = document.getElementById("pwd2")
const myForm = document.getElementById("sign-up-form")
myForm.addEventListener("submit", function (event) {

    var pwdreg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    var emailreg = /^[a-zA-Z0-9\.]+\@[a-z]+\.[a-z]+$/

    if (!pwdreg.test(pwd1.value)) {
        alert("Thik Password se Likh")
        event.preventDefault();

    }
    if (!emailreg.test(email.value)) {

        alert("Asli ID SE AAO Modiji")
        event.preventDefault();
    }
    if (pwd1.value !== pwd2.value) {
        alert("Buddy , alteast copy toh thik se kar.")
        event.preventDefault();
    }
})