
import { Icon } from "../../index";

/**
 * A component that renders the `square-e` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-e?s=sharp-light square-e}
 * @preview ![square-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-e.svg)
 */
const SquareE: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm144 96l160 0 16 0 0 32-16 0-144 0 0 80 112 0 16 0 0 32-16 0-112 0 0 80 144 0 16 0 0 32-16 0-160 0-16 0 0-16 0-112 0-112 0-16 16 0z" />
    </Icon>
);

export default SquareE;