const followers = document.querySelectorAll("h1");
console.log(followers.length);

followers.forEach((follower) => {
  follower.innerText = 0;

  const updateCount = () => {
    const target = +follower.getAttribute("data-target");
    let c = +follower.innerText;
    let increment = target / 200;

    if (c < target) {
      follower.innerText = c + increment;
      setTimeout(updateCount, 1);
    } else {
      follower.innerText = target;
    }
  };
  updateCount();
});
