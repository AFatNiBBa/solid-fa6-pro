
import { Icon } from "../../index";

/**
 * A component that renders the `square-g` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-g?s=sharp-light square-g}
 * @preview ![square-g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-g.svg)
 */
const SquareG: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM128 256c0 53 43 96 96 96c47.6 0 87.1-34.6 94.7-80L256 272l-16 0 0-32 16 0 80 0 16 0 0 16c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128c32.8 0 62.7 12.3 85.3 32.6l11.9 10.7-21.3 23.8L288 184.4c-17-15.2-39.4-24.4-64-24.4c-53 0-96 43-96 96z" />
    </Icon>
);

export default SquareG;