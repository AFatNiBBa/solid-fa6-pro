
import { Icon } from "../../index";

/**
 * A component that renders the `fill-drip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill-drip?s=sharp-solid fill-drip}
 * @preview ![fill-drip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fill-drip.svg)
 */
const FillDrip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 272l45.3 45.3L194.7 466.7 240 512l45.3-45.3L466.7 285.3 512 240l-45.3-45.3L317.3 45.3 272 0 226.7 45.3l-60.1 60.1-80-80L64 2.7 18.7 48 41.4 70.6l80 80L45.3 226.7 0 272zm185.4-57.4L208 237.3 253.3 192l-22.6-22.6-18.7-18.7L272 90.5 421.5 240l-48 48-267 0-16-16 76.1-76.1 18.7 18.7zM512 320l-55.7 97.4c-5.5 9.6-8.3 20.4-8.3 31.4c0 34.9 28.3 63.2 63.2 63.2l1.6 0c34.9 0 63.2-28.3 63.2-63.2c0-11-2.9-21.8-8.3-31.4L512 320z" />
    </Icon>
);

export default FillDrip;