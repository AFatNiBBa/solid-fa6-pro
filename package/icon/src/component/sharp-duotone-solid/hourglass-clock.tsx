
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=sharp-duotone-solid hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L32 0 352 0l32 0 0 64-32 0 0 64 0 13.3-9.4 9.4L237.3 256l36 36c-10.7 22.2-16.8 47.1-17.2 73.3l-64-64-96 96L96 448l179.2 0c13.1 25.6 32.2 47.6 55.6 64L32 512 0 512l0-64 32 0 0-64 0-13.3 9.4-9.4L146.7 256 41.4 150.6 32 141.3 32 128l0-64L0 64 0 0zM96 64l0 50.7 96 96 96-96L288 64 96 64z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0 0 16z" />
    </Icon>
);

export default HourglassClock;