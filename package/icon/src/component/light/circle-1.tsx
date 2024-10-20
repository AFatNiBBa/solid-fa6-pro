
import { Icon } from "../../index";

/**
 * A component that renders the `circle-1` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-1?s=light circle-1}
 * @preview ![circle-1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-1.svg)
 */
const Circle_1: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 130.2c4.9 2.9 8 8.1 8 13.8l0 208 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-180.4-32.1 18.3c-7.7 4.4-17.4 1.7-21.8-6s-1.7-17.4 6-21.8l56-32c5-2.8 11-2.8 16 .1z" />
    </Icon>
);

export default Circle_1;