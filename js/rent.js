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

  let main = document.querySelectorAll(".rentItem");
  let mouseTop, mouseLeft, eleTop, eleLeft, nowTop, nowLeft;
  for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("mousedown", function (e) {
      mouseTop = e.pageY;
      mouseLeft = e.pageX;
      eleTop = this.getBoundingClientRect().top;
      eleLeft = this.getBoundingClientRect().left;
      nowTop = Number(this.style.top.split("p")[0]);
      nowLeft = Number(this.style.left.split("p")[0]);
    });
    main[i].addEventListener("drag", function (e) {
      console.log("X : " + e.pageX);
      console.log("Y : " + e.pageY);
      console.log("window.scrollY : " + window.scrollY);
      if (
        (e.pageX > window.scrollX + 5 || e.pageX < window.scrollX - 5) &&
        (e.pageY > window.scrollY + 5 || e.pageY < window.scrollY - 5)
      ) {
        console.log("X : " + e.pageX);
        console.log("Y : " + e.pageY);
        console.log("window.scrollY : " + window.scrollY);
        console.log("window.scrollX : " + window.scrollX);
        let pageY = e.clientY || e.pageY;
        let pageX = e.clientX || e.pageX;
        this.style.top = window.scrollY + nowTop + pageY - mouseTop + "px";
        this.style.left = window.scrollX + nowLeft + pageX - mouseLeft + "px";
      }
    });
  }
});
