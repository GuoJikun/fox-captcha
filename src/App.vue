<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <FoxGVCode />
        <FoxGVCode type="letter" />

        <div class="code-box">
            <div style="width: 400px;height: 250px;position: relative;">
                <img :src="codeImage" alt="" />
                <canvas width="400" height="250" id="canvas"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import FoxGVCode from "./components/gvcode";
import codeImage from "./assets/codeImage.png";

export default {
    name: "App",
    components: {
        FoxGVCode,
    },
    data() {
        return {
            codeImage,
        };
    },
    mounted() {
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = "rgba(60, 60, 60, 0.2)";
        ctx.fillRect(0, 0, 400, 250);
        const location = {
            x: 240,
            y: 60,
            width: 80,
            height: 60,
        };
        // ctx.beginPath();
        ctx.moveTo(240, 60);
        // ctx.fillRect(location.x, location.y, location.width, location.height);
        ctx.lineTo(240, 120);
        ctx.lineTo(320, 120);
        ctx.lineTo(320, 60);
        ctx.lineTo(300, 60);
        ctx.moveTo(314, 60);
        ctx.arc(314, 54, 16, 0, 2 * Math.PI, true);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        console.log(location);
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.code-box {
    margin-top: 60px;
}
#canvas {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>
