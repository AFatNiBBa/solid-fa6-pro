
import { Icon } from "../../index";

/**
 * A component that renders the `burger-lettuce` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-lettuce?s=sharp-solid burger-lettuce}
 * @preview ![burger-lettuce](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/burger-lettuce.svg)
 */
const BurgerLettuce: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 192l0 32 448 0 0-32s0-160-224-160S32 192 32 192zm96-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm240 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM480 384L32 384l0 96 448 0 0-96zM178.9 257.9L168 254l-10.9 4-76.9 28L27.2 266 4.8 326l64 24 11.1 4.2 11.1-4 77.1-28 77.1 28 10.9 4 10.9-4 77.1-28 77.1 28 11.1 4 11.1-4.2 64-24L484.8 266l-52.9 19.9-76.9-28L344 254l-10.9 4L256 286l-77.1-28z" />
    </Icon>
);

export default BurgerLettuce;