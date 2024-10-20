
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=sharp-duotone-solid circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM120.6 144l59.5 0L256 247.4 331.8 144l59.5 0C354.2 194.6 317.1 245.2 280 295.9c0 26.7 0 53.4 0 80.1c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-26.7 0-53.4 0-80.1C194.9 245.2 157.8 194.6 120.6 144z" />
        <path d="M120.6 144L232 295.9l0 80.1 0 24 48 0 0-24 0-80.1L391.4 144l-59.5 0L256 247.4 180.2 144l-59.5 0z" />
    </Icon>
);

export default CircleY;