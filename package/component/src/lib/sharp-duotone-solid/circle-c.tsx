
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-c` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-c?s=sharp-duotone-solid circle-c}
 * @preview ![circle-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-c.svg)
 */
const CircleC: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 0c0-70.7 57.3-128 128-128c45.9 0 86.2 24.2 108.7 60.5L324 213.8c-14.2-22.8-39.3-37.8-68-37.8c-44.2 0-80 35.8-80 80s35.8 80 80 80c28.7 0 53.8-15.1 68-37.8l40.8 25.4C342.2 359.8 301.9 384 256 384c-70.7 0-128-57.3-128-128z" />
        <path d="M256 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c28.7 0 53.8-15.1 68-37.8l40.8 25.4C342.2 359.8 301.9 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c45.9 0 86.2 24.2 108.7 60.5L324 213.8c-14.2-22.8-39.3-37.8-68-37.8z" />
    </Icon>
);

export default CircleC;