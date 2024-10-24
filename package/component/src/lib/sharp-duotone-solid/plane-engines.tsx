
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-engines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-engines?s=sharp-duotone-solid plane-engines}
 * @preview ![plane-engines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-engines.svg)
 */
const PlaneEngines: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160 0l54.9 192 150.9 0c-12.2-21.3-24.4-42.7-36.6-64s-24.4-42.7-36.6-64L256 0 160 0zm0 512l96 0c12.2-21.3 24.4-42.7 36.6-64l36.6-64c12.2-21.3 24.4-42.7 36.6-64l-150.9 0L160 512z" />
        <path d="M292.6 64L352 64l0 64-22.9 0L292.6 64zM352 448l-59.4 0 36.6-64 22.9 0 0 64zM482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64L112 320 64 384 0 384l24.2-96.9C10.3 283.6 0 271 0 256s10.3-27.6 24.2-31.1L0 128l64 0 48 64 370.3 0z" />
    </Icon>
);

export default PlaneEngines;