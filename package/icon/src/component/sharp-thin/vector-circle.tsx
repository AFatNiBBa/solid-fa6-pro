
import { Icon } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=sharp-thin vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 16l-64 0 0 26.4s0 0 0 0l0 16.2s0 0 0 0L224 80l64 0 0-64zM208 45.4L208 16l0-16 16 0 64 0 16 0 0 16 0 29.4C384.8 63.7 448.3 127.2 466.6 208l29.4 0 16 0 0 16 0 64 0 16-16 0-29.4 0C448.3 384.8 384.8 448.3 304 466.6l0 29.4 0 16-16 0-64 0-16 0 0-16 0-29.4C127.2 448.3 63.7 384.8 45.4 304L16 304 0 304l0-16 0-64 0-16 16 0 29.4 0C63.7 127.2 127.2 63.7 208 45.4zM61.8 208L80 208l16 0 0 16 0 64 0 16-16 0-18.2 0C79.5 375.9 136.1 432.5 208 450.2l0-18.2 0-16 16 0 64 0 16 0 0 16 0 18.2c71.9-17.7 128.5-74.3 146.2-146.2L432 304l-16 0 0-16 0-64 0-16 16 0 18.2 0C432.5 136.1 375.9 79.5 304 61.8L304 80l0 16-16 0-64 0-16 0 0-16 0-18.2C136.1 79.5 79.5 136.1 61.8 208zm-3.3 80L80 288l0-64-64 0 0 64 26.4 0s0 0 0 0l16.2 0s0 0 0 0zM224 469.6l0 26.4 64 0 0-64-64 0 0 21.5s0 0 0 0l0 16.2s0 0 0 0zM469.6 288l26.4 0 0-64-64 0 0 64 21.5 0s0 0 0 0l16.2 0s0 0 0 0z" />
    </Icon>
);

export default VectorCircle;