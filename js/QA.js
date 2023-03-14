$(function () {
  $(".nav").load("../nav.html");
  $(".footer").load("../footer.html");
  $(".triangle").click(function () {
    // this.nextElementSibling.style.height = "auto";
    $(this.nextElementSibling.nextElementSibling).toggleClass("autoHeight");
    $(this).toggleClass("rotate");
  });
});
