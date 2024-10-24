
import { Icon } from "../../index";

/**
 * A component that renders the `swap` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap?s=sharp-thin swap}
 * @preview ![swap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/swap.svg)
 */
const Swap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 110.6l80-80 80 80 0 17.4L32 128l0-17.4zm68.7-91.3L16 104l0 24 0 16 16 0 72 0 0 328 0 8 8 0 208 0 8 0 0-8 0-424 192 0 0 320-72 0-16 0 0 16 0 24 84.7 84.7L528 504l11.3-11.3L624 408l0-24 0-16-16 0-72 0 0-328 0-8-8 0L320 32l-8 0 0 8 0 424-192 0 0-320 72 0 16 0 0-16 0-24L123.3 19.3 112 8 100.7 19.3zM448 401.4l0-17.4 160 0 0 17.4-80 80-80-80z" />
    </Icon>
);

export default Swap;