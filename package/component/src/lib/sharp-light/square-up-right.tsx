
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=sharp-light square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 384L32 448 32 64l384 0zm32-32l-32 0L32 32 0 32 0 64 0 448l0 32 32 0 384 0 32 0 0-32 0-384 0-32zM320 144l-160 0-6.6 0-4.7 4.7-16 16L121.4 176l11.3 11.3L173.4 228l-64.7 64.7L97.4 304l11.3 11.3 56 56L176 382.6l11.3-11.3L252 306.6l40.7 40.7L304 358.6l11.3-11.3 16-16 4.7-4.7 0-6.6 0-160 0-16-16 0zM304 313.4l-40.7-40.7L252 261.4l-11.3 11.3L176 337.4 142.6 304l64.7-64.7L218.6 228l-11.3-11.3L166.6 176 304 176l0 137.4z" />
    </Icon>
);

export default SquareUpRight;