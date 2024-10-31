
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind?s=sharp-duotone-solid wind}
 * @preview ![wind](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wind.svg)
 */
const Wind: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-32 0 0 64 32 0 32 0c53 0 96-43 96-96s-43-96-96-96L32 224 0 224z" />
        <path d="M320 0L288 0l0 64 32 0 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128 0 128l0 64 32 0 320 0c53 0 96-43 96-96s-43-96-96-96L320 0zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320 0 320l0 64 32 0 128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0-32 0 0 64 32 0z" />
    </Icon>
);

export default Wind;