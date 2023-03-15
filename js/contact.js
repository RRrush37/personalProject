$(document).ready(
  $(function () {
    $(".nav").load("../nav.html");
    $(".footer").load("../footer.html");
  })
);

function submitform() {
  let dataArray = $("#form").serializeArray();
  let dataObj = [];
  $(dataArray).each(function (i, field) {
    dataObj[field.name] = field.value;
  });
  alert(`
  姓名：${dataObj["name"]}
  email：${dataObj["email"]}
  性別：${dataObj["gender"]}
  您的意見：${dataObj["feedback"]}
  已收到您的回饋！近期煩請留意信箱是否有我們的回信，感謝您！
  `);
}
