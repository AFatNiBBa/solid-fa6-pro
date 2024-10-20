
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-magnifying-glass?s=duotone landmark-magnifying-glass}
 * @preview ![landmark-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/landmark-magnifying-glass.svg)
 */
const LandmarkMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160c0 2.7 .3 5.5 1.1 8.2C4.8 182.2 17.5 192 32 192l269.3 0c-8.6-19.6-13.3-41.2-13.3-64c0-36.1 12-69.4 32.1-96.2L271.9 4.2C267 1.4 261.5 0 256 0s-11 1.4-15.9 4.2L68.4 102.4 64 104l0 .9L16.1 132.2C6 138 0 148.7 0 160zM1.4 489.3C5.5 502.8 17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 288c-22.8 0-44.4-4.8-64-13.3L384 416l-40 0 0-166.4c-8.9-7.6-17-16.2-24-25.6l-40 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9z" />
        <path d="M528 128.2a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM519.9 234c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L633 279.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 234z" />
    </Icon>
);

export default LandmarkMagnifyingGlass;