
import { Icon } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=solid clock-one}
 * @preview ![clock-one](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clock-one.svg)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 56.7 20-30c7.4-11 22.3-14 33.3-6.7s14 22.3 6.7 33.3l-64 96c-5.9 8.8-16.8 12.7-26.9 9.7s-17-12.4-17-23l0-136c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default ClockOne;