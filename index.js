const submit = document.querySelector(".form-submit");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const error = document.querySelector(".error");

submit.addEventListener("click", (e) => {
  if (password.value != passwordConfirm.value) {
    e.preventDefault();
    error.innerHTML = "Passwords do not match.";
  }
});
