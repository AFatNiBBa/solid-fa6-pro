
import { Icon } from "../../index";

/**
 * A component that renders the `sandwich` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=sharp-light sandwich}
 * @preview ![sandwich](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sandwich.svg)
 */
const Sandwich: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 96l0 64L32 160l0-64 448 0zM32 64L0 64 0 96l0 64 0 32 32 0 448 0 32 0 0-32 0-64 0-32-32 0L32 64zM320 352l-64-32L32 320 0 320l0 32 0 64 0 32 32 0 448 0 32 0 0-32 0-64 0-32-32 0-96 0-64 32zm71.6 0l88.4 0 0 64L32 416l0-64 216.4 0 57.2 28.6 14.3 7.2 14.3-7.2L391.6 352zM131.9 224.5l-3.7-.9-3.7 .9-104 24L4.8 252 12 283.2l15.6-3.6 100.3-23.1 124.3 31.1 3.9 1 3.9-1 124.3-31.1 100.3 23.1 15.6 3.6 7.2-31.2-15.6-3.6-104-24-3.7-.9-3.7 .9L256 255.5l-124.1-31z" />
    </Icon>
);

export default Sandwich;