import { getElements } from "./getElements.js";

const { btnBurger, burger, page } = getElements();

const changeBtnBurger = () => {
  const buttonIcon = document.querySelector(".header__button-icon");
  const buttonClose = document.querySelector(".header__button-close");
  buttonIcon.classList.toggle("header__button-icon_hide");
  buttonClose.classList.toggle("header__button-close_hide");
};

const closeBurger = () => {
  if (burger.classList.contains("burger_visible")) {
    burger.classList.remove("burger_visible");
    changeBtnBurger();
  }
};

export const addOpenBurger = () => {
  btnBurger.addEventListener("click", () => {
    burger.classList.toggle("burger_visible");

    changeBtnBurger();
    pageOverfow();
  });
};

export const addCloseBurger = () => {
  page.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("burger") ||
      e.target.closest(".burger") ||
      e.target.classList.contains("header__container")
    ) {
      closeBurger();
      pageOverfow();
    }
  });
};

const pageOverfow = () => {
  const bodyWidth = page.offsetWidth;
  if (
    burger.classList.contains("burger_visible")
  ) { 
    page.style.overflow = "hidden";
    page.style.marginRight = `${getScrollBarSize(bodyWidth)}px`;
  } else { 
      page.style.overflow = "";
      page.style.marginRight = "";
  }
};

const getScrollBarSize = (bodyWidth) => {
  let newBodyWidth = page.offsetWidth;

  if (newBodyWidth === bodyWidth) {
    return;
  }
  const x = newBodyWidth - bodyWidth;
  return x;
};

