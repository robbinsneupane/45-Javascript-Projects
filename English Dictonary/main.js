const input = document.querySelector("input");
const direction = document.querySelector("#direction");
const content = document.querySelector(".content");
const wordEl = document.querySelector("#word");
const meaning = document.querySelector("#meaning");
const audio = document.querySelector("audio");
const loader = document.querySelector("#loader");

input.addEventListener("keyup", (e) => {
  if (e.target.value === "" && e.key === "Enter") {
    direction.innerText = "Please Enter the Word!";
  } else if (e.target.value && e.key === "Enter") {
    fetchWord(e.target.value);
    direction.style.display = "none";
  }
});

async function fetchWord(word) {
  try {
    content.style.display = "none";

    const resp = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await resp.json();
    content.style.display = "flex";

    if (data.title) {
      wordEl.innerText = word;
      meaning.innerText = `${data.title}`;
      audio.style.display = "none";
    } else {
      wordEl.innerText = data[0].word;
      meaning.innerText = data[0].meanings[0].definitions[0].definition;
      audio.src = data[0].phonetics[0].audio;
    }
  } catch (error) {
    direction.innerText = "An Error Occured";
  }
}
