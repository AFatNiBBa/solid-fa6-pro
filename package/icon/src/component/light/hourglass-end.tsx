
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-end` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-end?s=light hourglass-end}
 * @preview ![hourglass-end](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hourglass-end.svg)
 */
const HourglassEnd: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 16C0 7.2 7.2 0 16 0L48 0 336 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 41.6c0 49.4-22.8 96-61.8 126.3L218.1 256l72.2 56.1c39 30.3 61.8 76.9 61.8 126.3l0 41.6 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0L48 512l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-41.6c0-49.4 22.8-96 61.8-126.3L165.9 256 93.8 199.9C54.8 169.6 32 122.9 32 73.6L32 32 16 32C7.2 32 0 24.8 0 16zM64 32l0 41.6c0 39.5 18.2 76.8 49.4 101L192 235.7l78.6-61.1c31.2-24.3 49.4-61.5 49.4-101L320 32 64 32zm49.4 305.4c-5.7 4.5-11 9.3-15.8 14.6l188.8 0c-4.8-5.3-10.1-10.2-15.8-14.6L192 276.3l-78.6 61.1zM76.1 384C68.2 400.8 64 419.4 64 438.4L64 480l256 0 0-41.6c0-19.1-4.2-37.6-12.1-54.4L76.1 384z" />
    </Icon>
);

export default HourglassEnd;