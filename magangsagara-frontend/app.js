const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const errorPassword = document.getElementById("error-password");

loginBtn.addEventListener("click", () => {
  if (passwordInput.value.length < 8) {
    emailInput.style.borderColor = "#EB4D4B";
    passwordInput.style.borderColor = "#EB4D4B";
    errorPassword.style.display = "block";
  } else {
    emailInput.style.borderColor = "#d1d1d1";
    passwordInput.style.borderColor = "#d1d1d1";
    errorPassword.style.display = "none";
    alert(`Email: ${emailInput.value}\nPassword: ${passwordInput.value}`);
    emailInput.value = "";
    passwordInput.value = "";
  }
});
