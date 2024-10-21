
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crutch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=duotone crutch}
 * @preview ![crutch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/crutch.svg)
 */
const Crutch: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M297.4 9.4C303.6 3.1 311.8 0 320 0s16.4 3.1 22.6 9.4l160 160c6.2 6.2 9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6s-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4l-1.4-1.4L410.7 168c-22.3-22.2-44.5-44.5-66.7-66.7C328.9 86.2 313.8 71.1 298.7 56l-1.4-1.4c-12.5-12.5-12.5-32.8 0-45.3z" />
        <path d="M201.4 153.4L298.7 56 344 101.3 269.3 176 336 242.7 410.7 168 456 213.3l-97.3 97.3c0 0-.1 .1-.1 .1s-.1 .1-.1 .1l-34.7 34.7c-12.9 12.9-29.2 21.9-47.1 25.8L169.1 395.2c-5.9 1.3-11.4 4.3-15.7 8.6L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l98.8-98.8c4.3-4.3 7.3-9.7 8.6-15.7l23.9-107.6c4-17.8 12.9-34.1 25.8-47.1l34.8-34.8zM224 221.3l-12.2 12.2c-4.3 4.3-7.3 9.7-8.6 15.7l-17 76.7 76.7-17c5.9-1.3 11.4-4.3 15.7-8.6L290.7 288 224 221.3z" />
    </Icon>
);

export default Crutch;