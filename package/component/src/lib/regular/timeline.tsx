
import { Icon } from "../../index";

/**
 * A component that renders the `timeline` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/timeline?s=regular timeline}
 * @preview ![timeline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/timeline.svg)
 */
const Timeline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm24 108.3c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 35.8 23.5 66.1 56 76.3l0 59.7-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l272 0 0 59.7c-32.5 10.2-56 40.5-56 76.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3l0-59.7 272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0 0-59.7c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 35.8 23.5 66.1 56 76.3l0 59.7-336 0 0-59.7zM320 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM480 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Timeline;