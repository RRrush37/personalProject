$(function () {
  $(".nav").load("../nav.html");
  $(".footer").load("../footer.html");
  let showActor = "";
  document.getElementById("okBTN").addEventListener("click", (e) => {
    closeButton();
    if (showActor === "okDiv") return;
    if (showActor) {
      $(`.${showActor}`).toggleClass("manSlideIn");
      setTimeout(() => {
        $(".okDiv").toggleClass("manSlideIn");
      }, 1000);
    } else {
      $(".okDiv").toggleClass("manSlideIn");
    }
    showActor = "okDiv";
  });

  document.getElementById("GinoBTN").addEventListener("click", (e) => {
    closeButton();
    if (showActor === "GinoDiv") return;
    if (showActor) {
      $(`.${showActor}`).toggleClass("manSlideIn");
      setTimeout(() => {
        $(".GinoDiv").toggleClass("manSlideIn");
      }, 1000);
    } else {
      $(".GinoDiv").toggleClass("manSlideIn");
    }
    showActor = "GinoDiv";
  });

  document.getElementById("bigBTN").addEventListener("click", (e) => {
    closeButton();
    if (showActor === "bigDiv") return;
    if (showActor) {
      $(`.${showActor}`).toggleClass("manSlideIn");
      setTimeout(() => {
        $(".bigDiv").toggleClass("manSlideIn");
      }, 1000);
    } else {
      $(".bigDiv").toggleClass("manSlideIn");
    }
    showActor = "bigDiv";
  });

  document.getElementById("backToBTN").addEventListener("click", (e) => {
    backToBTN();
  });

  function backToBTN() {
    $(".actorBTN").removeClass("btnDisappear");
    $(".buttonArea").removeClass("divDisappear");
    if (showActor) {
      $(`.${showActor}`).toggleClass("manSlideIn");
      showActor = "";
    }
  }
});

function closeButton() {
  $(".actorBTN").addClass("btnDisappear");
  $(".buttonArea").addClass("divDisappear");
}
