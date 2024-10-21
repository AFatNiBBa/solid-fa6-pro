
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-start` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-start?s=light hourglass-start}
 * @preview ![hourglass-start](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hourglass-start.svg)
 */
const HourglassStart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 496c0 8.8 7.2 16 16 16l32 0 288 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-41.6c0-49.4-22.8-96-61.8-126.3L218.1 256l72.2-56.1c39-30.3 61.8-76.9 61.8-126.3L352 32l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L336 0 48 0 16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l16 0 0 41.6c0 49.4 22.8 96 61.8 126.3L165.9 256 93.8 312.1C54.8 342.4 32 389.1 32 438.4L32 480l-16 0c-8.8 0-16 7.2-16 16zm64-16l0-41.6c0-39.5 18.2-76.8 49.4-101L192 276.3l78.6 61.1c31.2 24.2 49.4 61.5 49.4 101l0 41.6L64 480zm49.4-305.4C97.3 162.1 84.6 146 76.1 128l231.7 0c-8.5 18-21.1 34.1-37.3 46.6L192 235.7l-78.6-61.1zM66 96c-1.3-7.3-2-14.8-2-22.4L64 32l256 0 0 41.6c0 7.6-.7 15.1-2 22.4L66 96z" />
    </Icon>
);

export default HourglassStart;