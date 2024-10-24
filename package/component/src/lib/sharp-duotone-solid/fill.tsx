
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fill` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=sharp-duotone-solid fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M106.5 288L240 421.5 373.5 288l-267 0z" />
        <path d="M0 272l45.3 45.3L194.7 466.7 240 512l45.3-45.3L466.7 285.3 512 240l-45.3-45.3L317.3 45.3 272 0 226.7 45.3l-60.1 60.1-80-80L64 2.7 18.7 48 41.4 70.6l80 80L45.3 226.7 0 272zm166.6-76.1l18.7 18.7L208 237.3 253.3 192l-22.6-22.6-18.7-18.7L272 90.5 421.5 240 240 421.5 90.5 272l76.1-76.1z" />
    </Icon>
);

export default Fill;