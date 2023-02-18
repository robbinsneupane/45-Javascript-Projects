const search = document.querySelector(".search");
const profile = document.querySelector(".profile");
const form = document.querySelector("form");

const APIURL = "https://api.github.com/users/";

async function getUser(username) {
  const response = await fetch(APIURL + username);
  const data = await response.json();
  try {
    updateUser(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      updateError("User not found");
    }
  }
}

function updateUser(data) {
  profile.innerHTML = `
        <img
        src="${data.avatar_url}"
      />
      <div class="profileInfo">
        <h1 id="name">${data.name}</h1>
        <p id="job">
        ${data.bio}</p>
        <ul class="details">
          <li id="folowers">${data.followers} Followers</li>
          <li id="following">${data.following} Follwoing</li>
          <li id="repos">${data.public_repos} Repos</li>
        </ul>
        <div class="repos">
        </div>
      </div>
    `;
}

async function getRepos(username) {
  const response = await fetch(APIURL + username + "/repos?sort=created");
  const data = await response.json();
  try {
    updateRepos(data);
  } catch (err) {
    updateError("Problem Fetching Repos");
  }
}

function updateRepos(data) {
  const reposEl = document.querySelector(".repos");

  data.forEach((repo) => {
    const a = document.createElement("a");
    a.href = repo.html_url;
    a.innerText = repo.name;
    a.target = "_blank";
    reposEl.append(a);
  });
}

function updateError(msg) {
  profile.innerHTML = `
    <h1 class="error">${msg}</h1>
  `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  profile.style.opacity = 1;

  if (search.value != "") {
    getUser(search.value);
    search.value = "";
  }
});
