
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=regular arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464C141.1 464 48 370.9 48 256c0-13.3-10.7-24-24-24s-24 10.7-24 24C0 397.4 114.6 512 256 512s256-114.6 256-256c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 114.9-93.1 208-208 208zM134.4 119.7c-9 9.7-8.5 24.9 1.3 33.9s24.9 8.5 33.9-1.3L232 85.1 232 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-242.9 62.4 67.2c9 9.7 24.2 10.3 33.9 1.3s10.3-24.2 1.3-33.9l-104-112C269 2.8 262.7 0 256 0s-13 2.8-17.6 7.7l-104 112z" />
    </Icon>
);

export default ArrowUpFromArc;