
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-clouds` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-clouds?s=duotone face-clouds}
 * @preview ![face-clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-clouds.svg)
 */
const FaceClouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 114.6 75.4 211.7 179.3 244.3c-12.1-17-19.3-37.8-19.3-60.3c0-50.6 36.2-92.8 84.1-102.1C321.2 290.7 364.6 256 416 256c29.1 0 55.6 11.1 75.5 29.2c8.9-3.4 18.5-5.2 28.5-5.2c20 0 38.3 7.3 52.3 19.5c2.4-14.1 3.7-28.7 3.7-43.5C576 114.6 461.4 0 320 0c-20.6 0-40.7 2.4-59.9 7C295.2 21.3 320 55.8 320 96c0 39.6-24 73.6-58.2 88.3c6.5 5.9 10.5 14.3 10.5 23.7c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-5.8 1.6-11.3 4.3-16L72.1 192c-5.3 20.5-8.1 41.9-8.1 64zm368.4-48a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M128 0C104.3 0 83.6 12.9 72.6 32L64 32C28.7 32 0 60.7 0 96s28.7 64 64 64l160 0c35.3 0 64-28.7 64-64s-28.7-64-64-64c-13.2 0-25.4 4-35.6 10.8C179.7 17.9 155.9 0 128 0zM416 288c-44.2 0-80 35.8-80 80l-8 0c-39.8 0-72 32.2-72 72s32.2 72 72 72l240 0c39.8 0 72-32.2 72-72s-32.2-72-72-72l-.7 0c.4-2.6 .7-5.3 .7-8c0-26.5-21.5-48-48-48c-13.9 0-26.4 5.9-35.1 15.3C470.9 303.8 445.3 288 416 288z" />
    </Icon>
);

export default FaceClouds;