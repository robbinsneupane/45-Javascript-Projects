const container = document.querySelectorAll(".container");

container.forEach((container) => {
  container.addEventListener("mouseover", (e) => {
    container.classList.add("active");
  });
});

container.forEach((container) => {
  container.addEventListener("mouseout", () => {
    container.classList.remove("active");
  });
});
