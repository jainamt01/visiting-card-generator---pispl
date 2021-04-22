const nav = document.getElementById("nav");

if (window.matchMedia("(min-width: 1200px)").matches) {
  /* The viewport is less than, or equal to, 1200 pixels wide */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      nav.style.padding = "10px 100px";
      nav.style.backgroundColor = "#fff";
      nav.classList.add("shadow");
    } else {
      nav.style.padding = "20px 100px";
      nav.style.backgroundColor = "transparent";
      nav.classList.remove("shadow");
    }
  });
} else {
  /* The viewport is greater than 700 pixels wide */
  //   nav.style.padding = "20px 100px";
}

// for 700 and below

if (window.matchMedia("(min-width: 700px)").matches) {
  /* The viewport is less than, or equal to, 700 pixels wide */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      nav.style.padding = "0px 100px";
      nav.style.backgroundColor = "#fff";
      nav.classList.add("shadow");
    } else {
      nav.style.padding = "20px 100px";
      nav.style.backgroundColor = "transparent";
      nav.classList.remove("shadow");
    }
  });
} else {
  /* The viewport is greater than 700 pixels wide */
  //   nav.style.padding = "20px 100px";
}

if (window.matchMedia("(max-width: 600px)").matches) {
  /* The viewport is less than, or equal to, 700 pixels wide */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      nav.style.padding = "0px 30px";
      nav.style.backgroundColor = "#fff";
      nav.classList.add("shadow");
    } else {
      nav.style.padding = "10px 0px";
      nav.style.backgroundColor = "transparent";
      nav.classList.remove("shadow");
    }
  });
} else {
  /* The viewport is greater than 700 pixels wide */
}
