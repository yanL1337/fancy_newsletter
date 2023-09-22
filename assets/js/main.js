const validate = () => {
  const email = document.querySelector("#email");
  const valid = document.querySelector("#notValid");

  if (validateEmail(email.value)) {
    email.classList.remove("warnung");
    valid.classList.add("hidden");
    document.querySelector("#hider").classList.add("hidden");
    document.querySelector("#emailName").innerHTML = email.value;
    document.querySelector("#unhide").classList.remove("hidden");
  } else {
    email.classList.add("warnung");
    valid.classList.remove("hidden");
  }
};

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
