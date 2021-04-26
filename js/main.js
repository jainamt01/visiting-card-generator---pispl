//
//
//
// navbar
const nav = document.getElementById("nav");

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    nav.style.marginTop = "0px";
    nav.style.backgroundColor = "#FFFFFF";
    nav.classList.add("shadow");
  } else {
    nav.style.marginTop = "20px";
    nav.style.backgroundColor = "transparent";
    nav.classList.remove("shadow");
  }
});

//
//
//
//
// front back preview

const frontPath = document.getElementById("front").src;
const backPath = document.getElementById("back").src;

const front = document.getElementById("front");
const back = document.getElementById("back");

front.addEventListener("click", function () {
  document.getElementById("preview").src = frontPath;
});

back.addEventListener("click", function () {
  document.getElementById("preview").src = backPath;
});

//
//
//
//
// download btn

const download = document.getElementById("downloadBtnFree");
const overlay = document.querySelector(".overlay");
const popup = document.getElementById("popUP");
const submit = document.getElementById("formSubmitBtn");
const close = document.getElementById("close");

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

download.addEventListener("click", function () {
  overlay.style.display = "block";
  popup.style.visibility = "visible";
  popup.style.opacity = "1";
  nav.style.display = "none";
  disableScrolling();
});

close.addEventListener("click", function () {
  overlay.style.display = "none";
  popup.style.visibility = "hidden";
  popup.style.opacity = "0";
  nav.style.display = "block";
  enableScrolling();
});

function getName() {
  let x = document.getElementById("getCardName").innerText;
  document.getElementById("setCardName").innerText = x;
}

getName();
