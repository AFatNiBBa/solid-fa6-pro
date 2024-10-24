
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=sharp-thin radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M501 19l7.8-1.9L505.1 1.6l-7.8 1.9L6.1 120.2 0 121.7 0 128s0 0 0 0l0 16 0 96 0 8L0 496l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L42.6 128 501 19zM16 144l480 0 0 352L16 496l0-248 0-8 0-96zM352 400a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm0-176a96 96 0 1 0 0 192 96 96 0 1 0 0-192zM88 240l-8 0 0 16 8 0 112 0 8 0 0-16-8 0L88 240zM72 312l-8 0 0 16 8 0 144 0 8 0 0-16-8 0L72 312zm16 72l-8 0 0 16 8 0 112 0 8 0 0-16-8 0L88 384z" />
    </Icon>
);

export default Radio;