
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-five-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five-thirty?s=duotone clock-five-thirty}
 * @preview ![clock-five-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-five-thirty.svg)
 */
const ClockFiveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0c0-10.6 6.9-19.9 17-23s21.1 .9 26.9 9.7l64 96c2.7 4.1 4 8.7 4 13.3c0 7.8-3.8 15.4-10.7 20c-11 7.4-25.9 4.4-33.3-6.7l-20-30 0 56.7c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136z" />
        <path d="M256 416c13.3 0 24-10.7 24-24l0-56.7 20 30c7.4 11 22.3 14 33.3 6.7s14-22.3 6.7-33.3l-64-96c-5.9-8.8-16.8-12.7-26.9-9.7s-17 12.4-17 23l0 136c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default ClockFiveThirty;