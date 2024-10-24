
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-seven` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven?s=duotone clock-seven}
 * @preview ![clock-seven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-seven.svg)
 */
const ClockSeven: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm172 82.7l60-90L232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 136c0 4.7-1.4 9.4-4 13.3l-64 96c-4.6 6.9-12.2 10.7-20 10.7c-4.6 0-9.2-1.3-13.3-4c-11-7.4-14-22.3-6.7-33.3z" />
        <path d="M256 96c-13.3 0-24 10.7-24 24l0 128.7-60 90c-7.4 11-4.4 25.9 6.7 33.3s25.9 4.4 33.3-6.7l64-96c2.6-3.9 4-8.6 4-13.3l0-136c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default ClockSeven;