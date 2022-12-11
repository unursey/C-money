import { getElements } from "./getElements.js";
import { validName } from "./valid.js";
import { maskPhone } from "./valid.js";
import { validEmail } from "./valid.js";
import { validAuth } from "./valid.js";

const {
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
  page,
} = getElements();

export const valid = () => {
  nameInput.forEach((item) => {
    item.addEventListener("input", (e) => {
      validName(e);
    });
  });
  authInput.forEach((item) => {
    item.addEventListener("input", (e) => {
      validAuth(e);
    });
  });
  maskPhone(phoneInput);
};

const isValue = (item) => {
    if (item.value !== '') {
        return true;
    } else {
        return false;
    }
};

export const checkStep = () => {
  form.addEventListener('input', () => {
    if (Array.from(nameInput).every(isValue)) {
        btnOne.disabled = false;
    } else {
        btnOne.disabled = true;
    }
    if (Array.from(contactInput).every(isValue)) {
        btnTwo.disabled = false;
    } else {
        btnTwo.disabled = true;
    }
    if ((Array.from(authInput).every(isValue)) &&
    (passInput.value === againpassInput.value) &&
    (checkbox.checked)) {
        btnThree.disabled = false;
    } else {
        btnThree.disabled = true;
    }   
  });
};

export const btnSubmit = () => {
  btnForm.forEach((btn) => {   
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.blur();
      if (e.target === btnThree) {
        endStep();
      }
      if (e.target === btnTwo && (validEmail(emailInput))) {
        threeStep();
      } else if (e.target === btnTwo && !(validEmail(emailInput))) {
        emailInput.style.border = '1px solid #ee8891';
      }
      if (e.target === btnOne) {
        twoStep();
      }
    });
  });
};

export const tabChange = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
        if ((e.target === tabOne) &&
        (Array.from(nameInput).every(isValue))) {
          oneStep();
        }
        if ((e.target === tabTwo) &&
        (Array.from(nameInput).every(isValue)) &&
        (Array.from(contactInput).every(isValue))) {
          twoStep();
        }
        if ((e.target === tabThree) &&
        (Array.from(nameInput).every(isValue)) &&
        (Array.from(contactInput).every(isValue)) &&
        (Array.from(authInput).every(isValue))) {
          threeStep();
        }
    })
  })  
};

const oneStep = () => {
  blockOne.classList.remove("visually-hidden");
  blockTwo.classList.add("visually-hidden");
  blockThree.classList.add("visually-hidden");
  tabOne.classList.add("regist__tab_active");
  tabTwo.classList.remove("regist__tab_active");
  tabThree.classList.remove("regist__tab_active");
};

const twoStep = () => {
  blockOne.classList.add("visually-hidden");
  blockTwo.classList.remove("visually-hidden");
  blockThree.classList.add("visually-hidden");
  tabOne.classList.remove("regist__tab_active");
  tabTwo.classList.add("regist__tab_active");
  tabThree.classList.remove("regist__tab_active");
};

const threeStep = () => {
  blockOne.classList.add("visually-hidden");
  blockTwo.classList.add("visually-hidden");
  blockThree.classList.remove("visually-hidden");
  tabOne.classList.remove("regist__tab_active");
  tabTwo.classList.remove("regist__tab_active");
  tabThree.classList.add("regist__tab_active");
};

const endStep = () => {
  page.querySelector('.regist__container').classList.add('hide');
  page.querySelector('.regist__sussess-container').classList.remove('hide');
};