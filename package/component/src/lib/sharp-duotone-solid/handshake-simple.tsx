
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-simple?s=sharp-duotone-solid handshake-simple}
 * @preview ![handshake-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/handshake-simple.svg)
 */
const HandshakeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M189 180.8L244.8 259l39.1-27.9 57.2-40.8c4.4 4 8.8 8 13.1 12L496.4 332.6 517.6 352 640 352l0-224-64 0-65.5 0L426.6 72.1 414.5 64 400 64l-32 0-15.4 0-12.5 8.9c-7.6 5.4-15.2 10.8-22.7 16.2l-89.3 63.8L189 180.8z" />
        <path d="M0 352l156.2 0 91.4 83.4 35.4 32.4 47.7-52.2 12.8 11.8 35.4 32.4 52.1-56.9 .5 .4 35.4 32.4 64.9-70.8L517.6 352l-21.1-19.4L354.2 202.3l-13.1-12-57.2 40.8L244.8 259 189 180.8l39.1-27.9 89.3-63.8L288 64l-64 0-96 64L0 128 0 352z" />
    </Icon>
);

export default HandshakeSimple;