
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-fancy-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy-slash?s=sharp-duotone-solid pen-fancy-slash}
 * @preview ![pen-fancy-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-fancy-slash.svg)
 */
const PenFancySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M73.1 480.3L128 288l78.4-29.4 117.8 92.8L288 448 95.7 503l88-88c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3l-88 88zM290.6 202.9L480 0l96 96L383.9 275.3l-93.3-72.4z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PenFancySlash;