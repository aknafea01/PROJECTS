var btn = document.getElementById("display-icons");
var links = document.querySelectorAll(".link");

btn.onclick = function () {
  if (window.getComputedStyle(btn).transform === "matrix(-1, 0, 0, -1, 0, 0)") {
    btn.style.transform = "rotateZ(0deg)";
    links.forEach(function (el) {
      el.style.visibility = "hidden";
      el.style.opacity = "0";
      el.style.margin = "0 -8px";
    });
  } else {
    btn.style.transform = "rotateZ(180deg)";
    links.forEach(function (el) {
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.style.margin = "0 12px";
    });
  }
};
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
document.querySelector(".t-btn.t-btn1").onclick = function () {
  document.querySelector("#trial").click();
  var copyText = document.getElementById("myInput1");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("modal").innerHTML = copyText.value;
};
document.querySelector(".t-btn.t-btn2").onclick = function () {
  document.querySelector("#trial").click();
  var copyText = document.getElementById("myInput2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("modal").innerHTML = copyText.value;
};
document.querySelector(".t-btn.t-btn3").onclick = function () {
  document.querySelector("#trial").click();
  var copyText = document.getElementById("myInput3");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("modal").innerHTML = copyText.value;
};
