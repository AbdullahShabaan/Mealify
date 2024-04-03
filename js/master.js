// dark mode
let darkBtn = document.querySelector(".darkMode");
let darkMode = document.querySelector(".icons .fa-moon");
let lightMode = document.querySelector(".icons .fa-sun");
let root = document.documentElement;
darkBtn.addEventListener("click", function () {
  if (root.classList.contains("dark-mode")) {
    lightMode.style.display = "none";
    darkMode.style.display = "inline-block";
  } else {
    lightMode.style.display = "inline-block";
    darkMode.style.display = "none";
  }
  root.classList.toggle("dark-mode");

  // store data in local storage
  if (root.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "on");
  } else {
    localStorage.setItem("dark-mode", "off");
  }
});

// check if local storage dark mode off or on
window.onload = function () {
  if (localStorage.getItem("dark-mode") == "on") {
    root.classList.add("dark-mode");
    lightMode.style.display = "inline-block";
    darkMode.style.display = "none";
  } else {
    root.classList.remove("dark-mode");
    lightMode.style.display = "none";
    darkMode.style.display = "inline-block";
  }
};

// toggle menu
let toggleMenu = document.querySelector(".icons .fa-bars");
let nav = document.querySelector("nav");
let exitMenu = document.querySelector("nav ul .fa-xmark");
let overlay = document.querySelector(".overlay");

toggleMenu.addEventListener("click", function () {
  nav.classList.add("click");
  overlay.classList.add("active");
});

exitMenu.addEventListener("click", function () {
  nav.classList.remove("click");
  overlay.classList.remove("active");
});

// dynamic header link color change based on section

let sections = document.querySelectorAll(".section");
let headerLinks = document.querySelectorAll("header ul li a");
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset - 20 && top < offset + height) {
      headerLinks.forEach((a) => {
        a.classList.remove("active");
        document
          .querySelector("header ul li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});
