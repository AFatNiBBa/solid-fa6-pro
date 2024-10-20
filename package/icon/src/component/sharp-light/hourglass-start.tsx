
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-start` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=sharp-light hourglass-start}
 * @preview ![hourglass-start](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hourglass-start.svg)
 */
const HourglassStart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 512l-16 0-32 0L48 512l-32 0L0 512l0-32 16 0 16 0 0-112 0-7.8 6.2-4.8L165.9 256 38.2 156.6 32 151.8l0-7.8L32 32 16 32 0 32 0 0 16 0 48 0 336 0l32 0 16 0 0 32-16 0-16 0 0 112 0 7.8-6.2 4.8L218.1 256l127.8 99.4 6.2 4.8 0 7.8 0 112 16 0 16 0 0 32zm-64-32l0-104.2L192 276.3 64 375.8 64 480l256 0zm0-343.8l0-8.2L64 128l0 8.2 128 99.6 128-99.6zM320 96l0-64L64 32l0 64 256 0z" />
    </Icon>
);

export default HourglassStart;