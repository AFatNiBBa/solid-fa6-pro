
import { Icon } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=thin timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 111.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64S64 44.7 64 80c0 32.6 24.4 59.6 56 63.5L120 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0 16 0 80 0 0 104.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5L232 264l379.3 0-72.7 66.1c-3.3 3-3.5 8-.5 11.3s8 3.5 11.3 .5l88-80c1.7-1.5 2.6-3.7 2.6-5.9s-1-4.4-2.6-5.9l-88-80c-3.3-3-8.3-2.7-11.3 .5s-2.7 8.3 .5 11.3L611.3 248 360 248l0-104.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 32.6 24.4 59.6 56 63.5L344 248l-208 0 0-104.5zM304 80a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM176 432a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default TimelineArrow;