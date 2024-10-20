
import { Icon } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=regular timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 96A32 32 0 1 0 96 96a32 32 0 1 0 64 0zm48 0c0 35.8-23.5 66.1-56 76.3l0 59.7 176 0 0-59.7c-32.5-10.2-56-40.5-56-76.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 35.8-23.5 66.1-56 76.3l0 59.7 178.6 0-58.9-54.4c-9.7-9-10.3-24.2-1.4-33.9s24.2-10.3 33.9-1.4l103.9 95.9c.1 .1 .3 .3 .4 .4c.3 .3 .6 .6 .9 .9c4 4.3 6.5 10.1 6.5 16.4s-2.5 12.1-6.5 16.4c-.3 .3-.6 .6-.9 .9c-.1 .1-.3 .3-.4 .4L528.3 369.6c-9.7 9-24.9 8.4-33.9-1.4s-8.4-24.9 1.4-33.9L554.6 280 248 280l0 59.7c32.5 10.2 56 40.5 56 76.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-35.8 23.5-66.1 56-76.3l0-59.7L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0 0-59.7C71.5 162.1 48 131.8 48 96c0-44.2 35.8-80 80-80s80 35.8 80 80zM192 416a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM352 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TimelineArrow;