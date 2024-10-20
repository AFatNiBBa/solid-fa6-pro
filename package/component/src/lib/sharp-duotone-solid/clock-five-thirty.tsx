
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-five-thirty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-five-thirty?s=sharp-duotone-solid clock-five-thirty}
 * @preview ![clock-five-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-five-thirty.svg)
 */
const ClockFiveThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0l44-13.3 64 96 13.3 20-39.9 26.6-13.3-20-20-30 0 56.7 0 24-48 0 0-24 0-136z" />
        <path d="M280 416l0-24 0-56.7 20 30 13.3 20 39.9-26.6-13.3-20-64-96L232 256l0 136 0 24 48 0z" />
    </Icon>
);

export default ClockFiveThirty;