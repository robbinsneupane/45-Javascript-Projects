const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, ind) =>
        ` <span style="transition-delay:${ind * 50}ms">${letter}
          </span> `
    )
    .join("");
});
