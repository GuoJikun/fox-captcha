import gvcode from "gvcode";
export default {
    name: "FoxGVCode",
    functional: true,
    props: {
        width: {
            type: Number,
            default: 100,
        },
        height: {
            type: Number,
            default: 30,
        },
        type: {
            type: String,
            validator(value) {
                return ["letter", "digital"].includes(value);
            },
        },
    },
    render: (h, { props }) => {
        const conf = {
            width: props.width,
            height: props.height,
        };
        if (props.type !== undefined) {
            conf["type"] = props.type;
        }
        const instance = gvcode(conf);
        const src = instance.value();
        return h("img", {
            style: {
                width: `${conf.width}px`,
                height: `${conf.height}px`,
                cursor: "pointer",
            },
            attrs: { src: src },
            on: {
                click: function(ev) {
                    const s = instance.refresh();
                    ev.target.src = s;
                },
            },
        });
    },
};
