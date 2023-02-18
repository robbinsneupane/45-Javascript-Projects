const emoji = document.querySelectorAll(".fa-regular");
const stars = document.querySelectorAll(".fa-star");

stars.forEach((star, ind) => {
  star.addEventListener("click", () => {
    updateRating(ind);
    updateEmoji(ind);
  });
});

function updateEmoji(ind) {
  emoji.forEach((emot) => {
    emot.style.transform = `translateX(-${ind * 4}rem)`;
  });
}

function updateRating(ind) {
  stars.forEach((star, idx) => {
    if (idx < ind + 1) {
      star.classList.add("active");
    } else star.classList.remove("active");
  });
}
