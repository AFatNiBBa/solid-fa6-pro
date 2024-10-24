
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=sharp-duotone-solid flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 224l0 64 96 0 0-64-96 0zM576 96l0 320 32 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-32 0z" />
        <path d="M384 352s80 64 192 64l0-320c-112 0-192 64-192 64L0 160 0 352l384 0zM320 224l0 64-96 0 0-64 96 0z" />
    </Icon>
);

export default Flashlight;