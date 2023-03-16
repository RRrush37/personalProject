$(function () {
  let nowActImg = 0;
  let switchLeft = document.getElementById("leftArrow");
  let switchRight = document.getElementById("rightArrow");
  let moving = false;
  let slideTime = 0;
  let bigImgBG = document.getElementById("bigImgBG");

  setTimeout(() => {
    $(window).scroll(0, 0);
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

  //跑馬燈效果
  setInterval(() => {
    if (!document.hasFocus() || bigImgBG.style.opacity > 0) return;
    slideTime++;
    if (slideTime === 5) switchRight.click();
  }, 1000);

  //左箭頭
  switchRight.addEventListener("click", (e) => {
    slideTime = 0;
    if (moving) return;
    moving = true;
    document.getElementById("activity" + nowActImg).style.zIndex = "1";
    document.getElementById("activity" + nowActImg).style.left = "-100%";
    nowActImg = (nowActImg + 2) % 3;
    document.getElementById("activity" + nowActImg).style.zIndex = "1";
    document.getElementById("activity" + nowActImg).style.left = "0";
    document.getElementById("activity" + ((nowActImg + 2) % 3)).style.zIndex =
      "-1";
    document.getElementById("activity" + ((nowActImg + 2) % 3)).style.left =
      "100%";
    setTimeout(() => {
      moving = false;
    }, 1000);
  });

  //右箭頭
  switchLeft.addEventListener("click", (e) => {
    slideTime = 0;
    if (moving) return;
    moving = true;
    document.getElementById("activity" + nowActImg).style.zIndex = "1";
    document.getElementById("activity" + nowActImg).style.left = "100%";
    nowActImg = (nowActImg + 1) % 3;
    document.getElementById("activity" + nowActImg).style.zIndex = "1";
    document.getElementById("activity" + nowActImg).style.left = "0";
    document.getElementById("activity" + ((nowActImg + 1) % 3)).style.zIndex =
      "-1";
    document.getElementById("activity" + ((nowActImg + 1) % 3)).style.left =
      "-100%";
    setTimeout(() => {
      moving = false;
    }, 1000);
  });

  let actImg = document.getElementsByClassName("actImg");
  for (let ele of actImg) {
    ele.addEventListener("click", function (e) {
      bigImgBG.style.opacity = 1;
      bigImgBG.style.pointerEvents = "auto";
      bigImgBG.innerHTML = `<img src="img/${this.id}.jpg" class="bigImg" />`;
    });
  }

  //點擊大照片關閉
  bigImgBG.addEventListener("click", (e) => {
    bigImgBG.style.opacity = 0;
    bigImgBG.style.pointerEvents = "none";
  });
});
