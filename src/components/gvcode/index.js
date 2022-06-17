import Captcha from "./src/captcha.vue";

export { Captcha };

export default {
    install: app => {
        app.component(Captcha.name, Captcha);
    },
};
