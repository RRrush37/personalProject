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
  name：${dataObj["name"]}
  email：${dataObj["email"]}
  gender：${dataObj["gender"]}
  `);
}
