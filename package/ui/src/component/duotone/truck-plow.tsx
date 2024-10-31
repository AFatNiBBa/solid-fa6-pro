
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-plow` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-plow?s=duotone truck-plow}
 * @preview ![truck-plow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-plow.svg)
 */
const TruckPlow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M48 400a80 80 0 1 0 160 0A80 80 0 1 0 48 400zm224 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M269.9 96l57.6 96L192 192l0-96 77.9 0zm132.2 96L324.8 63.1C313.2 43.8 292.4 32 269.9 32L176 32c-26.5 0-48 21.5-48 48l0 112-96 0c-17.7 0-32 14.3-32 32l0 96c0 16 11.7 29.2 27 31.6C45 314 83.5 288 128 288c44.7 0 83.2 26.2 101.2 64l21.6 0c18-37.8 56.5-64 101.2-64s83.2 26.2 101.2 64l58.8 0 0 16c0 7.3 2.5 14.3 7 20l64 80c11 13.8 31.2 16 45 5s16-31.2 5-45l-57-71.2 0-36.8 0-132.8L633 116c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-64 80c-4.5 5.7-7 12.7-7 20l0 112-32 0 0-64c0-17.7-14.3-32-32-32l-45.9 0z" />
    </Icon>
);

export default TruckPlow;