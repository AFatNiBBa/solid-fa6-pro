
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-rotate-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-left?s=sharp-duotone-solid arrow-rotate-left}
 * @preview ![arrow-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-rotate-left.svg)
 */
const ArrowRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 115.2L80 160l45.7 0 17.1-17.1c62.5-62.5 163.8-62.5 226.3 0s62.5 163.8 0 226.3s-163.8 62.5-226.3 0L97.6 414.4C141.3 458.1 198.7 480 256 480s114.7-21.9 158.4-65.6S480 313.3 480 256s-21.9-114.7-65.6-158.4S313.3 32 256 32S141.3 53.9 97.6 97.6L80 115.2z" />
        <path d="M16 224l32 0 128 0 32 0 0-64-32 0-96 0 0-96 0-32L16 32l0 32 0 128 0 32z" />
    </Icon>
);

export default ArrowRotateLeft;