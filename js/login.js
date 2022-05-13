var inputEmail = document.querySelector("#inputEmail");
var inputPassword = document.querySelector("#inputPassword");
var buttonLogin = document.querySelector("#buttonLogin");
var errorLogin = document.querySelector(".error-login");

buttonLogin.addEventListener("click", (event) => {
  event.preventDefault();
  var userInput = inputEmail.value;
  existUsers(userInput);
});

function existUsers(user) {
  usuarios.forEach((element, index) => {
    if (usuarios[index].user.includes(user)) {
    }
  });
}

/*function compareUsers(user) {
  var password = inputPassword.value;
  usuarios.forEach((element, index) => {
    if (element.user === user) {
      if (element.password === password) {
        console.log("contraseña correcta");
      } else {
        errorLogin.classList.add("invalid");
        errorLogin.innerHTML = "La contraseña no coincide con el e-mail";
      }
    }
  });
}
*/
