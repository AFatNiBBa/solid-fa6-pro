
import { Icon } from "../../index";

/**
 * A component that renders the `dragon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dragon?s=sharp-solid dragon}
 * @preview ![dragon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dragon.svg)
 */
const Dragon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 160l32 0 32 32 96 0 0-64L512 0 416 0 384 0 288 0l0 32 48 24L288 80l0 32 64 16 0 120 0 26.6 0 5.4 0 13.3 9.4 9.4L448 389.3l0 21.5L30.6 448 0 448l0 31.6 0 .7L0 512l31.6 0 .7 0L432 512l64 0 96 0 48 0 0-48 0-96 0-26.6-22.6-14.1L448 221.4l0-61.4zm64-87.7l0-.6c0 .1 0 .2 0 .3s0 .2 0 .3zm-1.3 7.4C507.5 89.2 498.6 96 488 96c-13.3 0-24-10.7-24-24c0-1.3 .1-2.6 .3-3.9l46.4 11.6zM160 96L0 256l176-16L96 320l224 0 0-128L160 96z" />
    </Icon>
);

export default Dragon;