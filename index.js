const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email is not Valid");
//   } else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Confirm Password is required");
//   } else {
//     showSuccess(password2);
//   }
// });


//Checking The Field
const checkRequired = (inputArr) => {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getfield(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
};
// Make the First Letter Upper Case
function getfield(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
});
