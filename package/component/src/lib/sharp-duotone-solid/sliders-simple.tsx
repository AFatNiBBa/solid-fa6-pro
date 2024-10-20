
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=sharp-duotone-solid sliders-simple}
 * @preview ![sliders-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sliders-simple.svg)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l0 64 32 0 288 0 0-64L32 128 0 128zM192 320l0 64 288 0 32 0 0-64-32 0-288 0z" />
        <path d="M64 384l64 0 0-64-64 0 0 64zM0 448l0-64 0-64 0-64 64 0 64 0 64 0 0 64 0 64 0 64-64 0-64 0L0 448zM384 192l64 0 0-64-64 0 0 64zm-64 64l0-64 0-64 0-64 64 0 64 0 64 0 0 64 0 64 0 64-64 0-64 0-64 0z" />
    </Icon>
);

export default SlidersSimple;