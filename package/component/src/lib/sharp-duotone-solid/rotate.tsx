
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=sharp-duotone-solid rotate}
 * @preview ![rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rotate.svg)
 */
const Rotate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 288l0 160 24 24 57.6-57.6C141.4 458.1 198.7 480 256 480c57.3 0 114.7-21.9 158.4-65.6c24.4-24.4 42.1-53.1 52.9-83.7l-60.4-21.3c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0L200 312l-24-24L16 288z" />
        <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0c0 0 0 0 0 0L312 200l24 24 160 0 0-160L472 40 414.4 97.6s0 0 0 0c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4l60.4 21.3z" />
    </Icon>
);

export default Rotate;