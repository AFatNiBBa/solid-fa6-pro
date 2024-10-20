
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-container-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-container-empty?s=duotone truck-container-empty}
 * @preview ![truck-container-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-container-empty.svg)
 */
const TruckContainerEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 416a64 64 0 1 0 128 0A64 64 0 1 0 32 416zm160 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm288 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M456 144c-13.3 0-24 10.7-24 24l0 88 0 32 0 16L32 304c-17.7 0-32 14.3-32 32l0 16c0 8.8 3.6 16.8 9.4 22.6C24.8 342.3 57.8 320 96 320c33.4 0 62.8 17 80 42.9C193.2 337 222.6 320 256 320c41.8 0 77.4 26.7 90.5 64l85.5 0 21.5 0c13.2-37.3 48.7-64 90.5-64c38.2 0 71.2 22.3 86.6 54.6c5.8-5.8 9.4-13.8 9.4-22.6l0-64 0-16 0-10.3c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5L456 144zM585 256l-105 0 0-64 48.8 0c2.4 0 4.7 1.1 6.2 2.9L585 256z" />
    </Icon>
);

export default TruckContainerEmpty;