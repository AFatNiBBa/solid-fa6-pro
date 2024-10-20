
import { Icon, generic } from "../../index";

/**
 * A component that renders the `marker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=sharp-duotone-solid marker}
 * @preview ![marker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/marker.svg)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512l160-32L304 336c-42.7-42.7-85.3-85.3-128-128L32 352 0 512z" />
        <path d="M318.2 65.8l39.3-39.3c17-17 40-26.5 64-26.5c50 0 90.5 40.5 90.5 90.5c0 24-9.5 47-26.5 64L304 336 176 208 284.3 99.7 253 69 145 177l-17 17L94.1 160l17-17L235.8 18.2 252.6 1.4l17 16.7 48.6 47.7z" />
    </Icon>
);

export default Marker;