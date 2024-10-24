
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=sharp-duotone-solid circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm118.1 32c5.7-5.7 11.3-11.3 17-17c34.7-34.7 69.3-69.3 104-104l17-17 17 17c34.7 34.7 69.3 69.3 104 104c5.7 5.7 11.3 11.3 17 17L360 321.9c-5.7-5.7-11.3-11.3-17-17c-29-29-58-58-87-87c-29 29-58 58-87 87c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9z" />
        <path d="M256 150.1l17 17L377 271l17 17L360 321.9l-17-17-87-87-87 87-17 17L118.1 288l17-17L239 167l17-17z" />
    </Icon>
);

export default CircleChevronUp;