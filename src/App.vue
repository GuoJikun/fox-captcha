<template>
    <div>
        <div class="container">
            <div>
                <h1>基础用法</h1>
                <div>
                    <FoxGVCode ref="imgCode" />
                    <div>
                        <input type="text" v-model="val" />
                        <button @click="checkCode" class="ml-20">校验验证码</button>
                    </div>
                </div>
            </div>
            <div>
                <h1>设置验证码的类别</h1>
                <p>
                    通过
                    <code>type</code>
                    设置验证码的类别
                </p>
                <div>
                    <div>
                        <h2>数字类型验证码</h2>

                        <FoxGVCode type="digital" />
                    </div>
                    <div>
                        <h2>字母类型验证码</h2>

                        <FoxGVCode type="letter" />
                    </div>
                </div>
            </div>
            <div>
                <h1>设置验证码的大小</h1>
                <p>
                    通过
                    <code>width</code>
                    和
                    <code>height</code>
                    设置验证码的大小
                </p>
                <div>
                    <FoxGVCode :width="100" :height="40" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FoxGVCode from "./components/gvcode";
import codeImage from "./assets/codeImage.png";
export default {
    name: "App",
    components: { FoxGVCode },
    data() {
        return { codeImage, val: "" };
    },
    mounted() {
        /* const canvas = document.querySelector("#canvas"); const ctx = canvas.getContext("2d");
ctx.beginPath(); ctx.fillStyle = "rgba(60, 60, 60, 0.2)"; ctx.fillRect(0, 0, 400, 250); const location = { x: 240, y: 60, width: 80, height:
60, }; ctx.moveTo(240, 60); ctx.lineTo(240, 120); ctx.lineTo(320, 120); ctx.lineTo(320, 60); ctx.lineTo(300, 60); ctx.moveTo(314, 60); ctx.arc(314,
54, 16, 0, 2 * Math.PI, true); ctx.strokeStyle = "blue"; ctx.stroke(); console.log(location); */
    },
    methods: {
        checkCode() {
            const flag = this.$refs.imgCode.validate(this.val);
            alert(`验证码校验${flag ? "通过" : "失败"}`);
        },
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100vw;
    background-color: #fefefe;
}
.container {
    width: 800px;
    margin: 0 auto;
    background-color: #fff;
    font-size: 14px;
}
h1,
h2 {
    font-weight: 600;
}
h1 {
    font-size: 16px;
}
h2 {
    font-size: 14px;
}
code {
    margin: 0 5px;
    font-size: 13px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    background-color: #e3e3e3;
    display: inline-flex;
    padding: 2px 6px;
    border-radius: 2px;
    font-style: italic;
}
input {
    width: 210px;
    height: 34px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    outline: none;
    padding: 0 10px;
    background-color: #fff;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
}
input:focus {
    outline: none;
    border-color: #409eff;
}
button {
    height: 34px;
    background-color: #409eff;
    box-sizing: border-box;
    border: 1px solid #409eff;
    color: white;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0 20px;
}
button:hover,
button:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
}
button:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
}
.ml-20 {
    margin-left: 20px;
}
</style>
