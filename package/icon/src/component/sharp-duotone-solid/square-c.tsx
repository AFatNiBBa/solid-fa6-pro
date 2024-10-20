
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-c` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-c?s=sharp-duotone-solid square-c}
 * @preview ![square-c](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-c.svg)
 */
const SquareC: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM96 256c0-70.7 57.3-128 128-128c45.9 0 86.2 24.2 108.7 60.5L292 213.8c-14.2-22.8-39.3-37.8-68-37.8c-44.2 0-80 35.8-80 80s35.8 80 80 80c28.7 0 53.8-15.1 68-37.8l40.8 25.4C310.2 359.8 269.9 384 224 384c-70.7 0-128-57.3-128-128z" />
        <path d="M224 176c-44.2 0-80 35.8-80 80s35.8 80 80 80c28.7 0 53.8-15.1 68-37.8l40.8 25.4C310.2 359.8 269.9 384 224 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c45.9 0 86.2 24.2 108.7 60.5L292 213.8c-14.2-22.8-39.3-37.8-68-37.8z" />
    </Icon>
);

export default SquareC;