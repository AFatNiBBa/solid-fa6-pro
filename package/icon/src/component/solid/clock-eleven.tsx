
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=solid clock-eleven}
 * @preview ![clock-eleven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clock-eleven.svg)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 56.7-20-30c-7.4-11-22.3-14-33.3-6.7s-14 22.3-6.7 33.3l64 96c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23l0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default ClockEleven;