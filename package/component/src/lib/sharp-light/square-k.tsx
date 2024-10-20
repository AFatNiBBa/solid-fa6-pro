
import { Icon } from "../../index";

/**
 * A component that renders the `square-k` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=sharp-light square-k}
 * @preview ![square-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-k.svg)
 */
const SquareK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm128 96l32 0 0 16 0 115.7L290.9 128l45.1 0L226.4 238.3 328.3 384l-39.1 0L203.4 261.4 160 305.1l0 62.9 0 16-32 0 0-16 0-69.5L128 144l0-16z" />
    </Icon>
);

export default SquareK;