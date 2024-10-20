
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rv` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rv?s=sharp-duotone-solid rv}
 * @preview ![rv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rv.svg)
 */
const Rv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M112 448a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm320 0a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M224 0L384 0l0 32 224 0 0 128-224 0 0 256-117.5 0c-13.2-37.3-48.7-64-90.5-64c-38.9 0-72.5 23.2-87.5 56.5L0 320 0 32l224 0 0-32zM96 128l0 96 160 0 0-96L96 128zM416 320l0-32 0-72 0-24 24 0 88 0 8.6 0 6.6 5.4 88 72 8.8 7.2 0 11.4 0 32 0 96-53.5 0c-13.2-37.3-48.7-64-90.5-64c-33.4 0-62.8 17-80 42.9l0-74.9zm162.1-32l-58.7-48L464 240l0 48 114.1 0z" />
    </Icon>
);

export default Rv;