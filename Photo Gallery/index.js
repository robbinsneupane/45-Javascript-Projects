const btn = document.querySelector("#btn");
const gallery = document.querySelector(".gallery");
const errorEl = document.querySelector(".error");

btn.addEventListener("click", getPhoto);

async function getPhoto() {
  const inputValue = +document.querySelector("input").value;

  if (inputValue > 10 || inputValue < 1) {
    errorEl.innerText = "The number must be between 1 and 10";
    return;
  }
  try {
    const image = await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 10000
      )}&client_id=3IxNKCmnuCjwSkrOHv1m9_W_x7KBcOphnMT5R6bHroA`
    );
    const resp = await image.json();
    errorEl.innerText = "";
    updateImage(resp);
    gallery.style.display = "flex";
  } catch (error) {
    errorEl.innerText = "Error fetching image";
  }
}

function updateImage(resp) {
  for (let i = 0; i < resp.length; i++) {
    const img = document.createElement("img");
    img.src = resp[i].urls.full;

    gallery.appendChild(img);
  }
}
