
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-ten` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten?s=duotone clock-ten}
 * @preview ![clock-ten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-ten.svg)
 */
const ClockTen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm140-77.3c7.4-11 22.3-14 33.3-6.7L232 211.2l0-91.2c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 8.9-4.9 17-12.7 21.2s-17.3 3.7-24.6-1.2l-96-64c-11-7.4-14-22.3-6.7-33.3z" />
        <path d="M256 96c-13.3 0-24 10.7-24 24l0 91.2L173.3 172c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l96 64c7.4 4.9 16.8 5.4 24.6 1.2S280 264.9 280 256l0-136c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default ClockTen;