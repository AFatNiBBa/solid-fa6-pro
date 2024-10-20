
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wifi-fair` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-fair?s=duotone wifi-fair}
 * @preview ![wifi-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wifi-fair.svg)
 */
const WifiFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 179.8c0 8 3 15.9 8.9 22.2c6.3 6.5 14.7 9.8 23.1 9.8c8 0 15.9-3 22.2-8.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c6.2 6 14.2 8.9 22.2 8.9c8.4 0 16.8-3.3 23.1-9.8c12.2-12.8 11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C3.3 163 0 171.4 0 179.8z" />
        <path d="M171.8 312c39.5-34.9 91.3-56 148.2-56s108.7 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8zM320 480a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default WifiFair;