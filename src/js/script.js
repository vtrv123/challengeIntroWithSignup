const elements = {
  form: document.querySelector(".form"),
  inputFields: [
    document.getElementById("first-name"),
    document.getElementById("last-name"),
    document.getElementById("email"),
    document.getElementById("password"),
  ],
};

const checkEmail = function (email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const errorPositive = function (element, event, emailIndex = false) {
  const warningMessage = element.nextElementSibling;
  const warningIcon = warningMessage.nextElementSibling;

  event.preventDefault();
  element.style.border = "1px solid red";
  if (!(element.placeholder === "") && !emailIndex) {
    warningMessage.textContent =
      warningMessage.textContent + " cannot be empty";
  } else if (!(element.placeholder === "") && emailIndex) {
    warningMessage.textContent = "Looks like this is not an email";
  }
  element.placeholder = "";
  warningMessage.style.display = "block";
  warningIcon.style.display = "block";
};

const errorNegative = function (element, event) {
  const warningMessage = element.nextElementSibling;
  const warningIcon = warningMessage.nextElementSibling;

  element.style.border = "1px solid var(--grayish-blue)";
  warningMessage.style.display = "none";
  warningIcon.style.display = "none";
};

const checkError = function (element, event, index) {
  if (element.value === "") {
    errorPositive(element, event);
  } else if (element.value !== "" && index !== 2) {
    errorNegative(element, event);
  } else if (element.value !== "" && index === 2) {
    if (checkEmail(element.value)) {
      errorNegative(element, event);
    } else {
      errorPositive(element, event, true);
    }
  }
};

elements.form.addEventListener("submit", function (event) {
  elements.inputFields.forEach((element, index) =>
    checkError(element, event, index)
  );
});
