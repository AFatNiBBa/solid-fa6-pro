
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-slash?s=duotone laptop-slash}
 * @preview ![laptop-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/laptop-slash.svg)
 */
const LaptopSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 403.2C0 392.6 8.6 384 19.2 384l346.3 0 121.8 96L76.8 480C34.4 480 0 445.6 0 403.2zM64 146.4l64 50.4L128 352l-64 0 0-205.6zM89.5 44.9C100.2 36.8 113.6 32 128 32l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L154.8 96C133 79 111.3 61.9 89.5 44.9zM522.2 384l98.6 0c10.6 0 19.2 8.6 19.2 19.2c0 21.5-8.9 41-23.2 55c-31.5-24.7-63.1-49.4-94.6-74.2z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LaptopSlash;