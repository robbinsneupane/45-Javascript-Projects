const headerImg = document.querySelector(".header");
const title = document.querySelector(".text h3");
const body = document.querySelector(".text p");
const authorImg = document.querySelector(".profileImg");
const authorName = document.querySelector(".author strong");
const date = document.querySelector(".author small");

const animatedBg = document.querySelectorAll(".animated-bg");
const animatedTextBg = document.querySelectorAll(".animated-text-bg");

function getData() {
  headerImg.innerHTML = `<img src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt=""/>`;

  title.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit?`;

  body.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis officia assumenda quam repudiandae consequatur dolorum`;

  authorImg.innerHTML = `<img src="https://images.unsplash.com/photo-1671571943834-99f265750839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt=""/>
    `;

  authorName.innerText = ` Robina Skywalker`;
  date.innerText = ` Dec 24, 2022`;

  animatedBg.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animatedTextBg.forEach((bg) => {
    bg.classList.remove("animated-text-bg");
  });
}

setTimeout(getData, 3000);
