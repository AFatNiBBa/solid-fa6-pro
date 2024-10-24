
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-eight` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight?s=duotone clock-eight}
 * @preview ![clock-eight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-eight.svg)
 */
const ClockEight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm140 77.3c-7.4-11-4.4-25.9 6.7-33.3c28.4-19 56.9-37.9 85.3-56.9c0-41.1 0-82.1 0-123.3c0-.7 0-1.5 .1-2.3s.2-1.6 .4-2.4c.3-1.6 .8-3.1 1.4-4.5c1.2-2.9 3-5.5 5.1-7.6c4.3-4.3 10.3-7 17-7c13.3 0 24 10.7 24 24c0 45.3 0 90.7 0 136c0 8-4 15.5-10.7 20c-32 21.3-64 42.7-96 64c-4.1 2.7-8.7 4-13.3 4c-7.8 0-15.4-3.8-20-10.7z" />
        <path d="M256 96c13.3 0 24 10.7 24 24l0 136c0 8-4 15.5-10.7 20l-96 64c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3L232 243.2 232 120c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockEight;