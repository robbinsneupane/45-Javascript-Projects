const clickBtn = document.querySelector("#btn");
const emojiName = document.querySelector("#emojiName");

let URL =
  "https://emoji-api.com/emojis?access_key=2427db78451f1a4e0d6f8f0f3ed23feb16b739ed";

const emojiArr = [];

getEmoji();

async function getEmoji() {
  let response = await fetch(URL);
  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emojiArr.push({
      emojiFace: data[i].character,
      emojiName: data[i].unicodeName,
    });
  }
}

clickBtn.addEventListener("click", () => {
  let randomEmoji = Math.floor(Math.random() * emojiArr.length);
  clickBtn.innerText = emojiArr[randomEmoji].emojiFace;
  emojiName.innerText = emojiArr[randomEmoji].emojiName;
});
getEmoji();

console.log(emojiArr);
