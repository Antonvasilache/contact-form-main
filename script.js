const contactForm = document.querySelector(".contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const query = document.getElementById("query");
const queryList = document.querySelectorAll(
  `input[type="radio"][name="request-type"]`
);
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const toast = document.querySelector(".toast");

function validateSelection(radioButtons) {
  let isSelected = false;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      isSelected = true;
      break;
    }
  }

  return isSelected;
}

function validateEmail(email) {
  const regexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
}

function displayError(element) {
  if (!NodeList.prototype.isPrototypeOf(element)) {
    element.style.borderColor =
      getComputedStyle(element).getPropertyValue("--Red");

    const error = document.getElementById(`${element.id}-error`);
    error.style.display = "block";
  } else if (element.type !== "text") {
    const error = document.getElementById(`${element.id}-error`);
    error.style.display = "block";
  }
}

function hideError(element) {
  element.style.borderColor = getComputedStyle(
    element.getPropertyValue("--Grey-500-medium")
  );
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let success = true;

  if (!firstName.value) {
    displayError(firstName);
    success = false;
  }

  if (!lastName.value) {
    displayError(lastName);
    success = false;
  }

  if (!validateEmail(email.value)) {
    displayError(email);
    success = false;
  }

  if (!validateSelection(queryList)) {
    displayError(query);
    success = false;
  }

  if (!message.value) {
    displayError(message);
    success = false;
  }

  if (!consent.checked) {
    displayError(consent);
    success = false;
  }

  if (success === true) toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 2000);
});
