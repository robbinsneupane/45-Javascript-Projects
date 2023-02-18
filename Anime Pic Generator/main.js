const dataDiv = document.querySelector(".data");
const img = document.querySelector("img");
const h3 = document.querySelector("h3");
const button = document.querySelector("button");

let URL = "https://api.catboys.com/img";

const getAnime = async () => {
  try {
    img.src = "loader.svg";
    button.disabled = true;

    let resp = await fetch(URL);
    let data = await resp.json();

    img.src = data.url;
    h3.innerText = data.artist;

    button.disabled = false;
  } catch (error) {
    console.log(error);
    h3.innerText = "Error Occurs ! Please Try Again.";
  }
};

button.addEventListener("click", () => {
  dataDiv.classList.add("active");
  getAnime();
});
