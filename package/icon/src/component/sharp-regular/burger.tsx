
import { Icon } from "../../index";

/**
 * A component that renders the `burger` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=sharp-regular burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 224l0-32s0-6.1 1.7-16C40.6 135.5 75.9 32 256 32s215.4 103.5 222.3 144c1.7 9.9 1.7 16 1.7 16l0 32-48 0L80 224l-48 0zm67.3-84.5c-9.1 13-14 26.2-16.6 36.5l346.6 0c-2.6-10.3-7.5-23.4-16.6-36.5c-8.4-12-22-26.2-44.8-37.7c.1 .7 .2 1.5 .2 2.2c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.1 2.4-9.6 6.1-12.6c-19.2-6-42.8-10.2-72.1-11.2c1.3 2.3 2 4.9 2 7.8c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-2.8 .7-5.5 2-7.8c-29.3 1-52.9 5.2-72.1 11.2c3.7 2.9 6.1 7.5 6.1 12.6c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-.7 .1-1.5 .1-2.2c-22.8 11.5-36.4 25.7-44.8 37.7zM80 432l352 0 0-32L80 400l0 32zM32 352l48 0 352 0 48 0 0 48 0 32 0 48-48 0L80 480l-48 0 0-48 0-32 0-48zm464-96l0 64L16 320l0-64 480 0z" />
    </Icon>
);

export default Burger;