const card = document.querySelector(".card");
const like = document.querySelector("#like");

let clickTime = 0;

card.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else if (new Date().getTime() - clickTime < 800) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = new Date().getTime();
  }
});

const createHeart = (e) => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-heart");

  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  i.style.left = `${x}px`;
  i.style.top = `${y}px`;

  card.append(i);

  like.style.color = `rgb(253, 58, 58)`;
  setTimeout(() => i.remove(), 1000);
};
