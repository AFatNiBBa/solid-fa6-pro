
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-slash?s=sharp-duotone-solid handshake-slash}
 * @preview ![handshake-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/handshake-slash.svg)
 */
const HandshakeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384l96 0 0-212.4L40.6 128 0 128zM64 336a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64-139.2L128 352l28.2 0 73.9 67.4 35.4 32.4 47.7-52.2 22.3 20.5 35.4 32.4 34.2-37.3L128 196.8zm35.6-92.6c14.5 11.3 29.1 22.6 43.6 33.9L298.8 64 224 64l-60.4 40.3zm69.6 54c21.2 16.4 42.4 32.9 63.5 49.3l77.4-60.2 12.6-9.8 19.6 25.3-12.6 9.8-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L411.3 64l-61.7 0L233.2 158.3zm89.6 69.6C384.9 276.1 447 324.2 509 372.4l6.8-7.4-35.4-32.4-134.2-123-23.4 18.2zM544 128l0 256 96 0 0-256-96 0zm64 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default HandshakeSlash;