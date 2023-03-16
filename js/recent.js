$(function () {
  $(".nav").load("../nav.html");
  $(".footer").load("../footer.html");

  const newsClass = document.getElementsByClassName("newsClass");
  const whiteArea = document.getElementById("whiteArea");
  const newsContent = document.getElementsByClassName("newsContent");
  for (let i = 0; i < 3; i++) {
    newsClass[i].addEventListener("click", () => {
      whiteArea.style.left = i * 120 + "px";
      $(".newsContent").css({ opacity: 0 });
      $(".newsContent").hide();
      newsContent[i].style.display = "block";
      setTimeout(() => {
        newsContent[i].style.opacity = 1;
      }, 10);
    });
  }
});
