const generateBtn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copy");
const inputField = document.querySelector("input");
const popUp = document.querySelector("#popUp");

generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", copyPassword);

function createPassword() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890<>.,/@#$%^&*()_+!:";
  const passwordLength = 12;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const rndNum = Math.floor(Math.random() * chars.length);
    password += chars[rndNum];
  }
  inputField.value = password;
  popUp.innerText = `"${password}" Copied!`;
}

function copyPassword() {
  inputField.select();
  // for mobile
  inputField.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputField.value);

  if (inputField.value) {
    popUp.classList.add("active");
    setTimeout(() => {
      popUp.classList.remove("active");
    }, 2500);
  }
}
