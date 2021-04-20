const header = document.getElementById("header");

$(window).scroll(function () {
  if ($(window).scrollTop() > 60) {
    header.style.padding = "5px 0px";
    header.style.backgroundColor = "#fff";
    header.classList.add("shadow");
  } else {
    header.style.padding = "20px 0px";
    header.style.backgroundColor = "transparent";
    header.classList.remove("shadow");
  }
});
