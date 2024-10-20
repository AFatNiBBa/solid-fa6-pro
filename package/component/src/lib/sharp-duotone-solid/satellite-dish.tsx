
import { Icon, generic } from "../../index";

/**
 * A component that renders the `satellite-dish` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/satellite-dish?s=sharp-duotone-solid satellite-dish}
 * @preview ![satellite-dish](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/satellite-dish.svg)
 */
const SatelliteDish: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 0l0 64c141.4 0 256 114.6 256 256l64 0C512 143.3 368.7 0 192 0zm0 96l0 64c88.4 0 160 71.6 160 160l64 0C416 196.3 315.7 96 192 96z" />
        <path d="M164.7 324.7L32.4 192.4C11.9 224.7 0 262.9 0 304C0 418.9 93.1 512 208 512c41.1 0 79.3-11.9 111.6-32.4L187.3 347.3l28.4-28.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3l-28.4 28.4z" />
    </Icon>
);

export default SatelliteDish;