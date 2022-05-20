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
  user = user.toLowerCase();
  var password = inputPassword.value;
  function findUser() {
    var index = usuarios.findIndex((elemento) => elemento.user === user);
    return index;
  }
  if (user === "" || password === "") {
    errorLogin.classList.add("invalid");
    errorLogin.innerHTML = "No se deben dejar campos vacios";
  } else {
    if (findUser() >= 0) {
      var indexUser = findUser();
      if (usuarios[indexUser].password === password) {
        window.location.href = "/index.html";
      } else {
        errorLogin.classList.add("invalid");
        errorLogin.innerHTML = "Los datos son incorrectos";
      }
    } else {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user)) {
        errorLogin.classList.add("invalid");
        errorLogin.innerHTML = "El formato de e-mail no es valido";
      } else {
        errorLogin.classList.add("invalid");
        errorLogin.innerHTML = "El e-mail no se encuentra registrado";
      }
    }
  }
}
