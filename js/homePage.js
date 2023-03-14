$(function () {
  $(".nav").load("../nav.html");
  $(".footer").load("../footer.html");
  let nowActImg = 0;
  let switchLeft = document.getElementById("leftArrow");
  let switchRight = document.getElementById("rightArrow");
  let moving = false;
  let slideTime = 0;
  let bigImgBG = document.getElementById("bigImgBG");

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
