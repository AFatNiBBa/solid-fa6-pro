
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass-start` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=duotone hourglass-start}
 * @preview ![hourglass-start](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hourglass-start.svg)
 */
const HourglassStart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l32 0 32 0 192 0 32 0 32 0 0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11-64 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11-64 0 0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11z" />
        <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 0zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default HourglassStart;