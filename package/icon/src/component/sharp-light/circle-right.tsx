
import { Icon } from "../../index";

/**
 * A component that renders the `circle-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-right?s=sharp-light circle-right}
 * @preview ![circle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-right.svg)
 */
const CircleRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm256-32l32 0 0-32 0-18.7L370.7 256 288 338.7l0-18.7 0-32-32 0-96 0 0-64 96 0zm160 32l-22.6-22.6L288 128l-32 0 0 32 0 32-32 0-64 0-32 0 0 32 0 64 0 32 32 0 64 0 32 0 0 32 0 32 32 0L393.4 278.6 416 256z" />
    </Icon>
);

export default CircleRight;