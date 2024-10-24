
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten-thirty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten-thirty?s=solid clock-ten-thirty}
 * @preview ![clock-ten-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clock-ten-thirty.svg)
 */
const ClockTenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm24-120l0-136c0-8-4-15.5-10.7-20l-96-64c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3L232 268.8 232 392c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default ClockTenThirty;