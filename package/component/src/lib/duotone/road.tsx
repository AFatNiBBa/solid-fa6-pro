
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road?s=duotone road}
 * @preview ![road](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/road.svg)
 */
const Road: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64-64 0zm0 192l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 192l0 64 64 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M256 32l-74.8 0c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480L256 480l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64 201.4 0c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32L320 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm64 192l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default Road;