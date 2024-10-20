
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-half` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-half?s=light hourglass-half}
 * @preview ![hourglass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hourglass-half.svg)
 */
const HourglassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-41.6c0-49.4 22.8-96 61.8-126.3L165.9 256 93.8 199.9C54.8 169.6 32 122.9 32 73.6L32 32 16 32C7.2 32 0 24.8 0 16S7.2 0 16 0L48 0 336 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 41.6c0 49.4-22.8 96-61.8 126.3L218.1 256l72.2 56.1c39 30.3 61.8 76.9 61.8 126.3l0 41.6 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0L48 512l-32 0zm304-32l0-41.6c0-7.6-.7-15.1-2-22.4L66 416c-1.3 7.3-2 14.8-2 22.4L64 480l256 0zM113.4 337.4C97.3 349.9 84.6 366 76.1 384l231.7 0c-8.5-18-21.1-34.1-37.3-46.6L192 276.3l-78.6 61.1zM192 235.7l78.6-61.1c5.7-4.5 11-9.3 15.8-14.6L97.6 160c4.8 5.3 10.1 10.2 15.8 14.6L192 235.7zM307.9 128c7.9-16.8 12.1-35.4 12.1-54.4L320 32 64 32l0 41.6c0 19.1 4.2 37.6 12.1 54.4l231.7 0z" />
    </Icon>
);

export default HourglassHalf;