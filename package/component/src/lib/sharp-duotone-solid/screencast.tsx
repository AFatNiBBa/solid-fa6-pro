
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screencast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=sharp-duotone-solid screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l0 96c22 0 43.4 2.5 64 7.1L64 96l448 0 0 320-231.1 0c4.7 20.6 7.1 42 7.1 64l224 0 64 0 0-64 0-320 0-64-64 0L64 32 0 32z" />
        <path d="M208 480c0-114.9-93.1-208-208-208l0-48c141.4 0 256 114.6 256 256l-48 0zM0 448a32 32 0 1 1 64 0A32 32 0 1 1 0 448zm0-80l0-48c88.4 0 160 71.6 160 160l-48 0c0-61.9-50.1-112-112-112z" />
    </Icon>
);

export default Screencast;