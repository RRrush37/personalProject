$(function () {
  $("#nav").load("../nav.html");
  $(".footer").load("../footer.html");
  $(".QA ul").click(function () {
    // this.nextElementSibling.style.height = "auto";
    $(this).children(".answer").toggleClass("autoHeight");
    $(this).children(".triangle").toggleClass("rotate");
  });
});
