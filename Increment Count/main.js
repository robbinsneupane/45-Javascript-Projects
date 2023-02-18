const count = document.querySelectorAll("h1");

count.forEach((item) => {
  item.innerText = 0;

  const update = () => {
    let data = +item.getAttribute("data-count");
    let actualData = +item.innerText;
    let increment = Math.trunc(data / 2);

    if (actualData < data) {
      item.innerText = actualData + increment;
    } else {
      item.innerText = data;
    }
    setTimeout(update, 80);
  };
  update();
});
