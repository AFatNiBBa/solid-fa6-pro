
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-half` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-half?s=sharp-light hourglass-half}
 * @preview ![hourglass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hourglass-half.svg)
 */
const HourglassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 512L0 512l0-32 16 0 16 0 0-112 0-7.8 6.2-4.8L165.9 256 38.2 156.6 32 151.8l0-7.8L32 32 16 32 0 32 0 0 16 0 48 0 336 0l32 0 16 0 0 32-16 0-16 0 0 112 0 7.8-6.2 4.8L218.1 256l127.8 99.4 6.2 4.8 0 7.8 0 112 16 0 16 0 0 32-16 0-32 0L48 512l-32 0zm304-32l0-64L64 416l0 64 256 0zM64 375.8l0 8.2 256 0 0-8.2L192 276.3 64 375.8zM94.6 160L192 235.7 289.4 160 94.6 160zM320 128l0-96L64 32l0 96 256 0z" />
    </Icon>
);

export default HourglassHalf;