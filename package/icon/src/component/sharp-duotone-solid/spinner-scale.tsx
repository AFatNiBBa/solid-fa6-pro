
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spinner-scale` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-scale?s=sharp-duotone-solid spinner-scale}
 * @preview ![spinner-scale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spinner-scale.svg)
 */
const SpinnerScale: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M52.4 120.2l33.9 33.9c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9L120.2 52.4 52.4 120.2zM75 391.8L120.2 437l22.6-22.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L75 391.8zM352.2 80.6c-21.9 21.9-21.9 57.3 0 79.2s57.3 21.9 79.2 0L471 120.2 391.8 41 352.2 80.6zm17 288.5c-12.5 12.5-12.5 32.8 0 45.3L391.8 437 437 391.8l-22.6-22.6c-12.5-12.5-32.8-12.5-45.3 0z" />
        <path d="M308 12L204 12l0 52c0 28.7 23.3 52 52 52s52-23.3 52-52l0-52zM256 416c-17.7 0-32 14.3-32 32l0 32 64 0 0-32c0-17.7-14.3-32-32-32zM480 288l0-64-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0zM96 256c0-17.7-14.3-32-32-32l-32 0 0 64 32 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default SpinnerScale;