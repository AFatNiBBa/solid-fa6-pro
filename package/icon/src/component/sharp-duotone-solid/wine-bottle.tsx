
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wine-bottle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-bottle?s=sharp-duotone-solid wine-bottle}
 * @preview ![wine-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wine-bottle.svg)
 */
const WineBottle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M54.7 278.7C89.8 313.8 124.9 348.9 160 384L288 256c-35.1-35.1-70.1-70.1-105.2-105.2c-.9 .8-1.7 1.6-2.5 2.5L54.7 278.7zm301-179l56.6 56.6 32-32 9.4-9.4 11.9 11.9 45.3-45.3L488.2 59 453 23.8 430.4 1.1 385.1 46.4l11.9 11.9-9.4 9.4-32 32z" />
        <path d="M412.3 156.3L355.7 99.7l-29.8 29.8c-46.3-23.1-103.7-16-143.1 21.2L288 256 160 384 54.7 278.7 0 333.5 178.5 512 358.7 331.8c39.4-39.4 47.3-98.4 23.7-145.7l29.8-29.8z" />
    </Icon>
);

export default WineBottle;