
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fill-drip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill-drip?s=sharp-duotone-solid fill-drip}
 * @preview ![fill-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fill-drip.svg)
 */
const FillDrip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M106.5 288c44.5 44.5 89 89 133.5 133.5L373.5 288l-267 0zM448 448.8c0 34.9 28.3 63.2 63.2 63.2l1.6 0c34.9 0 63.2-28.3 63.2-63.2c0-11-2.9-21.8-8.3-31.4L512 320l-55.7 97.4c-5.5 9.6-8.3 20.4-8.3 31.4z" />
        <path d="M0 272l45.3 45.3L194.7 466.7 240 512l45.3-45.3L466.7 285.3 512 240l-45.3-45.3L317.3 45.3 272 0 226.7 45.3l-60.1 60.1-80-80L64 2.7 18.7 48 41.4 70.6l80 80L45.3 226.7 0 272zm166.6-76.1l18.7 18.7L208 237.3 253.3 192l-22.6-22.6-18.7-18.7L272 90.5 421.5 240 240 421.5 90.5 272l76.1-76.1z" />
    </Icon>
);

export default FillDrip;