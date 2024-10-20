
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=duotone hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32C0 49.7 14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 10.8 0c-23.3-16.4-42.5-38.4-55.6-64L96 448l0-11c0-25.5 10.1-49.9 28.1-67.9L192 301.3l64 64c.4-26.2 6.5-51.1 17.2-73.3l-36-36 67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0C14.3 0 0 14.3 0 32zM96 64l192 0 0 11c0 25.5-10.1 49.9-28.1 67.9L192 210.7l-67.9-67.9C106.1 124.9 96 100.4 96 75l0-11z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default HourglassClock;