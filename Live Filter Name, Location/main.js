const resultsEl = document.querySelector(".results");
const filter = document.querySelector("#filter");

let URL = "https://randomuser.me/api?results=500";

let userList = [];

filter.addEventListener("input", (e) => filterUser(e.target.value));

async function getUser() {
  const res = await fetch(URL);
  const { results } = await res.json();

  resultsEl.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("details");

    userList.push(li);

    const img = document.createElement("img");
    img.src = `${user.picture.large}`;
    li.append(img);

    const div = document.createElement("div");
    div.classList.add("user");
    li.append(div);

    const h4 = document.createElement("h4");
    h4.innerText = `${user.name.first} ${user.name.last}`;
    div.append(h4);

    const small = document.createElement("small");
    small.innerText = `${user.location.city}, ${user.location.country}`;
    div.append(small);
    resultsEl.append(li);
  });
}
getUser();

function filterUser(input) {
  userList.forEach((user) => {
    if (user.innerText.toLowerCase().includes(input.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}
