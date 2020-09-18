import Captcha from "./src/captcha.vue";

Captcha.install = Vue => {
    Vue.component(Captcha.name, Captcha);
};

export default Captcha;
