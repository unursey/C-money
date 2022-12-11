import {
    addOpenBurger, 
    addCloseBurger,
} from './control.js';
import {swiper} from './slider.js';
import {valid} from './form.js';
import {checkStep} from './form.js';
import {btnSubmit} from './form.js';
import {tabChange} from './form.js';

export const init = () => {
    addOpenBurger();
    addCloseBurger();
    valid();
    checkStep();
    btnSubmit();
    tabChange();
    swiper;
}

