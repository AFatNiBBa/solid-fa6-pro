
import { Icon } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=sharp-regular timeline-arrow}
 * @preview ![timeline-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/timeline-arrow.svg)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 64l0 64 8 0 48 0 8 0 0-64L96 64zm64 112l-8 0 0 56 176 0 0-56-8 0-48 0 0-48 0-64 0-48 48 0 64 0 48 0 0 48 0 64 0 48-48 0-8 0 0 56 162.3 0-50.5-46.3-17.7-16.2 32.4-35.4 17.7 16.2 96 88L635.5 256l-19.3 17.7-96 88-17.7 16.2-32.4-35.4 17.7-16.2L538.3 280 248 280l0 56 8 0 48 0 0 48 0 64 0 48-48 0-64 0-48 0 0-48 0-64 0-48 48 0 8 0 0-56L24 280 0 280l0-48 24 0 80 0 0-56-8 0-48 0 0-48 0-64 0-48 48 0 64 0 48 0 0 48 0 64 0 48-48 0zm40 208l-8 0 0 64 64 0 0-64-8 0-48 0zM384 64l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default TimelineArrow;