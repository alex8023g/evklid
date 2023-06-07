const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
});

const menu = document.querySelector(".header__menu-div");
const burgerLine1 = document.querySelector(".burger-line-1");
const burgerLine2 = document.querySelector(".burger-line-2");
const burgerLine3 = document.querySelector(".burger-line-3");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__a");
const btnSrchToOpen = document.querySelector(".search__button-toopen");
const btnSrchToClose = document.querySelector(".search__button-toclose");
const srchDivOpen = document.querySelector(".search__div-open");

menu.addEventListener("click", function () {
  burgerLine1.classList.toggle("burger-line-1-active");
  burgerLine2.classList.toggle("burger-line-2-active");
  burgerLine3.classList.toggle("burger-line-3-active");
  nav.classList.toggle("nav-active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    burgerLine1.classList.toggle("burger-line-1-active");
    burgerLine2.classList.toggle("burger-line-2-active");
    burgerLine3.classList.toggle("burger-line-3-active");
    nav.classList.toggle("nav-active");
  });
});

btnSrchToOpen.addEventListener("click", () => {
  srchDivOpen.style.visibility = "visible";
  srchDivOpen.style.opacity = 1;
});

btnSrchToClose.addEventListener("click", () => {
  srchDivOpen.style.opacity = 0;
  srchDivOpen.style.visibility = "hidden";
});

const tabBtns = document.querySelectorAll(".howwork__btn");
const tabBlocks = document.querySelectorAll(".howwork__div-wrap");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", (click1) => {
    const target = click1.currentTarget.dataset.target;
    tabBlocks.forEach((tab) => {
      tab.classList.add("display-none");
      if (tab.dataset.path == target) tab.classList.remove("display-none");
    });
    tabBtns.forEach((btn2) => {
      btn2.classList.remove("howwork__btn--active");
    });
    click1.currentTarget.classList.add("howwork__btn--active");
  });
});

// accordion

$(function () {
  $("#accordion").accordion({
    header: "button",
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
});

const plusDivs = document.querySelectorAll(".question__plus-div");
const qstBtns = document.querySelectorAll(".question__btn");

qstBtns.forEach((btn) => {
  btn.addEventListener("click", (clk) => {
    if (clk.currentTarget.children[2].classList.contains("rotate45")) {
      clk.currentTarget.children[2].classList.toggle("rotate45");
    } else {
      plusDivs.forEach((el) => el.classList.remove("rotate45"));
      clk.currentTarget.children[2].classList.add("rotate45");
    }
  });
});
