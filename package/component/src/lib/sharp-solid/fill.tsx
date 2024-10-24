
import { Icon } from "../../index";

/**
 * A component that renders the `fill` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=sharp-solid fill}
 * @preview ![fill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fill.svg)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path d="M45.3 317.3L0 272l45.3-45.3 76.1-76.1-80-80L18.7 48 64 2.7 86.6 25.4l80 80 60.1-60.1L272 0l45.3 45.3L466.7 194.7 512 240l-45.3 45.3L285.3 466.7 240 512l-45.3-45.3L45.3 317.3zM166.6 195.9L90.5 272l16 16 267 0 48-48L272 90.5l-60.1 60.1 18.7 18.7L253.3 192 208 237.3l-22.6-22.6-18.7-18.7z" />
    </Icon>
);

export default Fill;