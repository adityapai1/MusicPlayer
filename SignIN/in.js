const email = document.getElementById("email")
const pwd = document.getElementById("pwd")


function validateForm() {

    var pwdreg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    var emailreg = /^[a-zA-Z0-9\.]+\@[a-z]+\.[a-z]+$/

    if (!pwdreg.test(pwd.value)) {
        alert("Thik Password se Likh")
        return false;

    }
    if (!emailreg.test(email.value)) {
        alert("Asli ID SE AAO Modiji")
        return false;
    }
}