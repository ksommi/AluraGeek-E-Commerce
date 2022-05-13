var loginBtn = document.querySelector("#Login");
var logoBtn = document.querySelectorAll(".logo");
var nameContact = document.querySelector("#nameContact");
var messageContact = document.querySelector("#messageContact");
var contactoError = document.querySelectorAll(".contacto-error");
var sendMessageButton = document.querySelector("#contact-button");
var isNameValid = false;
var isMessageValid = false;

loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

logoBtn.forEach((logo) => {
  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

nameContact.addEventListener("keyup", validateName);
messageContact.addEventListener("keyup", validateMessage);

function validateName() {
  if (nameContact.validity.patternMismatch) {
    showErrorMessage(0, "El nombre no es correcto, introduzca solo letras");
  } else if (nameContact.validity.valueMissing) {
    showErrorMessage(0, "El campo de nombre esta vacío");
  } else {
    showErrorMessage(0, "");
    isNameValid = true;
  }
  updateButtonStatus();
}

function validateMessage() {
  if (messageContact.validity.valueMissing) {
    showErrorMessage(1, "El campo de mensaje esta vacío");
  } else {
    showErrorMessage(1, "");
    isMessageValid = true;
  }
  updateButtonStatus();
}

function showErrorMessage(number, message) {
  contactoError[number].classList.add("invalid");
  contactoError[number].innerHTML = message;
}

function updateButtonStatus() {
  if (isNameValid && isMessageValid) {
    sendMessageButton.disabled = false;
  } else {
    sendMessageButton.disabled = true;
  }
}
