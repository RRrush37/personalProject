$(function () {
  const rentMenu = document.getElementsByClassName("rentMenu");
  const rentMenuItem = document.getElementsByClassName("rentMenuItem");
  const rentItem = document.getElementsByClassName("rentItem");
  for (let i = 0; i < 4; i++) {
    rentMenuItem[i].addEventListener("click", () => {
      rentItem[i].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }
  document.addEventListener("scroll", () => {
    // rentMenuItem.innerHTML = window.pageYOffset;
    rentMenu[0].style.top = `calc(${window.pageYOffset}px + 40vh`;
  });
});
