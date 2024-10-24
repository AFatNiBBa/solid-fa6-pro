
import { Icon } from "../../index";

/**
 * A component that renders the `circle-half` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half?s=sharp-thin circle-half}
 * @preview ![circle-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-half.svg)
 */
const CircleHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 16.5l0 479C114.9 487.2 16 383.2 16 256S114.9 24.8 240 16.5zm0-16C106.1 8.8 0 120 0 256S106.1 503.2 240 511.5c5.3 .3 10.6 .5 16 .5l0-16 0-480 0-16c-5.4 0-10.7 .2-16 .5z" />
    </Icon>
);

export default CircleHalf;