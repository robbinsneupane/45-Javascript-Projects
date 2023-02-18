const playGame = document.querySelector("#playGame");
const pokemonBtn = document.querySelectorAll(".selector button");
const screen = document.querySelector(".screen");

playGame.addEventListener("click", (e) => {
  e.target.parentNode.classList.add("up");
});

pokemonBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let img = btn.querySelector("img");
    let src = img.getAttribute("src");
    e.target.parentNode.parentNode.parentNode.classList.add("up");
    setTimeout(() => {
      createPokemon(src);
    }, 1000);
  });
});

function createPokemon(src) {
  const img = document.createElement("img");
  const { x, y } = getRandomLocation();
  img.style.top = `${y}px`;
  img.style.left = `${x}px`;
  img.style.transform = `rotate(${Math.random() * 360}deg)`;
  img.src = src;

  console.log(src)

  
  screen.append(img);
  img.addEventListener("click", catchPokemon);
}

function getRandomLocation() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  const x = Math.random() * width;
  const y = Math.random() * height;
  return { x, y };
}

function catchPokemon() {
  this.classList.add("caught");
  setTimeout(() => {
    this.remove();
  }, 2000);
  addPokemon();
}

function addPokemon() {
  setTimeout(createPokemon, 1000);
  setTimeout(createPokemon, 1500);
}
