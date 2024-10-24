
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shovel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=sharp-duotone-solid shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M193.4 273.4c15.1 15.1 30.2 30.2 45.3 45.3L341.3 216c11.4 5.1 24 8 37.3 8c24 0 47-9.5 64-26.5l24.2-24.2L512 128 466.7 82.7 429.3 45.3 384 0 338.7 45.3 314.5 69.5c-17 17-26.5 40-26.5 64c0 13.3 2.9 25.9 8 37.3L193.4 273.4zM352 133.5c0-7 2.8-13.8 7.8-18.7L384 90.5 421.5 128l-24.2 24.2c-5 5-11.7 7.8-18.7 7.8c-14.6 0-26.5-11.9-26.5-26.5z" />
        <path d="M304 384L128 208 0 336V512H176L304 384z" />
    </Icon>
);

export default Shovel;