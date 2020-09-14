import GVCode from "./src/gvcode.js";

GVCode.install = Vue => {
    Vue.component(GVCode.name, GVCode);
};

export default GVCode;
