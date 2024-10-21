
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake?s=sharp-duotone-solid handshake}
 * @preview ![handshake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/handshake.svg)
 */
const Handshake: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M189 180.8c18.6 26 37.2 52.1 55.8 78.1l39.1-27.9 57.2-40.8L496.4 332.6 512 346.9 512 128l-1.5 0L426.6 72.1 414.5 64 400 64l-32 0-15.4 0-12.5 8.9c-7.6 5.4-15.2 10.8-22.7 16.2l-89.3 63.8c-13 9.3-26 18.6-39.1 27.9zM544 128l0 256 96 0 0-256-96 0zm64 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M156.2 352L128 352l0-224 96-64 64 0 29.4 25.2-89.3 63.8L189 180.8 244.8 259l39.1-27.9 57.2-40.8L496.4 332.6l18.6 17-63.8 70.2-19.4-17.7-52.9 57.7-35.4-32.4-12.8-11.8-47.7 52.2-35.4-32.4L156.2 352zM0 128l96 0 0 256L0 384 0 128zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Handshake;