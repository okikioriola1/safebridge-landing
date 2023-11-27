import "./style.scss";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";

new Glide(".glide", {
  type: "carousel",
  autoplay: 4000,
  perView: 1,
  focusAt: "1",
  // startAt:'',

  breakpoints: {
    1024: {
      perView: 1,
    },
    600: {
      perView: 1,
    },
  },
}).mount();

const mobileNavElements = document.querySelector(".mobile-nav-dropdown");
const menuBarIcon = document.querySelector("#menuToggle");
const closeIcon = document.querySelector(".close-icon");

menuBarIcon.addEventListener("click", function () {
  mobileNavElements.classList.toggle("active");
});

closeIcon.addEventListener("click", function () {
  mobileNavElements.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const buyerBtn = document.getElementById("buyerBtn");
  const sellerBtn = document.getElementById("sellerBtn");
  const switchActive = document.querySelector(".switch-active");

  buyerBtn.addEventListener("click", function () {
    // buyerBtn.classList.add("active");
    // sellerBtn.classList.remove("active");
    switchActive.style.left = "6px";
    buyerBtn.style.color = "black";
    sellerBtn.style.color = "rgba(23, 27, 32, 0.32)";
  });

  sellerBtn.addEventListener("click", function () {
    // sellerBtn.classList.add("active");
    // buyerBtn.classList.remove("active");
    switchActive.style.left = "130px";
    sellerBtn.style.color = "black";
    buyerBtn.style.color = "rgba(23, 27, 32, 0.32)";
  });
});
