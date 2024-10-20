
import { Icon } from "../../index";

/**
 * A component that renders the `handshake` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake?s=sharp-thin handshake}
 * @preview ![handshake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/handshake.svg)
 */
const Handshake: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M209.3 64c-1.9 0-3.7 .7-5.1 1.9L144 116.4l0 20.9L212.2 80l65 0L294 64l-84.8 0zM112 352l23.2 0 50.1 50.1 5.7 5.7s0 0 0 0l28.7 28.7 5.7 5.7 5.7-5.7 37-37 43 43 5.7 5.7 5.7-5.7 56.9-56.9 26 26 5.7 5.7 5.7-5.7L476.1 352l3.9 0 48 0 0 32 0 16 16 0 80 0 16 0 0-16 0-240 0-16-16 0-80 0-16 0 0 16 0 192-40.2 0-3.5-3.5L361.4 209.6l13.9-13.9 5.7-5.7-11.3-11.3-5.7 5.7L259.6 288.7 194.9 224 346.9 80l79.5 0L496 138.5l0-20.9L434.5 65.9 432.2 64l-2.9 0-85.6 0-3.2 0-2.3 2.2L177.9 218.1l-6 5.7 5.8 5.8 76.2 76.2 5.7 5.7 5.7-5.7 84.8-84.8L467.3 338.1l-56.5 56.5-26-26-5.7-5.7-5.7 5.7-56.9 56.9-43-43-5.7-5.7-5.7 5.7-37 37-44.1-44.1s0 0 0 0l-37-37-2.3-2.3-3.3 0L112 336l0-192 0-16-16 0-80 0L0 128l0 16L0 384l0 16 16 0 80 0 16 0 0-16 0-32zM96 144l0 240-80 0 0-240 80 0zm528 0l0 240-80 0 0-240 80 0z" />
    </Icon>
);

export default Handshake;