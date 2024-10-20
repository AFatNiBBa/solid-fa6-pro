
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=duotone align-slash}
 * @preview ![align-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/align-slash.svg)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 192c0 17.7 14.3 32 32 32l34.5 0-61.8-48.7c-3 4.9-4.7 10.6-4.7 16.7zm0 128c0 17.7 14.3 32 32 32l196.9 0-81.2-64L128 288c-17.7 0-32 14.3-32 32zm0 128c0 17.7 14.3 32 32 32l359.4 0-81.2-64L128 416c-17.7 0-32 14.3-32 32zM98.4 51.8C117.2 66.5 136 81.3 154.8 96L512 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L128 32c-13.4 0-24.8 8.2-29.6 19.8zM236.4 160c27.2 21.3 54.4 42.7 81.7 64L512 224c17.7 0 32-14.3 32-32s-14.3-32-32-32l-275.6 0zM399.7 288c27.2 21.3 54.4 42.7 81.7 64l30.6 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112.3 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default AlignSlash;