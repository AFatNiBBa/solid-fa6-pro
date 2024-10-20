
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-up-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-up-slash?s=sharp-duotone-solid plane-up-slash}
 * @preview ![plane-up-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-up-slash.svg)
 */
const PlaneUpSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 288l0 96 192-64 0 80-64 48 0 64 128-32 128 32 0-63-25.7-20.2L384 400l0-1.5L161.3 223.1 64 288zM244.9 167.4c80 62.1 159.9 124.1 239.8 186.2L576 384l0-96L384 160l0-66.3C384 59.5 356 0 320 0c-35 0-64 59.5-64 93.7l0 66.3-11.1 7.4z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PlaneUpSlash;