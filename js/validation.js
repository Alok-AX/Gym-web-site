let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");

let mobile = document.getElementById("mobile");
let btn = document.getElementById("btn");
form.addEventListener("submit", e => {
    e.preventDefault();


    let userErrorMess = [];
    if (username.value === "" || username.value === null) {
        userErrorMess.push(`<p>User name is required</p>`);

    }
    if (username.value.length < 6) {

        userErrorMess.push(`<p>username is minimum 6 charecter....
        </p>`);
    }
    if (email.value === "" || email.value === null) {
        document.getElementById("password_error").innerHTML =
            `password is required`;
    }


})