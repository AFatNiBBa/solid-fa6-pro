
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-plow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-plow?s=sharp-duotone-solid truck-plow}
 * @preview ![truck-plow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-plow.svg)
 */
const TruckPlow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M48 400a80 80 0 1 0 160 0A80 80 0 1 0 48 400zm224 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M160 32l-32 0 0 32 0 128L0 192 0 352l26.8 0c18-37.8 56.5-64 101.2-64s83.2 26.2 101.2 64l21.6 0c18-37.8 56.5-64 101.2-64s83.2 26.2 101.2 64l58.8 0 0 16 0 8.9 4.6 7.6 48 80L581 491.9 635.9 459l-16.5-27.4L576 359.1l0-7.1 0-64 0-103.1 43.4-72.4L635.9 85 581 52.1 564.6 79.5l-48 80-4.6 7.6 0 8.9 0 112-32 0 0-96-77.9 0L315.4 47.5 306.1 32 288 32 160 32zM327.5 192L192 192l0-96 77.9 0 57.6 96z" />
    </Icon>
);

export default TruckPlow;