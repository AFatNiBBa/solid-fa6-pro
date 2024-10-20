
import { Icon, generic } from "../../index";

/**
 * A component that renders the `moon-cloud` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-cloud?s=duotone moon-cloud}
 * @preview ![moon-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/moon-cloud.svg)
 */
const MoonCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256.5 240.3C264.5 124 361.2 32 479.5 32c6.4 0 12.7 .3 19 .8c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-53.3 30.2-89.3 87.6-89.3 153.3c0 97.2 78.6 176 175.5 176c10.3 0 20.3-.9 30.1-2.6c6.9-1.2 13.8 2.2 17 8.5c1.2 2.3 1.8 4.8 1.8 7.3c0 4.2-1.7 8.4-4.8 11.5C595 455.8 540 480 479.5 480c-60.9 0-116.1-24.4-156.4-64c17.9-18.7 29-44.1 29-72c0-54.6-42-99.3-95.5-103.7z" />
        <path d="M0 352c0 35.3 28.7 64 64 64l184 0c39.8 0 72-32.2 72-72s-32.2-72-72-72c-10.1 0-19.7 2.1-28.4 5.8C208.8 246.5 179 224 144 224c-38.7 0-71 27.5-78.4 64c-.5 0-1.1 0-1.6 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default MoonCloud;