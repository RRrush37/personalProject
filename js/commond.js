$(document).ready(function () {
  setTimeout(() => {
    $(window).scrollTop(0);
  }, 100);
  setTimeout(() => {
    // document.addEventListener("scroll", function (e) {
    $(".start").css({
      opacity: "0",
      "background-color": "rgba(244, 236, 230, .5)",
    });
    // if (window.scrollY >= 50) {
    document.getElementById("nav").style.top = 0;
    document.getElementById("playImg").style.left = 0;
    $(".homeTitle").addClass("homeTitleFadeOut");

    document.getElementById("myVideo").style.opacity = 0.9;
    document.getElementById("footer").style.opacity = 1;
    // }
    // });
    document.addEventListener("scroll", function (e) {
      if (
        window.scrollY >=
        $(".contentList")[0].getBoundingClientRect().top + 10
      ) {
        $(".contentItem").css("transform", "scale(1)");
      } else if (
        window.scrollY <
        $(".contentList")[0].getBoundingClientRect().top - 100
      ) {
        $(".contentItem").css("transform", "scale(0)");
      }
      if (
        window.scrollY >=
        $(".photoList")[0].getBoundingClientRect().top + 10
      ) {
        $(".photoItem").css("transform", "scale(1)");
      } else if (
        window.scrollY <
        $(".photoList")[0].getBoundingClientRect().top - 100
      ) {
        $(".photoItem").css("transform", "scale(0)");
      }
    });
  }, 200);
  setTimeout(() => {
    $(".start").css({ "z-index": "-1", opacity: ".01" });
  }, 3000);
  setTimeout(() => {
    $(".start").css({ opacity: "1" });
  }, 3500);
  for (let i = 0; i <= 3; i++)
    setTimeout(() => {
      if (i % 2 == 1) {
        $(".titleItem")[i].style.transform = "rotate(7deg)";
      } else {
        $(".titleItem")[i].style.transform = "rotate(-7deg)";
      }
    }, 3000 + 500 * i);
});
