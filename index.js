var input = document.querySelectorAll(".input input");

var placeholder = document.querySelectorAll(".input .placeholder");


for (let index = 0; index < input.length; index++) {

    input[index].value !== "" ?
        placeholder[index].style.top = "0px" : null

    input[index].addEventListener('mouseenter', () => {
        input[index].value == "" ?
            placeholder[index].style.top = "0" : null
    })

    input[index].addEventListener('mouseout', () => {
        input[index].value == "" ?
            placeholder[index].style.top = "15px" : null
    })
}


var form = document.querySelector('.form');
var email = document.getElementById('email');
var password = document.getElementById('password');
var msg = document.querySelector('.alert');
var acceptedTermsAndCondition = document.getElementById('checkbox');

const validate = () => {
    if (email.value === "" || password.value === "") {
        msg.innerHTML = "The Fields should'nt be empty";
        msg.className += " danger";
    } else if (password.value.length < 6) {
        msg.innerHTML = "Password strenght too weak, Atleast not less than <b> 6 </b> Charater";
        msg.className += " danger";
    } else if (acceptedTermsAndCondition.checked == false) {
        msg.innerHTML = "You must accept our terms and condition to sign up";
        msg.className += " danger";
    } else {
        msg.innerHTML = "Sign UP Successful";
        msg.className = "success"
    }
}

form.addEventListener('click', (event) => {
    event.target.innerHTML === "SIGN UP" ?
        validate() : null
})