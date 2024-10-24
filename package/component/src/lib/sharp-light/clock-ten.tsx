
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten?s=sharp-light clock-ten}
 * @preview ![clock-ten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-ten.svg)
 */
const ClockTen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 114.1-71.1-47.4-13.3-8.9-17.8 26.6 13.3 8.9 96 64L272 285.9l0-29.9 0-144 0-16-32 0 0 16z" />
    </Icon>
);

export default ClockTen;