const reviewSection = document.querySelector("section");
const review = document.querySelector(".review");
const emotion = document.querySelectorAll(".emotion");
const button = document.querySelector("#submitBtn");
const feedback = document.querySelector("#feedback");
const popUp = document.querySelector(".thanks");

let feedbackGiven = "Satisfied";

review.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("emotion")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    feedbackGiven = e.target.parentNode.lastElementChild.innerText;
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  reviewSection.style.display = "none";
  feedback.innerText = `Your Feedback: ${feedbackGiven}`;
});

function removeActive() {
  emotion.forEach((emot) => {
    emot.classList.remove("active");
  });
}
