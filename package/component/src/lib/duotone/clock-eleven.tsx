
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eleven` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven?s=duotone clock-eleven}
 * @preview ![clock-eleven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-eleven.svg)
 */
const ClockEleven: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm168-96c0-7.8 3.8-15.4 10.7-20c11-7.4 25.9-4.4 33.3 6.7l20 30 0-56.7c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 10.6-6.9 19.9-17 23s-21.1-.9-26.9-9.7l-64-96c-2.7-4.1-4-8.7-4-13.3z" />
        <path d="M256 96c-13.3 0-24 10.7-24 24l0 56.7-20-30c-7.4-11-22.3-14-33.3-6.7s-14 22.3-6.7 33.3l64 96c5.9 8.8 16.8 12.7 26.9 9.7s17-12.4 17-23l0-136c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default ClockEleven;