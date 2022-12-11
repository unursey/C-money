export const getElements = () => {
    const page = document.querySelector('.page');
    const btnBurger = page.querySelector(".header__button-nav");
    const burger = page.querySelector(".burger");
    const burgerMenu = page.querySelector(".burger__container");

    const form = page.querySelector(".regist__form");
    const nameInput = form.querySelectorAll(".regist__input-name");
    const contactInput = form.querySelectorAll(".regist__input-contact");
    const authInput = form.querySelectorAll(".regist__input-pass");

    const phoneInput = form.querySelector(".regist__input-phone");
    const emailInput = form.querySelector(".regist__input-email");
    const passInput = form.querySelector(".regist__input-pass");
    const againpassInput = form.querySelector(".regist__input-againpass");

    const blockOne = form.querySelector(".regist__block-one");
    const blockTwo = form.querySelector(".regist__block-two");
    const blockThree = form.querySelector(".regist__block-three");

    const btnOne = form.querySelector(".regist__button-one");
    const btnTwo = form.querySelector(".regist__button-two");
    const btnThree = form.querySelector(".regist__button-three");

    const btnForm = form.querySelectorAll('.regist__button');

    const tabs = page.querySelectorAll(".regist__tab");
    const tabOne = page.querySelector(".regist__tab-one");
    const tabTwo = page.querySelector(".regist__tab-two");
    const tabThree = page.querySelector(".regist__tab-three");

    const checkbox = page.querySelector(".regist__input-checkbox");

  
    return {
      btnBurger,
      burger,
      page,
      burgerMenu,
      form,
      nameInput,
      contactInput,
      authInput,
      phoneInput,
      emailInput,
      passInput,
      againpassInput,
      blockOne,
      blockTwo,
      blockThree,
      btnOne,
      btnTwo,
      btnThree,
      btnForm,
      tabs,
      tabOne,
      tabTwo,
      tabThree,
      checkbox,
    };
  };
  