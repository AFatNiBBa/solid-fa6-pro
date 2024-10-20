
import { Icon } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=light timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 80A32 32 0 1 0 80 80a32 32 0 1 0 64 0zm32 0c0 29.8-20.4 54.9-48 62l0 114 224 0 0-114c-27.6-7.1-48-32.2-48-62c0-35.3 28.7-64 64-64s64 28.7 64 64c0 29.8-20.4 54.9-48 62l0 114 195.8 0-62.1-51.7c-6.8-5.7-7.7-15.7-2-22.5s15.7-7.7 22.5-2l95.9 79.9c.6 .5 1.1 1 1.6 1.5c2.6 2.8 4.2 6.7 4.2 10.8c0 .3 0 .7 0 1c-.2 3.5-1.5 6.7-3.6 9.2c-.6 .8-1.3 1.5-2.1 2.1l-.1 .1-95.9 79.9c-6.8 5.7-16.9 4.7-22.5-2s-4.7-16.9 2-22.5L579.8 288 256 288l0 82c27.6 7.1 48 32.2 48 62c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-29.8 20.4-54.9 48-62l0-82L16 288c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-114c-27.6-7.1-48-32.2-48-62c0-35.3 28.7-64 64-64s64 28.7 64 64zm32 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM400 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default TimelineArrow;