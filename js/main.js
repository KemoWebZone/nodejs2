let div = document.getElementById("number");
let close2 = document.getElementById("close");
let result = document.getElementById("result");
let dateNow = new Date();
let birthday = year;
let year2;
let month2;
let day2;

function number() {
  alert("kemo number\n +966 55 591 1754");
}

function close() {
  div.style.display = "none";
}
function numberAR() {
  alert("رقم كريم \n +966 55 591 1754");
}

function calc() {
  var d1 = document.getElementById("day").value;
  var m1 = document.getElementById("month").value;
  var y1 = document.getElementById("year").value;

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  result.innerHTML = y + "Years    " + m + "month    " + d + "days    ";
  console.log(y + " Years    " + m + " month    " + d + " days    ");
}
