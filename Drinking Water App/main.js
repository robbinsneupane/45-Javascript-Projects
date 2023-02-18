const input = document.querySelector(".input");
const button = document.querySelector("#submit");
const smallCup = document.querySelectorAll(".s-cup");
const percentage = document.querySelector("#percentage");
let litersRemaining = document.querySelector("#liters");
const remaining = document.querySelector("#remaining");

button.addEventListener("click", (e) => {
  e.preventDefault();
  input.style.animation = "slideUp 0.5s ease-in-out forwards";
  updateBigCup();
});

smallCup.forEach((cup, ind) => {
  cup.addEventListener("click", () => {
    highlightCup(ind);
    updateBigCup();
  });
});

function highlightCup(ind) {
  if (ind === 13 && smallCup[ind].classList.contains(".full")) {
    ind--;
  } else if (
    smallCup[ind].classList.contains("full") &&
    !smallCup[ind].nextElementSibling.classList.contains("full")
  ) {
    ind--;
  }

  smallCup.forEach((cup, ind2) => {
    if (ind2 <= ind) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".s-cup.full").length;
  const totalCups = document.querySelectorAll(".s-cup").length;

  let percentageFilled = parseFloat((fullCups / totalCups) * 100).toFixed(1);

  let inputValue = document.querySelector("#input").value;
  if (inputValue === "") {
    const span = document.createElement("span");
    span.innerText = "Please Enter the Quantity of Water";
    input.append(span);
    input.style.animation = "none";
    input.style.transform = "translateY(150%)";
    console.log("lado");
  }

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${percentageFilled}%`;
    percentage.innerText = `${percentageFilled}%`;
  }

  if (fullCups === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else {
    let smallCupLiters = parseFloat((inputValue * 1000) / 12).toFixed(1);

    remaining.style.visibility = "visible";
    litersRemaining.innerText = `${parseFloat(
      inputValue - (smallCupLiters * fullCups) / 1000
    ).toFixed(2)}L`;
  }

  smallAmount(inputValue);
}

function smallAmount(inputValue) {
  smallCup.forEach((cup) => {
    cup.innerText = parseFloat((inputValue * 1000) / 12).toFixed(1) + " ml";
  });
}
