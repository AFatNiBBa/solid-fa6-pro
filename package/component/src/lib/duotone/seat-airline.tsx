
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seat-airline` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seat-airline?s=duotone seat-airline}
 * @preview ![seat-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/seat-airline.svg)
 */
const SeatAirline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80.5 192c9.1 21.3 18.3 42.7 27.4 64l212 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80.5 192zM96 488c0 13.3 10.7 24 24 24l240 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0 0-48-48 0 0 48-96 0c-13.3 0-24 10.7-24 24z" />
        <path d="M32 0C49.7 0 64 14.3 64 32l0 111.6c0 6.5 1.3 12.9 3.9 18.9L121.7 288 416 288c12.1 0 23.2 6.8 28.6 17.7s4.3 23.8-3 33.5l-43.2 57.6C389.3 408.9 375.1 416 360 416l-189.8 0c-38.4 0-73.1-22.9-88.2-58.2L9.1 187.7c-6-13.9-9.1-29-9.1-44.1L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default SeatAirline;