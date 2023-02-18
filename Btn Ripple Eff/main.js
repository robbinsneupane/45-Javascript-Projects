const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  let xPosition = e.pageX - btn.offsetLeft;
  let yPosition = e.pageY - btn.offsetTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  btn.appendChild(circle);

  circle.style.top = yPosition + "px";
  circle.style.left = xPosition + "px";

  setTimeout(() => {
    circle.remove();
  }, 500);
});
