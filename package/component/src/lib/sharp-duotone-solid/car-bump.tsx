
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-bump` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bump?s=sharp-duotone-solid car-bump}
 * @preview ![car-bump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-bump.svg)
 */
const CarBump: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M400 512l221.7 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96z" />
        <path d="M86.3 70.1L65.1 75.8 62.7 97.6 48.3 229.4 7.6 240.3 57.3 425.8 78 503l92.7-24.8L150 400.9l278.2-74.5 20.7 77.3 92.7-24.8L521 301.5 471.3 116.1 430.6 127 352.2 20 339.2 2.4 318.1 8 86.3 70.1zm278 74.6L114.6 211.6l9.3-85.3L313.5 75.5l50.8 69.2zM94.3 316.5a32 32 0 1 1 61.8-16.6A32 32 0 1 1 94.3 316.5zM395.1 202.7a32 32 0 1 1 16.6 61.8 32 32 0 1 1 -16.6-61.8z" />
    </Icon>
);

export default CarBump;