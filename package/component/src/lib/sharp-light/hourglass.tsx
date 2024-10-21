
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=sharp-light hourglass}
 * @preview ![hourglass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hourglass.svg)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 0L0 0 0 32l16 0 16 0 0 112 0 7.8 6.2 4.8L165.9 256 38.2 355.4 32 360.2l0 7.8 0 112-16 0L0 480l0 32 16 0 32 0 288 0 32 0 16 0 0-32-16 0-16 0 0-112 0-7.8-6.2-4.8L218.1 256l127.8-99.4 6.2-4.8 0-7.8 0-112 16 0 16 0 0-32L368 0 336 0 48 0 16 0zM320 32l0 104.2L192 235.7 64 136.2 64 32l256 0zM192 276.3l128 99.6L320 480 64 480l0-104.2 128-99.6z" />
    </Icon>
);

export default Hourglass;