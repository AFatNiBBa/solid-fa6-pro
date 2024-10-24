
import { Icon } from "../../index";

/**
 * A component that renders the `burger` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=sharp-light burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32c112.8 0 206.2 83.4 221.7 192c1.5 10.5 2.3 21.1 2.3 32l-32 0L64 256l-32 0c0-10.9 .8-21.5 2.3-32C49.8 115.4 143.2 32 256 32zm0 32C160.9 64 81.9 133.2 66.7 224l378.7 0C430.1 133.2 351.1 64 256 64zM448 384L64 384l0 64 384 0 0-64zM32 352l32 0 384 0 32 0 0 32 0 64 0 32-32 0L64 480l-32 0 0-32 0-64 0-32zM16 288l16 0 448 0 16 0 0 32-16 0L32 320l-16 0 0-32zM160 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80-16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Burger;