<template>
    <img :src="dataUrl" alt="验证码" :style="{ width: `${width}px`, height: `${height}px`, cursor: `pointer` }" @click="refresh" />
</template>
<script>
import gvcode from "gvcode";
export default {
    name: "FoxCaptcha",
    props: {
        width: { type: Number, default: 100 },
        height: { type: Number, default: 30 },
        type: {
            type: String,
            validator(value) {
                return ["letter", "digital"].includes(value);
            },
        },
    },
    data() {
        return { dataUrl: "" };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const conf = { width: this.width, height: this.height };
            if (this.type !== undefined) {
                conf["type"] = this.type;
            }
            this.instance = gvcode(conf);
            this.dataUrl = this.instance.value();
        },
        refresh(ev) {
            const s = this.instance.refresh();
            ev.target.src = s;
        },
        validate(code) {
            return this.instance.validate(code);
        },
    },
};
</script>
